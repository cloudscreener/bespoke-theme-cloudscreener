[![Build Status](https://secure.travis-ci.org/cloudscreener/bespoke-theme-cloudscreener.png?branch=master)](https://travis-ci.org/cloudscreener/bespoke-theme-cloudscreener)

# bespoke-theme-cloudscreener

CloudScreener theme for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js) &mdash; [View demo](http://cloudscreener.github.io/bespoke-theme-cloudscreener)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/cloudscreener/bespoke-theme-cloudscreener/master/dist/bespoke-theme-cloudscreener.min.js
[max]: https://raw.github.com/cloudscreener/bespoke-theme-cloudscreener/master/dist/bespoke-theme-cloudscreener.js

## Usage

This theme is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  cloudscreener = require('bespoke-theme-cloudscreener');

bespoke.from('#presentation', [
  cloudscreener()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.themes.cloudscreener()
]);
```

## Package managers

### npm

```bash
$ npm install bespoke-theme-cloudscreener
```

### Bower

```bash
$ bower install bespoke-theme-cloudscreener
```

## Credits

This theme was built with [generator-bespoketheme](https://github.com/markdalgleish/generator-bespoketheme).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
