# @metalsmith/drafts

A metalsmith plugin to hide drafts. Metalsmith will not build a page that is marked as draft.

[![metalsmith: core plugin][metalsmith-badge]][metalsmith-url]
[![npm: version][npm-badge]][npm-url]
[![ci: build][ci-badge]][ci-url]
[![code coverage][codecov-badge]][codecov-url]
[![license: MIT][license-badge]][license-url]

## Installation

NPM:

```bash
npm install @metalsmith/drafts
```

Yarn:

```bash
yarn add @metalsmith/drafts
```

## Usage

Pass the plugin with any options to `Metalsmith.use`.

```js
const drafts = require('@metalsmith/drafts')

metalsmith.use(drafts())
metalsmith.use(drafts({ default: false })) // same as default
```

Add `draft: true` to your files' YAML front-matter to mark them as drafts:

```yaml
---
title: My post
draft: true
---
```

To build pages that are marked as draft during development, use the metalsmith-if plugin to check the node environment and include the draft page in the build accordingly.

```js
const when = require('metalsmith-if');
...
const isProduction = process.env.NODE_ENV === 'production';
...
.use(when(isProduction, drafts()))

```

### Default value for `draft`

You can instruct `@metalsmith/drafts` to mark files as `draft` by default if they don't have a `draft` property in their front-matter:

```js
const drafts = require('@metalsmith/drafts')

metalsmith.use(
  drafts({
    default: true
  })
)
```

### CLI Usage

To use this plugin with the Metalsmith CLI, add `@metalsmith/drafts` to the `plugins` key in your `metalsmith.json` file:

```json
{
  "plugins": [
    {
      "@metalsmith/drafts": {
        "default": false
      }
    }
  ]
}
```

## License

[MIT](LICENSE)

[npm-badge]: https://img.shields.io/npm/v/@metalsmith/drafts.svg
[npm-url]: https://www.npmjs.com/package/@metalsmith/drafts
[ci-badge]: https://github.com/metalsmith/drafts/actions/workflows/test.yml/badge.svg
[ci-url]: https://github.com/metalsmith/drafts/actions/workflows/test.yml
[metalsmith-badge]: https://img.shields.io/badge/metalsmith-core_plugin-green.svg?longCache=true
[metalsmith-url]: http://metalsmith.io
[codecov-badge]: https://img.shields.io/coveralls/github/metalsmith/drafts
[codecov-url]: https://coveralls.io/github/metalsmith/drafts
[license-badge]: https://img.shields.io/github/license/metalsmith/drafts
[license-url]: LICENSE
