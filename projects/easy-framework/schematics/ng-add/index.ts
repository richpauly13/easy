import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { addPackageToPackageJson, getLibraryVersion } from '../utilities';
import { Schema as AddEasySchema } from './schema';

export default function(options: AddEasySchema): Rule {
	return (tree: Tree, context: SchematicContext): Tree => {
		const version: any = getLibraryVersion(tree);

		addPackageToPackageJson(tree, 'easy-framework', `^${version}`);

		context.logger.log(
			'info',
			`✅️ Added 'easy-framework@^${version}' to dependencies.`
		);

		context.logger.log('info', '✅️ Installing added packages...');
		context.addTask(new NodePackageInstallTask());

		return tree;
	};
}
