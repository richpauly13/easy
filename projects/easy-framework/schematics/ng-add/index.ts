import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { getWorkspace } from '@schematics/angular/utility/config';
import { WorkspaceProject, WorkspaceSchema } from '@schematics/angular/utility/workspace-models';

import { addDependencyToPackageJson, addModuleImportToRootModule, getLibraryVersion, getProjectFromWorkspace } from '../utilities';
import { Schema as EasySchema } from './schema';

export default function(options: EasySchema): Rule {
	return chain([
		addEasyFrameworkToPackageJson(),
		addEasyFrameworkModuleToAppModule(options)
	]);
}

function addEasyFrameworkToPackageJson(): Rule {
	return (tree: Tree, context: SchematicContext): Tree => {
		const version: string | undefined = getLibraryVersion();

		addDependencyToPackageJson(tree, 'easy-framework', `^${version}`);

		context.addTask(new NodePackageInstallTask());

		return tree;
	};
}

function addEasyFrameworkModuleToAppModule(options: EasySchema): Rule {
	return (tree: Tree): Tree => {
		const angularWorkspace: WorkspaceSchema = getWorkspace(tree);
		const project: WorkspaceProject = getProjectFromWorkspace(angularWorkspace, options.project);

		addModuleImportToRootModule(tree, 'EasyModule', 'easy-framework', project);

		return tree;
	};
}
