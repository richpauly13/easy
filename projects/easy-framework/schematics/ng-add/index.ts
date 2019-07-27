import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { addPackageToPackageJson, getLibraryVersion } from '../utilities';
import { Schema as AddEasySchema } from './schema';

export function addEasy(options: AddEasySchema): Rule {
	return (tree: Tree, context: SchematicContext): Tree => {
		const version: string = getLibraryVersion();

		addPackageToPackageJson(tree, 'easy-framework', `^${version}`);

		context.addTask(new NodePackageInstallTask());

		return tree;
	};
}
