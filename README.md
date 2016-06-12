# libphonenumber country metadata
This repo provides countries metadata of Google's [libphonenumber](https://github.com/googlei18n/libphonenumber) library.

## Usage

### Build all the metadata files:
```
$ gulp build-metadata:all
```

### Build phone-type-formatter.js for [cleave.js](https://github.com/nosir/cleave.js)
For specific country:

```
$ gulp build-country:{country}
```


For all the countries:

```
$ gulp build-metadata:all
```

For customized countries combination group:

```
// todo
```

### Note for building your own libphonenumber lib
1. Replace the metadata file with: `metadata.{country}.js`
2. Check [gulp-closure-compiler](https://github.com/steida/gulp-closure-compiler) for more build options (Java 1.7+, Node.js v4.4.5+ required)
3. Closure Input file in this repo: `asyoutypeformatter.js` only provides basic feature for usage in[cleave.js](https://github.com/nosir/cleave.js)
4. This repo is inspired by [i18n.phonenumbers](https://github.com/leodido/i18n.phonenumbers.js). If you don't bother to build by yourself, this lib is probably what you need.
