/* eslint-disable @typescript-eslint/require-array-sort-compare */
import { apply, applyTemplates, chain, filter, mergeWith, move, renameTemplateFiles, Rule, SchematicContext, Source, Tree, url } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { Path, strings } from '@angular-devkit/core';
import { ProjectDefinition, WorkspaceDefinition } from '@angular-devkit/core/src/workspace';

import { getWorkspace } from '@schematics/angular/utility/workspace';

import { addModuleImportToRootModule, getProjectFromWorkspace } from '../utilities';
import { Schema } from './schema';

function addEasyToPackageJson(): Rule {
	return (tree: Tree, context: SchematicContext) => {
		context.addTask(new NodePackageInstallTask());

		return tree;
	};
}

function addSharedModuleToAppModule(options: Schema): Rule {
	return async(tree: Tree) => {
		const workspace: WorkspaceDefinition = await getWorkspace(tree);
		const project: ProjectDefinition = getProjectFromWorkspace(workspace, options.project);

		addModuleImportToRootModule(tree, 'SharedModule', './shared/shared.module', project);
	};
}

function findOrCreateSharedModule(options: Schema): Rule {
	return (tree: Tree) => {
		if (tree.exists('shared.module.ts')) {
			return tree;
		} else {
			const imports: string = [
				...options.components,
				...options.layouts
			]
			.sort()
			.join(', ');
			const templateSource: Source = apply(url('./files'), [
				filter((path: Path) => {
					return path.endsWith('shared.module.ts.template');
				}),
				applyTemplates({
					imports: imports,
					...strings,
					...options
				}),
				renameTemplateFiles(),
				move('src/app/shared/')
			]);

			return mergeWith(templateSource);
		}
	};
}

export function ngAdd(options: Schema): Rule {
	return chain([
		addEasyToPackageJson(),
		findOrCreateSharedModule(options),
		addSharedModuleToAppModule(options)
	]);
}
