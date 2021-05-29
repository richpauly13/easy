import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function ngAdd(): Rule {
	return (tree: Tree, context: SchematicContext) => {
		context.addTask(new NodePackageInstallTask());

		return tree;
	};
}
