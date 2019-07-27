import { SchematicsException, Tree, UpdateRecorder } from '@angular-devkit/schematics';

import { addImportToModule } from '@schematics/angular/utility/ast-utils';
import { Change, InsertChange } from '@schematics/angular/utility/change';
import { getAppModulePath } from '@schematics/angular/utility/ng-ast-utils';
import { WorkspaceProject, WorkspaceSchema } from '@schematics/angular/utility/workspace-models';

import * as typescript from 'typescript';

import * as fs from 'fs';
import * as path from 'path';

export function addModuleImportToRootModule(host: Tree, moduleName: string, src: string, project: WorkspaceProject): void {
	const modulePath: string = getAppModulePath(host, getProjectMainFile(project));

	addModuleImportToModule(host, modulePath, moduleName, src);
}

// Adds the library module to the application
export function addModuleImportToModule(tree: Tree, modulePath: string, moduleName: string, src: string): void {
	const moduleSource: typescript.SourceFile = getSourceModule(tree, modulePath);

	if (!moduleSource) {
		throw new SchematicsException(`Module not found: ${modulePath}`);
	}

	const changes: Change[] = addImportToModule(moduleSource as any, modulePath, moduleName, src);
	const recorder: UpdateRecorder = tree.beginUpdate(modulePath);

	changes.forEach((change: Change) => {
		if (change instanceof InsertChange) {
			recorder.insertLeft(change.pos, change.toAdd);
		}
	});

	tree.commitUpdate(recorder);
}

// Adds package to the package.json file
export function addPackageToPackageJson(tree: Tree, pkg: string, version: string): Tree {
	if (tree.exists('package.json')) {
		const initialText: string = tree.read('package.json')!.toString('utf-8');
		const json: any = JSON.parse(initialText);

		if (!json.dependencies) {
			json.dependencies = {};
		}

		if (!json.dependencies[pkg]) {
			json.dependencies[pkg] = version;
			json.dependencies = sortPackageDependencies(json.dependencies);
		}

		tree.overwrite('package.json', JSON.stringify(json, undefined, 2));
	}

	return tree;
}

// Gets the version of the library
export function getLibraryVersion(): string {
	return JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8')).version;
}

// Gets the version of a package
export function getPackageVersion(tree: Tree, name: string): string | undefined {
	if (!tree.exists('package.json')) {
		return undefined;
	}

	const packageJson: any = JSON.parse(tree.read('package.json')!.toString('utf8')).version;

	if (packageJson.dependencies && packageJson.dependencies[name]) {
		return packageJson.dependencies[name];
	}

	return undefined;
}

export function getProjectFromWorkspace(workspace: WorkspaceSchema, projectName?: string): WorkspaceProject {
	const project: WorkspaceProject = workspace.projects[projectName || workspace.defaultProject!];

	if (!project) {
		throw new SchematicsException(`Could not find project in workspace: ${projectName}`);
	}

	return project;
}

// Looks for the main TypeScript file in the given project and returns its path.
export function getProjectMainFile(project: WorkspaceProject): string {
	const buildOptions: any = getProjectTargetOptions(project, 'build');

	if (!buildOptions.main) {
		throw new SchematicsException(`Could not find the project main file inside of the workspace config (${project.sourceRoot})`);
	}

	return buildOptions.main;
}

// Resolves the architect options for the build target of the given project.
export function getProjectTargetOptions(project: WorkspaceProject, buildTarget: string): any {
	if (project.targets && project.targets[buildTarget] && project.targets[buildTarget].options) {
		return project.targets[buildTarget].options;
	}

	// See: https://github.com/angular/angular-cli/commit/307160806cb48c95ecb8982854f452303801ac9f
	if (project.architect && project.architect[buildTarget] && project.architect[buildTarget].options) {
		return project.architect[buildTarget].options;
	}

	throw new SchematicsException(`Cannot determine project target configuration for: ${buildTarget}.`);
}

// Gets the source module for the import
export function getSourceModule(tree: Tree, modulePath: string): typescript.SourceFile {
	const buffer: Buffer | null = tree.read(modulePath);

	if (!buffer) {
		throw new SchematicsException(`Could not find file for path: ${modulePath}`);
	}

	return typescript.createSourceFile(modulePath, buffer.toString(), typescript.ScriptTarget.Latest, true);
}

// Sorts dependency key
function sortPackageDependencies(dependencies: any): any {
	return Object.keys(dependencies)
	.sort()
	.reduce((result: any, key: any) => {
		result[key] = dependencies[key];

		return result;
	}, {});
}
