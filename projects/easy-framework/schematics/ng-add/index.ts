import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export default function(_options: any): Rule {
	return (tree: Tree, _context: SchematicContext): Tree => {
		_context.addTask(new NodePackageInstallTask());

		return tree;
	};
}
