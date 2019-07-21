import { Tree } from '@angular-devkit/schematics';

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

// Sorts dependency key
function sortPackageDependencies(dependencies: any): any {
	return Object.keys(dependencies)
	.sort()
	.reduce((result: any, key: any) => {
		result[key] = dependencies[key];

		return result;
	}, {});
}
