# Metalsmith Drafts

[![npm version][npm-badge]][npm-url]
[![code style: prettier][prettier-badge]][prettier-url]
[![metalsmith: plugin][metalsmith-badge]][metalsmith-url]

[![Build Status][travis-badge]][travis-url]

A metalsmith plugin to hide drafts.

## Installation

    $ npm install metalsmith-drafts

## CLI Usage

  Install via npm and then add the `metalsmith-drafts` key to your `metalsmith.json` plugins, like so:

```json
{
  "plugins": {
    "metalsmith-drafts": true
  }
}
```

Then in your files YAML front-matter add `draft: true`.
In case you want to force all files to be set to `draft: true`, use the following plugin-option:

```json
{
  "plugins": {
    "metalsmith-drafts": {
		"default": true
	}
  }
}
```

## Javascript Usage

  Pass the plugin to `Metalsmith#use`, like so:

```js
var drafts = require('metalsmith-drafts');

metalsmith.use(drafts());
```

Then in your files YAML front-matter add `draft: true`.

### Default value for `draft`
If you want to define a default value for `draft` (in case they are not definied in the YAML front-matter, then use the plugin option `default`:

```js
var drafts = require('metalsmith-drafts');

metalsmith.use(drafts( {
	default: true
}));
```

> Note: if you're templates don't have `draft: true` your site might disapear when on your first compile! 

## License

  MIT

[npm-badge]: https://img.shields.io/npm/v/metalsmith-drafts.svg
[npm-url]: https://www.npmjs.com/package/metalsmith-drafts
[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-url]: https://github.com/prettier/prettier
[metalsmith-badge]: https://img.shields.io/badge/metalsmith-plugin-green.svg?longCache=true
[metalsmith-url]: http://metalsmith.io

[travis-badge]: https://travis-ci.org/segmentio/metalsmith-drafts.svg?branch=master
[travis-url]: https://travis-ci.org/segmentio/metalsmith-drafts
