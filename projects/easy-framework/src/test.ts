/* eslint-disable  @typescript-eslint/no-explicit-any */
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import 'zone.js/dist/zone';
import 'zone.js/dist/zone-testing';

declare const require: any;

// first, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

// then we find all the tests.
const context: any = require.context('./', true, /\.spec\.ts$/u);

// and load the modules.
context.keys().map(context);
