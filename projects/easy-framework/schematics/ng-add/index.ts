/* import { WorkspaceDefinition } from '@angular-devkit/core/src/workspace';
import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { getWorkspace } from '@schematics/angular/utility/workspace';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { WorkspaceProject } from '@schematics/angular/utility/workspace-models';

import { addModuleImportToRootModule, getProjectFromWorkspace } from '../utilities';
import { Schema } from './schema';

// const packageJson: Record<string, unknown> = require('../../package.json');

const addEasyModule: (options: Schema) => Rule = (options: Schema): Rule => {
	return (tree: Tree): Tree => {
		const angularWorkspace: Promise<WorkspaceDefinition> = getWorkspace(tree);
		const project: WorkspaceProject = getProjectFromWorkspace(angularWorkspace, options.project);

		addModuleImportToRootModule(tree, 'EasyModule', 'easy-framework', project);

		return tree;
	};
};
const addEasyToPackageJson: () => Rule = (): Rule => {
	return (tree: Tree, context: SchematicContext): Tree => {
		context.addTask(new NodePackageInstallTask());

		return tree;
	};
};

export const ngAdd: (options: Schema) => Rule = (options: Schema): Rule => {
	return chain([
		addEasyModule(options),
		addEasyToPackageJson()
	]);
};
 */
