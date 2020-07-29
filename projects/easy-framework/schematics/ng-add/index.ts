import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

import { getWorkspace } from '@schematics/angular/utility/config';
import { WorkspaceProject, WorkspaceSchema } from '@schematics/angular/utility/workspace-models';

import { addModuleImportToRootModule, getProjectFromWorkspace } from '../utilities';
import { Schema } from './schema';

export function ngAdd(options: Schema): Rule {
	return chain([
		addEasyFrameworkToPackageJson(),
		addEasyFrameworkModuleToAppModule(options)
	]);
}

function addEasyFrameworkToPackageJson(): Rule {
	return (tree: Tree, context: SchematicContext) => {
		context.addTask(new NodePackageInstallTask());

		return tree;
	};
}

function addEasyFrameworkModuleToAppModule(options: Schema): Rule {
	return (tree: Tree): Tree => {
		const angularWorkspace: WorkspaceSchema = getWorkspace(tree);
		const project: WorkspaceProject = getProjectFromWorkspace(angularWorkspace, options.project);

		addModuleImportToRootModule(tree, 'EasyModule', 'easy-framework', project);

		return tree;
	};
}
