import { SchematicsException, Tree, UpdateRecorder } from '@angular-devkit/schematics';

import { addImportToModule } from '@schematics/angular/utility/ast-utils';
import { Change, InsertChange } from '@schematics/angular/utility/change';

import * as typescript from 'typescript';

// Adds package to the package.json file
export function addPackageToPackageJson(tree: Tree, pkg: string, version: string): Tree {

	if (tree.exists('package.json')) {
		const initialText: string = tree.read('package.json')!.toString('utf-8');
		const json: any = JSON.parse(initialText);

		if (!json.dependencies) {
			json.dependencies = {};
		}

		if (!json.dependencies[pkg]) {
			json.dependencies[pkg] = version;
			json.dependencies = sortPackageDependencies(json.dependencies);
		}

		tree.overwrite('package.json', JSON.stringify(json, undefined, 2));
	}

	return tree;
}

// Gets the version of the library
export function getLibraryVersion(tree: Tree): string {
	return JSON.parse(tree.read('package.json')!.toString('utf8')).version;
}

// Gets the version of a package
export function getPackageVersion(tree: Tree, name: string): string | undefined {
	if (!tree.exists('package.json')) {
		return undefined;
	}

	const packageJson: any = JSON.parse(tree.read('package.json')!.toString('utf8')).version;

	if (packageJson.dependencies && packageJson.dependencies[name]) {
		return packageJson.dependencies[name];
	}

	return undefined;
}

// Adds the library module to the application
export function addModuleImportToModule(tree: Tree, modulePath: string, moduleName: string, src: string): void {
	const moduleSource: typescript.SourceFile = getSourceModule(tree, modulePath);

	if (!moduleSource) {
		throw new SchematicsException(`Module not found: ${modulePath}`);
	}

	const changes: Change[] = addImportToModule(moduleSource as any, modulePath, moduleName, src);
	const recorder: UpdateRecorder = tree.beginUpdate(modulePath);

	changes.forEach((change: Change) => {
		if (change instanceof InsertChange) {
			recorder.insertLeft(change.pos, change.toAdd);
		}
	});

	tree.commitUpdate(recorder);
}

// Gets the source module for the import
export function getSourceModule(tree: Tree, path: string): typescript.SourceFile {
	const buffer: Buffer | null = tree.read(path);

	if (!buffer) {
		throw new SchematicsException(`Could not find file for path: ${path}`);
	}

	return typescript.createSourceFile(path, buffer.toString(), typescript.ScriptTarget.Latest, true);
}

// Sorts dependency key
function sortPackageDependencies(dependencies: any): any {
	return Object.keys(dependencies)
	.sort()
	.reduce((result: any, key: any) => {
		result[key] = dependencies[key];

		return result;
	}, {});
}
