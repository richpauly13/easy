import { Path } from '@angular-devkit/core';
import { SchematicsException, Tree, UpdateRecorder } from '@angular-devkit/schematics';

import { addImportToModule } from '@schematics/angular/utility/ast-utils';
import { Change, InsertChange } from '@schematics/angular/utility/change';
import { findModuleFromOptions as internalFindModule } from '@schematics/angular/utility/find-module';
import { getAppModulePath } from '@schematics/angular/utility/ng-ast-utils';
import { getWorkspace } from '@schematics/angular/utility/config';
import { Schema as ComponentSchema } from '@schematics/angular/component/schema';
import { WorkspaceProject, WorkspaceSchema } from '@schematics/angular/utility/workspace-models';

import * as typescript from 'typescript';

import * as fs from 'fs';
import * as path from 'path';

// Add dependency to the package.json file.
export function addDependencyToPackageJson(tree: Tree, pkg: string, version: string): Tree {
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

		tree.overwrite('package.json', JSON.stringify(json, null, 2));
	}

	return tree;
}

// Add and import module to specific module.
export function addModuleImportToModule(tree: Tree, modulePath: string, moduleName: string, importPath: string): void {
	const moduleSource: typescript.SourceFile = getSourceFile(tree, modulePath);

	if (!moduleSource) {
		throw new SchematicsException(`Module not found: ${modulePath}`);
	}

	// TypeScript version mismatch due to @schematics/angular using a different version than Easy.  Cast to any to avoid the type assignment failure.
	const changes: Change[] = addImportToModule(moduleSource as any, modulePath, moduleName, importPath);
	const recorder: UpdateRecorder = tree.beginUpdate(modulePath);

	changes.forEach((change: Change) => {
		if (change instanceof InsertChange) {
			recorder.insertLeft(change.pos, change.toAdd);
		}
	});

	tree.commitUpdate(recorder);
}

// Add module and import to root app module.
export function addModuleImportToRootModule(tree: Tree, moduleName: string, importPath: string, project: WorkspaceProject): void {
	const modulePath: string = getAppModulePath(tree, getProjectMainFile(project));

	addModuleImportToModule(tree, modulePath, moduleName, importPath);
}

// Find the internal find module from options with null path handling.
export function findModuleFromOptions(tree: Tree, options: ComponentSchema): Path {
	const workspace: WorkspaceSchema = getWorkspace(tree);

	if (!options.project) {
		options.project = Object.keys(workspace.projects)[0];
	}

	const project: WorkspaceProject = workspace.projects[options.project];

	if (options.path === null) {
		options.path = `/${project.root}/src/app`;
	}

	return internalFindModule(tree, options);
}

// Get the version of the library.
/* export function getLibraryVersion(): string | null {
	try {
		return require('easy-framework/package.json').version;
	} catch {
		return null;
	}
} */

export function getLibraryVersion(): any {
	return JSON.parse(
		fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8')
	).version;
}

// Get the version of a package.
export function getPackageVersion(tree: Tree, name: string): string | null {
	if (!tree.exists('package.json')) {
		return null;
	}

	const packageJson: any = JSON.parse(tree.read('package.json')!.toString('utf8')).version;

	if (packageJson.dependencies && packageJson.dependencies[name]) {
		return packageJson.dependencies[name];
	}

	return null;
}

// Get project from the workspace
export function getProjectFromWorkspace(workspace: WorkspaceSchema, projectName?: string): WorkspaceProject {
	const project: WorkspaceProject = workspace.projects[projectName || workspace.defaultProject!];

	if (!project) {
		throw new SchematicsException(`Could not find project in workspace: ${projectName}`);
	}

	return project;
}

// Get the main TypeScript file in the given project and return its path.
function getProjectMainFile(project: WorkspaceProject): string {
	const buildOptions: any = getProjectTargetOptions(project, 'build');

	if (!buildOptions.main) {
		throw new SchematicsException(`Could not find the project main file inside of the workspace config (${project.sourceRoot})`);
	}

	return buildOptions.main;
}

// Get the architect options for the build target of the given project.
function getProjectTargetOptions(project: WorkspaceProject, buildTarget: string): any {
	if (project.targets && project.targets[buildTarget] && project.targets[buildTarget].options) {
		return project.targets[buildTarget].options;
	}

	// See: https://github.com/angular/angular-cli/commit/307160806cb48c95ecb8982854f452303801ac9f.
	if (project.architect && project.architect[buildTarget] && project.architect[buildTarget].options) {
		return project.architect[buildTarget].options;
	}

	throw new SchematicsException(`Cannot determine project target configuration for: ${buildTarget}.`);
}

// Get the module path and return the TypeScript source file.
function getSourceFile(tree: Tree, modulePath: string): typescript.SourceFile {
	const buffer: Buffer | null = tree.read(modulePath);

	if (!buffer) {
		throw new SchematicsException(`Could not find file for path: ${modulePath}`);
	}

	return typescript.createSourceFile(modulePath, buffer.toString(), typescript.ScriptTarget.Latest, true);
}

// Sort the package.json dependencies.
function sortPackageDependencies(dependencies: any): any {
	return Object.keys(dependencies)
	.sort()
	.reduce((result: any, key: any) => {
		result[key] = dependencies[key];

		return result;
	}, {});
}
