// This file is required by karma.conf.js and loads recursively all the .spec and framework files

// Zone testing removed to run tests in a no-zone configuration. If you still need zone-based
// testing, re-enable the import and add `zone.js` to devDependencies.
// import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
  { teardown: { destroyAfterEach: true }},
);
