/* eslint-disable @typescript-eslint/require-array-sort-compare */
import { apply, applyTemplates, chain, filter, mergeWith, move, renameTemplateFiles, Rule, SchematicContext, Source, Tree, url } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { Path, strings } from '@angular-devkit/core';
import { ProjectDefinition, WorkspaceDefinition } from '@angular-devkit/core/src/workspace';

import { getWorkspace } from '@schematics/angular/utility/workspace';

import { addModuleImportToRootModule, getProjectFromWorkspace } from '../utilities';
import { Component, Layout, Schema } from './schema';

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

function createSharedModule(options: Schema): Rule {
	return (tree: Tree) => {
		const components: Component[] | string[] = options.components.includes(Component.All) ? [
			'ComponentModule'
		] : options.components;
		const layouts: Layout[] | string[] = options.layouts.includes(Layout.All) ? [
			'LayoutModule'
		] : options.layouts;
		const modules: string[] = [
			'EasyModule',
			...components,
			...layouts
		]
		.sort();
		const exports: string = modules.join(',\n        ');
		const imports: string = modules.join(', ');

		if (tree.exists('src/app/shared/shared.module.ts')) {
			return tree;
		} else {
			const templateSource: Source = apply(url('./files'), [
				filter((path: Path) => {
					return path.endsWith('shared.module.ts.template');
				}),
				applyTemplates({
					exports: exports,
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
		createSharedModule(options),
		addSharedModuleToAppModule(options)
	]);
}
