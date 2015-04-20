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
                    src: ['node_modules/css'],
                    dest: 'lib/css',
                    flatten: true
                }]
            }
        },
        clean: ['lib/css'],
        watch: {
            files: ['*', 'lib/**/*'],
            tasks: ['build']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
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
