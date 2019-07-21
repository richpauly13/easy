import { apply, applyTemplates, chain, mergeWith, move, Rule, SchematicsException, Source, Tree, url } from '@angular-devkit/schematics';
import { experimental, normalize, strings } from '@angular-devkit/core';
import { WorkspaceProject } from '@angular-devkit/core/src/experimental/workspace';

import { Schema as ngGenerateAlert } from './schema';

export default function(options: ngGenerateAlert): Rule {
	return (tree: Tree): Rule => {
		const workspaceConfig: Buffer | null = tree.read('/angular.json');

		if (!workspaceConfig) {
			throw new SchematicsException('Could not find Angular workspace configuration');
		}

		// Convert workspace to string
		const workspaceContent: string = workspaceConfig.toString();

		// Parse workspace string into JSON object
		const workspace: experimental.workspace.WorkspaceSchema = JSON.parse(workspaceContent);

		if (!options.project) {
			options.project = workspace.defaultProject;
		}

		const projectName: any = options.project;

		const project: WorkspaceProject = workspace.projects[projectName];

		const projectType: string = project.projectType === 'application' ? 'app' : 'lib';

		if (options.path === undefined) {
			options.path = `${project.sourceRoot}/${projectType}`;
		}

		const templateSource: Source = apply(url('./files'), [
			applyTemplates({
				classify: strings.classify,
				close: options.close,
				dasherize: strings.dasherize,
				message: options.message,
				name: options.name
			}),
			move(normalize(options.path))
		]);

		return chain([
			mergeWith(templateSource)
		]);
	};
}
