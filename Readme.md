
# metalsmith-drafts

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

## License

  MIT
