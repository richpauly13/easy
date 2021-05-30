import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { ProjectDefinition, WorkspaceDefinition } from '@angular-devkit/core/src/workspace';

import { getWorkspace } from '@schematics/angular/utility/workspace';

import { addModuleImportToRootModule, getProjectFromWorkspace } from '../utilities';
import { Schema } from './schema';

function addEasyToPackageJson(): Rule {
	return (tree: Tree, context: SchematicContext) => {
		context.addTask(new NodePackageInstallTask());

		return tree;
	};
}

function addSharedModuleToAppModule(options: Schema): Rule {
	return async(tree: Tree) => {
		const workspace: WorkspaceDefinition = await getWorkspace(tree);
		const project: ProjectDefinition = getProjectFromWorkspace(workspace, options.project);

		addModuleImportToRootModule(tree, 'SharedModule', './shared/shared.module', project);
	};
}

export function ngAdd(options: Schema): Rule {
	return chain([
		addEasyToPackageJson(),
		addSharedModuleToAppModule(options)
	]);
}
