/*jslint nomen: true*/
/*global module, require*/

var fs = require('fs');

module.exports = function (grunt) {

    'use strict';

    var protector = require('./lib/protector'),
        newStyles,
        css;

    grunt.registerMultiTask('ieBase64Protector', 'Duplicates blocks of styles that contain a background image, adds a custom prefix to the selector and adds a comment after the background style to prevent imageEmbed from encoding the image', function () {

        var options = grunt.config.get('ieBase64Protector'),
            cssFiles = options.files,
            selectorPrefix;

        for (selectorPrefix in cssFiles) {

            if (cssFiles.hasOwnProperty(selectorPrefix)) {

                css = fs.readFileSync(cssFiles[selectorPrefix]).toString();
                newStyles = protector.protect(css, selectorPrefix);
                fs.appendFileSync(cssFiles[selectorPrefix], newStyles);
            }
        }
    });
};
