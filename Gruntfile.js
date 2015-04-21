/*global module*/

module.exports = function (grunt) {

    'use strict';

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'ie-base64-protector.js', 'test/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        jslint: {
            client: {
                src: ['Gruntfile.js', 'ie-base64-protector.js', 'test/*.js'],
                directives: {
                    browser: true
                }
            }
        },
        nodeunit: {
            all: ['test/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    grunt.registerTask('test', [
        'jshint',
        'jslint',
        'nodeunit'
    ]);

};
