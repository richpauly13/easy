// this file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js';
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule,
	platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

declare const require: {
	context: (path: string, deep?: boolean, filter?: RegExp) => {
		keys: () => string[],
		<T>(id: string): T
	}
};

// first, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

// then we find all the tests.
const context: {
	keys: () => string[],
	<T>(id: string): T
} = require.context('./', true, /\.spec\.ts$/u);

// and load the modules.
context.keys().map(context);
