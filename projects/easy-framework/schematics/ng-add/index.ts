import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { getWorkspace } from '@schematics/angular/utility/config';
import { WorkspaceProject, WorkspaceSchema } from '@schematics/angular/utility/workspace-models';

import { addDependencyToPackageJson, addModuleImportToRootModule, getLibraryVersion, getProjectFromWorkspace } from '../utilities';
import { Schema as EasySchema } from './schema';

export function addEasy(options: EasySchema): Rule {
	return (tree: Tree, context: SchematicContext): Tree => {
		const angularWorkspace: WorkspaceSchema = getWorkspace(tree);
		const project: WorkspaceProject = getProjectFromWorkspace(angularWorkspace, options.project);
		const version: string = getLibraryVersion();

		addModuleImportToRootModule(tree, 'EasyModule', 'easy-framework', project);
		addDependencyToPackageJson(tree, 'easy-framework', `^${version}`);

		context.addTask(new NodePackageInstallTask());

		return tree;
	};
}
