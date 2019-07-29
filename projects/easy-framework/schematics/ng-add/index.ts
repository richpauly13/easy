import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { getWorkspace } from '@schematics/angular/utility/config';
import { WorkspaceProject, WorkspaceSchema } from '@schematics/angular/utility/workspace-models';

import { addModuleImportToRootModule, addPackageToPackageJson, getLibraryVersion, getProjectFromWorkspace } from '../utilities';
import { Schema as AddEasySchema } from './schema';

export function addEasy(options: AddEasySchema): Rule {
	return (tree: Tree, context: SchematicContext): Tree => {
		const angularWorkspace: WorkspaceSchema = getWorkspace(tree);
		const easyModuleName: string = 'EasyModule';
		const project: WorkspaceProject = getProjectFromWorkspace(angularWorkspace, options.project);
		const version: string = getLibraryVersion();

		addPackageToPackageJson(tree, 'easy-framework', `^${version}`);
		addModuleImportToRootModule(tree, easyModuleName, 'easy-framework', project);

		context.addTask(new NodePackageInstallTask());

		return tree;
	};
}
