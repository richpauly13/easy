import { apply, applyTemplates, branchAndMerge, chain, filter, MergeStrategy, mergeWith, move, noop, Rule, SchematicContext, Source, Tree, url } from '@angular-devkit/schematics';
import { Path, strings } from '@angular-devkit/core';

import { applyLintFix } from '@schematics/angular/utility/lint-fix';
import { buildDefaultPath, getProject } from '@schematics/angular/utility/project';
import { findModuleFromOptions as internalFindModule } from '@schematics/angular/utility/find-module';
import { getWorkspace } from '@schematics/angular/utility/config';
import { parseName } from '@schematics/angular/utility/parse-name';
import { WorkspaceProject, WorkspaceSchema } from '@schematics/angular/utility/workspace-models';

import { addModuleImportToModule } from '../../utilities';
import { Schema as AlertComponentSchema } from './schema';

export default function(options: AlertComponentSchema): Rule {
	return (tree: Tree, context: SchematicContext): any => {
		const workspace: WorkspaceSchema = getWorkspace(tree);
		const projectName: string = options.project || Object.keys(workspace.projects)[0];
		const project: WorkspaceProject = getProject(tree, projectName);

		if (options.path === undefined) {
			options.path = buildDefaultPath(project);
		}

		const parsedPath: any = parseName(options.path, options.name);

		options.name = parsedPath.name;
		options.path = parsedPath.path;

		const templateSource: Source = apply(url('./files'), [
			options.spec ? noop() : filter((path: Path) => !path.endsWith('.spec.ts')),
			applyTemplates({
				...strings,
				'if-flat': (strg: string): string => (options.flat ? '' : strg),
				...options
			}),
			move(parsedPath.path)
		]);

		return chain([
			branchAndMerge(
				chain([
					addEasyModuleToModule(options),
					mergeWith(templateSource, MergeStrategy.Default)
				])
			),
			options.lintFix ? applyLintFix(options.path) : noop()
		])(tree, context);
	};
}

function addEasyModuleToModule(options: AlertComponentSchema): any {
	return ((tree: Tree): Tree => {
		const modulePath: string = findModuleFromOptions(tree, options)!;

		addModuleImportToModule(tree, modulePath, 'ButtonModule', 'easy-framework');

		return tree;
	});
}

export function findModuleFromOptions(tree: Tree, options: AlertComponentSchema): string | undefined {
	const workspace: WorkspaceSchema = getWorkspace(tree);

	if (!options.project) {
		options.project = Object.keys(workspace.projects)[0];
	}

	const project: WorkspaceProject = workspace.projects[options.project];

	if (options.path === undefined) {
		options.path = `/${project.root}/src/app`;
	}

	return internalFindModule(tree, options);
}
