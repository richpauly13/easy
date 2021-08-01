/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { JsonValue, Path } from '@angular-devkit/core';
import { ProjectDefinition, WorkspaceDefinition } from '@angular-devkit/core/src/workspace';
import { SchematicsException, Tree, UpdateRecorder } from '@angular-devkit/schematics';

import { addExportToModule, addImportToModule } from '@schematics/angular/utility/ast-utils';
import { Change, InsertChange } from '@schematics/angular/utility/change';
import { getAppModulePath } from '@schematics/angular/utility/ng-ast-utils';

import * as ts from 'typescript';

// Get project from the workspace
export function getProjectFromWorkspace(workspace: WorkspaceDefinition, projectName: string = workspace.extensions.defaultProject as string): ProjectDefinition {
	const project: ProjectDefinition | undefined = workspace.projects.get(projectName);

	if (!project) {
		throw new SchematicsException(`Could not find project in workspace: ${projectName}`);
	}

	return project;
}

// Get the architect options for the build target of the given project.
function getProjectTargetOptions(project: ProjectDefinition, buildTarget: string): Record<string, JsonValue | undefined> {
	const options: Record<string, JsonValue | undefined> | undefined = project.targets?.get(buildTarget)?.options;

	if (!options) {
		throw new SchematicsException(`Cannot determine project target configuration for: ${buildTarget}.`);
	}

	return options;
}

// Get the main TypeScript file in the given project and return its path.
function getProjectMainFile(project: ProjectDefinition): Path {
	const buildOptions: Record<string, JsonValue | undefined> = getProjectTargetOptions(project, 'build');

	if (!buildOptions.main) {
		throw new SchematicsException(`Could not find the project main file inside of the workspace config (${project.sourceRoot})`);
	}

	return buildOptions.main as Path;
}

// Get the module path and return the TypeScript source file.
function getSourceFile(tree: Tree, modulePath: string): ts.SourceFile {
	const buffer: Buffer | null = tree.read(modulePath);

	if (!buffer) {
		throw new SchematicsException(`Could not find file for path: ${modulePath}`);
	}

	return ts.createSourceFile(modulePath, buffer.toString(), ts.ScriptTarget.Latest, true);
}

// Add and export module to a specific module.
function addModuleExportToModule(tree: Tree, modulePath: string, moduleName: string, importPath: string): void {
	const moduleSource: ts.SourceFile = getSourceFile(tree, modulePath);

	if (!moduleSource) {
		throw new SchematicsException(`Module not found: ${modulePath}`);
	}

	const changes: Change[] = addExportToModule(moduleSource, modulePath, moduleName, importPath);
	const recorder: UpdateRecorder = tree.beginUpdate(modulePath);

	changes.forEach((change: Change) => {
		if (change instanceof InsertChange) {
			recorder.insertLeft(change.pos, change.toAdd);
		}
	});

	tree.commitUpdate(recorder);
}

// Add and import module to a specific module.
function addModuleImportToModule(tree: Tree, modulePath: string, moduleName: string, importPath: string): void {
	const moduleSource: ts.SourceFile = getSourceFile(tree, modulePath);

	if (!moduleSource) {
		throw new SchematicsException(`Module not found: ${modulePath}`);
	}

	const changes: Change[] = addImportToModule(moduleSource, modulePath, moduleName, importPath);
	const recorder: UpdateRecorder = tree.beginUpdate(modulePath);

	changes.forEach((change: Change) => {
		if (change instanceof InsertChange) {
			recorder.insertLeft(change.pos, change.toAdd);
		}
	});

	tree.commitUpdate(recorder);
}

// Add module and export to the shared module.
export function addModuleExportToSharedModule(tree: Tree, moduleName: string, importPath: string): void {
	const modulePath: string = 'src/app/shared/shared.module.ts';

	addModuleExportToModule(tree, modulePath, moduleName, importPath);
}

// Add module and import to the app module.
export function addModuleImportToAppModule(tree: Tree, moduleName: string, importPath: string, project: ProjectDefinition): void {
	const modulePath: string = getAppModulePath(tree, getProjectMainFile(project));

	addModuleImportToModule(tree, modulePath, moduleName, importPath);
}
