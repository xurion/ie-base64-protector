/*jslint nomen: true*/
/*global module, require*/

module.exports = function (grunt) {

    'use strict';

    var protector = require('./lib/protector');

    grunt.registerMultiTask('ieBase64Protector', 'Duplicates blocks of styles that contain a background image, adds a custom prefix to the selector and adds a comment after the background style to prevent imageEmbed from encoding the image', function () {

        var options = grunt.config.get('ieBase64Protector'),
            cssFiles = options.files,
            selectorPrefix;

        for (selectorPrefix in cssFiles) {

            if (cssFiles.hasOwnProperty(selectorPrefix)) {

                protector.protect(cssFiles[selectorPrefix], selectorPrefix);

            }
        }
    });
};
