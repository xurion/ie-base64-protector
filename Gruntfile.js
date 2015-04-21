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
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'node_modules/css',
                    src: ['**'],
                    dest: 'lib/css/',
                    flatten: false
                }]
            }
        },
        clean: ['lib/css']
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    grunt.registerTask('build', [
        'jshint',
        'jslint',
        'nodeunit',
        'clean',
        'copy'
    ]);

};
