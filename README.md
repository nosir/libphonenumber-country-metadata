# libphonenumber country metadata

This repo provides countries metadata of Google's [libphonenumber](https://github.com/googlei18n/libphonenumber) library.

The Closure InputFile in this repo: `asyoutypeformatter.js` only provides features for [cleave.js](https://github.com/nosir/cleave.js), you will need to build your own InputFile if you are not using this for Cleave.js

## Usage

### Build all the metadata files:

```
gulp build-metadata:all
```

### Build phone-type-formatter.js for [cleave.js](https://github.com/nosir/cleave.js)

For specific country:

```
gulp build-country:{country}
```

For all the countries:

```
gulp build-country:all
```

For customized countries combination group:

```
gulp build-country:customized --countries=AU,CN...
```

### Note for building your own libphonenumber lib

1.  Replace the metadata file with: `metadata.{country}.js`
2.  Check [gulp-closure-compiler](https://github.com/steida/gulp-closure-compiler) for more build options (Java 1.7+, Node.js v4.4.5+ required)
3.  This repo is inspired by [i18n.phonenumbers](https://github.com/leodido/i18n.phonenumbers.js). If you are not using this for Cleave.js, probably that is what you need.
