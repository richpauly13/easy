/* import { addImportToModule } from '@schematics/angular/utility/ast-utils';
import { Change, InsertChange } from '@schematics/angular/utility/change';
import { findModuleFromOptions as internalFindModule } from '@schematics/angular/utility/find-module';
import { getAppModulePath } from '@schematics/angular/utility/ng-ast-utils';
import { getWorkspace } from '@schematics/angular/utility/workspace';
import { Path } from '@angular-devkit/core';
import { Schema as ComponentSchema } from '@schematics/angular/component/schema';
import { SchematicsException, Tree, UpdateRecorder } from '@angular-devkit/schematics';
import { WorkspaceProject, WorkspaceSchema } from '@schematics/angular/utility/workspace-models';

import * as typescript from 'typescript';
import { WorkspaceDefinition } from '@angular-devkit/core/src/workspace';

// add and import module to specific module.
export function addModuleImportToModule(tree: Tree, modulePath: string, moduleName: string, importPath: string): void {
	const moduleSource: typescript.SourceFile = getSourceFile(tree, modulePath);

	if (!moduleSource) {
		throw new SchematicsException(`Module not found: ${modulePath}`);
	}

	const changes: Change[] = addImportToModule(moduleSource as any, modulePath, moduleName, importPath);
	const recorder: UpdateRecorder = tree.beginUpdate(modulePath);

	changes.forEach((change: Change): void => {
		if (change instanceof InsertChange) {
			recorder.insertLeft(change.pos, change.toAdd);
		}
	});

	tree.commitUpdate(recorder);
}

// add module and import to root app module.
export function addModuleImportToRootModule(tree: Tree, moduleName: string, importPath: string, project: WorkspaceProject): void {
	const modulePath: string = getAppModulePath(tree, getProjectMainFile(project));

	addModuleImportToModule(tree, modulePath, moduleName, importPath);
}

// add a package to the package.json in the given host tree.
export function addPackageToPackageJson(tree: Tree, name: string, version: string): Tree {
	if (tree.exists('package.json')) {
		const sourceText: string = tree.read('package.json')!.toString('utf-8');
		const json: any = JSON.parse(sourceText);

		if (!json.dependencies) {
			json.dependencies = {};
		}

		if (!json.dependencies[name]) {
			json.dependencies[name] = version;
			json.dependencies = sortObjectByKeys(json.dependencies);
		}

		tree.overwrite('package.json', JSON.stringify(json, null, 2));
	}

	return tree;
}

// find the internal find module from options with null path handling.
export function findModuleFromOptions(tree: Tree, options: ComponentSchema): Path | undefined {
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

// get the version of the specified package by looking at the package.json in the given tree.
export function getPackageVersionFromPackageJson(tree: Tree, name: string): string | null {
	if (!tree.exists('package.json')) {
		return null;
	}

	const packageJson: any = JSON.parse(tree.read('package.json')!.toString('utf8'));

	if (packageJson.dependencies && packageJson.dependencies[name]) {
		return packageJson.dependencies[name];
	}

	return null;
}

export const getProjectFromWorkspace: (workspace: WorkspaceDefinition, projectName?: string) => WorkspaceProject = (workspace: WorkspaceDefinition, projectName?: string): WorkspaceProject => {
	const project = workspace.projects.get(projectName);

	if (!project) {
		throw new SchematicsException(`Could not find project in workspace: ${projectName}`);
	}

	return project;
};

// get the main TypeScript file in the given project and return its path.
function getProjectMainFile(project: WorkspaceProject): string {
	const buildOptions: any = getProjectTargetOptions(project, 'build');

	if (!buildOptions.main) {
		throw new SchematicsException(`Could not find the project main file inside of the workspace config (${project.sourceRoot})`);
	}

	return buildOptions.main;
}

// get the architect options for the build target of the given project.
function getProjectTargetOptions(project: WorkspaceProject, buildTarget: string): any {
	if (project.targets && project.targets[buildTarget] && project.targets[buildTarget].options) {
		return project.targets[buildTarget].options;
	}

	// see: https://github.com/angular/angular-cli/commit/307160806cb48c95ecb8982854f452303801ac9f.
	if (project.architect && project.architect[buildTarget] && project.architect[buildTarget].options) {
		return project.architect[buildTarget].options;
	}

	throw new SchematicsException(`Cannot determine project target configuration for: ${buildTarget}.`);
}

// get the module path and return the TypeScript source file.
function getSourceFile(tree: Tree, modulePath: string): typescript.SourceFile {
	const buffer: Buffer | null = tree.read(modulePath);

	if (!buffer) {
		throw new SchematicsException(`Could not find file for path: ${modulePath}`);
	}

	return typescript.createSourceFile(modulePath, buffer.toString(), typescript.ScriptTarget.Latest, true);
}

// sort the keys of the given object.
function sortObjectByKeys(object: any): any {
	return Object.keys(object).sort().reduce((result: Record<string, unknown>, key: string): Record<string, unknown> => (result[key] = object[key]) && result, {});
}
 */
