# Core Localization

[![npm version](https://badge.fury.io/js/@universal-packages%2Fcore-localization.svg)](https://www.npmjs.com/package/@universal-packages/core-localization)
[![Testing](https://github.com/universal-packages/universal-core-localization/actions/workflows/testing.yml/badge.svg)](https://github.com/universal-packages/universal-core-localization/actions/workflows/testing.yml)
[![codecov](https://codecov.io/gh/universal-packages/universal-core-localization/branch/main/graph/badge.svg?token=CXPJSN8IGL)](https://codecov.io/gh/universal-packages/universal-core-localization)

[Localization](https://github.com/universal-packages/universal-localization) universal-core module abstraction.

## Install

```shell
npm install @universal-packages/core-localization
```

## Initialization

```shell
ucore exec localization-task init
```

## Global

Core expose `Localization` as the global subject if core `modulesAsGlobals` config is true.

```js
localizationSubject.translate()
```

```js
core.coreModules.localizationModule.subject.translate()
```

## Typescript

In order for typescript to see the global types you need to reference the types somewhere in your project, normally `./src/globals.d.ts`.

```ts
/// <reference types="@universal-packages/core-localization" />
```

This library is developed in TypeScript and shipped fully typed.

## Contributing

The development of this library happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving this library.

- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [Contributing Guide](./CONTRIBUTING.md)

### License

[MIT licensed](./LICENSE).
