var gulp = require('gulp');
var concat = require('gulp-concat');
var template = require('gulp-template');
var rename = require('gulp-rename');
var gulpsync = require('gulp-sync')(gulp);
var closureCompiler = require('gulp-closure-compiler');
var _ = require('underscore');
var path = require('path');

var paths = {
    phonenumber:     './libphonenumber/javascript/i18n/phonenumbers',
    closure:         './node_modules/google-closure-library/closure',
    src:             './src',
    dist:            './dist',
    inputfile:       'inputfile',
    namespace:       'Cleave.AsYouTypeFormatter',
    metadataCountry: 'metadata.country'
};

gulp.task('build:metadata-source', function () {
    return gulp.src([
            path.join(paths.src, 'namespace-fix.js'),
            path.join(paths.phonenumber, 'metadata.js'),
            path.join(paths.src, 'expose.js')
        ])
        .pipe(concat('metadata-source.js'))
        .pipe(gulp.dest(paths.dist));
});

var metadata = require('./dist/metadata-source.js');
var countries = _.allKeys(metadata.countryToMetadata);
var metadataSequence = [];
var countrySequence = [];

// for generating all-in-one metadata and lib file
countries.push('full');

// every single country
_.each(countries, function (country) {
    // register all tasks to generate metadata.country.js files
    gulp.task('build-metadata:' + country, function () {
        return gulp.src([path.join(paths.src, 'metadata.tpl')])
            .pipe(template(country === 'full' ? metadata : {
                countryCodeToRegionCodeMap: _.pick(metadata.countryCodeToRegionCodeMap, function (value) {
                    return _.contains(value, country);
                }),

                countryToMetadata: _.pick(metadata.countryToMetadata, country)
            }))
            .pipe(rename('metadata.' + country + '.js'))
            .pipe(gulp.dest(path.join(paths.dist, paths.metadataCountry)));
    });

    // register all tasks to generate phone-type-formatter.country.js lib files
    gulp.task('build-PhoneTypeFormatter:' + country, function () {
        return gulp.src([
                path.join(paths.src, paths.inputfile, paths.namespace + '.js'),
                path.join(paths.closure, 'goog/**/*.js'),
                path.join(paths.phonenumber, 'phonemetadata.pb.js'),
                path.join(paths.phonenumber, 'phonenumber.pb.js'),
                path.join(paths.phonenumber, 'phonenumberutil.js'),
                path.join(paths.dist, paths.metadataCountry, 'metadata.' + country + '.js'),
                path.join(paths.phonenumber, 'asyoutypeformatter.js')
            ])
            .pipe(closureCompiler({
                compilerPath:  './compiler.jar',
                fileName:      'phone-type-formatter.' + country.toLowerCase() + '.js',
                compilerFlags: {
                    closure_entry_point:       paths.namespace,
                    compilation_level:         'ADVANCED_OPTIMIZATIONS',
                    only_closure_dependencies: true,
                    output_wrapper:            '(function(){%output%}.call(window));',
                    warning_level:             'VERBOSE'
                }
            }))
            .pipe(gulp.dest(path.join(paths.dist, paths.namespace)));
    });

    // sync tasks: individual country build
    gulp.task('build-country:' + country, gulpsync.sync(['build-metadata:' + country, 'build-PhoneTypeFormatter:' + country]));

    // create stack for build all sequence
    metadataSequence.push('build-metadata:' + country);
    countrySequence.push('build-country:' + country);
});

// async tasks: build metadata
gulp.task('build-metadata:all', gulpsync.sync(['build:metadata-source', metadataSequence]));

// sync tasks: build country data
// use sync tasks here to avoid blowing up your computer
gulp.task('build-country:all', gulpsync.sync(countrySequence));

