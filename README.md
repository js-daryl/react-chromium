# Electron-to-Chromium
This repository provides a mapping of Electron versions to the Chromium version that it uses.

This package is used in [Browserslist](https://github.com/ai/browserslist), so you can use e.g. `electron >= 1.4` in [Autoprefixer](https://github.com/postcss/autoprefixer), [Stylelint](https://github.com/stylelint/stylelint), [babel-present-env](https://github.com/babel/babel-preset-env) and [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat).

## Install
Install using `npm install electron-to-chromium`.

## Usage
to include electron-to-chromium, require it:

```js
var e2c = require('electron-to-chromium');
```

### Properties
The Electron-to-Chromium object has 4 properties to use:

#### versions
An object of key-value pairs with a _major_ Electron version as the key, and the respective major Chromium version as the value.

```js
var versions = e2c.versions;
console.log(versions['1.4']);
// returns "53"
```

#### fullVersions
An object of key-value pairs with a Electron version as the key, and the respective full Chromium version as the value.

```js
var versions = e2c.fullVersions;
console.log(versions['1.4.11']);
// returns "53.0.2785.143"
```

#### chromiumVersions
An object of key-value pairs with a _major_ Chromium version as the key, and the respective major Electron version as the value.

```js
var versions = e2c.chromiumVersions;
console.log(versions['54']);
// returns "1.4"
```

#### fullChromiumVersions
An object of key-value pairs with a Chromium version as the key, and an array of the respective major Electron versions as the value.

```js
var versions = e2c.fullChromiumVersions;
console.log(versions['54.0.2840.101']);
// returns ["1.5.1", "1.5.0"]
```

#### electronToChromium(query)
Arguments:
* Query: string or number, required. A major or full electron version.

A function that returns the corresponding Chromium version for a given Electron function. Returns a string.

If you provide it with a major Electron version, it will return a major Chromium version:

```js
var chromeVersion = e2c.electronToChromium('1.4');
// chromeVersion is "53"
```

If you provide it with a full Electron version, it will return the full Chromium version.

```js
var chromeVersion = e2c.electronToChromium('1.4.11');
// chromeVersion is "53.0.2785.143"
```

If a query does not match a Chromium version, it will return `undefined`.

```js
var chromeVersion = e2c.electronToChromium('9000');
// chromeVersion is undefined
```

#### chromiumToElectron(query)
Arguments:
* Query: string or number, required. A major or full chromium version.

Returns a string with the corresponding Electron version for a given Chromium query.

If you provide it with a major Chromium version, it will return a major Electron version:

```js
var electronVersion = e2c.chromiumToElectron('54');
// electronVersion is "1.4"
```

If you provide it with a full Chrome version, it will return an array of full Electron versions.

```js
var electronVersions = e2c.chromiumToElectron('56.0.2924.87');
// electronVersions is ["1.6.3", "1.6.2", "1.6.1", "1.6.0"]
```


If a query does not match an Electron version, it will return `undefined`.

```js
var electronVersion = e2c.chromiumToElectron('10');
// chromeVersion is undefined
```

#### electronToBrowserList(query) **DEPRECATED**
Arguments:
* Query: string or number, required. A major Electron version.

_**Deprecated**: Browserlist already includes electron-to-chromium._

A function that returns a [Browserlist](https://github.com/ai/browserslist) query that matches the given major Electron version. Returns a string.

If you provide it with a major Electron version, it will return a Browserlist query string that matches the chromium capabilities:

```js
var query = e2c.electronToBrowserList('1.4');
// query is "Chrome >= 53"
```

If a query does not match a Chromium version, it will return `undefined`.

```js
var query = e2c.electronToBrowserList('9000');
// query is undefined
```

### importing just versions, fullVersions, chromiumVersions and fullChromiumVersions
all list can be imported on their own, if file-size is a concern.

### versions

```js
var versions = require('electron-to-chromium/versions');
```

### fullVersions

```js
var fullVersions = require('electron-to-chromium/full-versions');
```
### chromiumVersions

```js
var chromiumVersions = require('electron-to-chromium/chromium-versions');
```

### fullChromiumVersions

```js
var fullChromiumVersions = require('electron-to-chromium/full-chromium-versions');
```

## Updating
This package will be updated with each new Electron release.

To update the list, run `npm run build.js`. Requires internet access as it downloads from the canonical list of Electron versions.

to verify correct behaviour, run `npm test`;
