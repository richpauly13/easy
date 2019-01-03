[![CircleCI branch](https://img.shields.io/circleci/project/github/richpauly13/easy/master.svg?label=circleci)](https://circleci.com/gh/richpauly13/easy) [![Dependabot badge](https://api.dependabot.com/badges/status?host=github&repo=richpauly13/easy)](https://dependabot.com) [![Dependency Status](https://david-dm.org/richpauly13/easy.svg)](https://david-dm.org/richpauly13/easy) [![devDependency Status](https://david-dm.org/richpauly13/easy/dev-status.svg)](https://david-dm.org/richpauly13/easy?type=dev)

[![npm version](https://badge.fury.io/js/easy-framework.svg)](https://www.npmjs.com/easy-framework) [![downloads](https://badgen.net/npm/dt/easy-framework)](https://www.npmjs.com/package/easy-framework) [![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/richpauly13/easy/blob/master/LICENSE) [![codecov.io](https://codecov.io/github/richpauly13/easy/coverage.svg?branch=master)](https://codecov.io/github/richpauly13/easy?branch=master) [![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[![GitHub forks](https://img.shields.io/github/forks/richpauly13/easy.svg?style=social&label=Fork)](https://github.com/richpauly/easy/fork) [![GitHub stars](https://img.shields.io/github/stars/richpauly13/easy.svg?style=social&label=Star)](https://github.com/richpauly/easy)

# EASY

Easy Angular Styles with a11Y

## Overview

EASY is a CSS framework developed on 4 core principles:

-   Flexible
-   Accessible
-   Responsive
-   Lightweight

### Flexible

Limited CSS selector specificity allows developers to easily override classes. Other than resets, HTML tags remain mostly untouched. This allows for additive development by adding color, spacing, and other CSS classes as needed.

The framework works nicely with Angular. You can use components, directives, CSS classes, or any combination that fits your coding style.

### Accessible

Most accessibility requirements are added automatically. Of course, it falls on the developer to ensure all code follows WCAG guidelines.

### Responsive

EASY was created with mobile first in mind. There are many layout options and they all look great on any device.

### Lightweight

Developers can use only the components needed for a particular project. This is done through module imports. If you choose to use the entire framework, it is still less than 100k.

## Installation

NPM:

```
npm i --save easy-framework
```

## Usage

Import core styles into your app root module.

app.module.ts

```
import { EasyModule } from 'easy-framework';
```

Add the `<ez-root>` tag in your app root

app.component.html

```
<ez-root>
    <router-outlet></router-outlet>
</ez-root>
```

Then, import component modules where needed.

some.module.ts

```
import { ButtonModule } from 'easy-framework';
```

## Documentation

Read the [documentation](https://richpauly13.github.io/easy/dist/easy-docs).

## Contributing

Review the [code of conduct](https://github.com/richpauly13/easy/blob/master/CODE_OF_CONDUCT.md).

## Issues

Report an [issue](https://github.com/richpauly13/easy/issues).

## License

See the [license](https://github.com/richpauly13/easy/blob/master/LICENSE).
