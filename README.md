[![CircleCI branch](https://img.shields.io/circleci/project/github/richpauly13/easy/master.svg?label=circleci)](https://circleci.com/gh/richpauly13/easy) [![Known Vulnerabilities](https://snyk.io/package/npm/snyk/badge.svg)](https://snyk.io/package/npm/snyk) [![Dependency Status](https://david-dm.org/richpauly13/easy.svg)](https://david-dm.org/richpauly13/easy) [![devDependency Status](https://david-dm.org/richpauly13/easy/dev-status.svg)](https://david-dm.org/richpauly13/easy?type=dev)

[![npm](https://img.shields.io/npm/v/easy-framework.svg)](https://www.npmjs.com/package/easy-framework) [![downloads](https://badgen.net/npm/dt/easy-framework)](https://www.npmjs.com/package/easy-framework) [![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/richpauly13/easy/blob/master/LICENSE) [![codecov.io](https://codecov.io/github/richpauly13/easy/coverage.svg?branch=master)](https://codecov.io/github/richpauly13/easy?branch=master) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-brightgreen.svg)](https://conventionalcommits.org)

[![GitHub forks](https://img.shields.io/github/forks/richpauly13/easy.svg?style=social&label=Fork)](https://github.com/richpauly13/easy/fork) [![GitHub stars](https://img.shields.io/github/stars/richpauly13/easy.svg?style=social&label=Star)](https://github.com/richpauly13/easy)

# EASY

**E**asy **A**ngular **S**tyles with a11**Y**

_This project is a work in progress. Not all components are created or documented...yet._

## Overview

EASY is a CSS framework developed on 4 core principles:

-   Flexible
-   Accessible
-   Responsive
-   Lightweight

### Flexible

Limited CSS selector specificity allows developers to easily override classes. Other than resets, HTML tags remain mostly untouched. This allows for additive development by adding color, spacing, and other CSS classes as needed.

All components look and behave the same in all evergreen browsers (Chrome, Edge Chromium, Firefox, and Safari).

The framework works nicely with Angular. You can use simple CSS classes to render content in different ways.

### Accessible

Most accessibility requirements are added automatically. Of course, it falls on the developer to ensure all code follows WCAG 2.1 guidelines.

### Responsive

EASY was created with mobile first in mind. There are many layout options and they all look great on any device.

### Lightweight

Developers can use all components or only the components needed for a particular project. This is done through module imports.

## Installation

**NPM:** `npm i easy-framework`

## Usage

Import core styles (base and utilities) into your app root module.

app.module.ts

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EasyModule } from 'easy-framework';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
```

Add the import to your app root NgModule.

app.module.ts

```ts
@NgModule({
	imports: [
		AppRoutingModule,
		BrowserModule,
		EasyModule        
	]
})
```

Add the `<ez-root>` tag in your app root component's HTML.

app.component.html

```html
<ez-root>
	<app-header></app-header>
	<app-nav></app-nav>
	<main>
		<router-outlet></router-outlet>
	</main>
	<app-footer></app-footer>
</ez-root>
```

Then, import specific module(s) where needed.

some.module.ts

```ts
import { ButtonModule, FlexboxModule } from 'easy-framework';
```

Add the import(s) to your NgModule.

some.module.ts

```ts
@NgModule({
    imports: [
        ButtonModule,
        FlexboxModule
    ]
})
```

Or, import all component and/or layout module(s).

some.module.ts

```ts
import { ComponentsModule, LayoutModule } from 'easy-framework';
```

Add the import(s) to your NgModule.

some.module.ts

```ts
@NgModule({
    imports: [
        ComponentsModule,
        LayoutModule
    ]
})
```

## Documentation

Read the [Documentation](https://richpauly13.github.io/easy/).

## Changlog

View the [Changelog](https://github.com/richpauly13/easy/blob/master/projects/easy-framework/CHANGELOG.md).

## Contributing

1. Review the [Code of Conduct](https://github.com/richpauly13/easy/blob/master/CODE_OF_CONDUCT.md)
1. Review the [Contributing](https://github.com/richpauly13/easy/blob/master/CONTRIBUTING.md) guidelines
1. Fork the repo
1. Run `npm i`
1. Run `npm start`
1. Open the projects/easy-framework/src/lib folder in your code editor
1. Edit the code base
1. Update the documentatation as needed
1. Submit a pull request

## Issues

Report an [issue](https://github.com/richpauly13/easy/issues/new?template=bug_report.md) or a [feature request](https://github.com/richpauly13/easy/issues/new?template=feature_request.md).

## License

Copyright (c) 2021, Paul Chehak. ([MIT License](https://github.com/richpauly13/easy/blob/master/LICENSE.md)).
