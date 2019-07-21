import { Tree } from '@angular-devkit/schematics';

import * as fs from 'fs';
import * as path from 'path';

export function getLibraryVersion(): any {
	return JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8')).version;
}

export function addPackageToPackageJson(host: Tree, pkg: string, version: string): Tree {
	if (host.exists('package.json')) {
		const sourceText: string = host.read('package.json')!.toString('utf-8');
		const json: any = JSON.parse(sourceText);

		if (!json.dependencies) {
			json.dependencies = {};
		}

		if (!json.dependencies[pkg]) {
			json.dependencies[pkg] = version;
			json.dependencies = sortObjectByKeys(json.dependencies);
		}

		host.overwrite('package.json', JSON.stringify(json, undefined, 2));
	}

	return host;
}

function sortObjectByKeys(obj: any): any {
	return Object.keys(obj)
	.sort()
	.reduce((result: any, key: any) => {
		result[key] = obj[key];

		return result;
	}, {});
}
