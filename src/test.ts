// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import "core-js";
import "zone.js";
import "zone.js/testing";
import { getTestBed } from "@angular/core/testing";
import {
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";

// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
declare var require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context("./", true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
