module.exports = function (grunt) {

    const sass = require('node-sass');


    grunt.initConfig({


        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'css/store-ui.css': 'scss/build.scss'
                }
            }
        },


        watch: {
            options: {
                livereload: true,
                spawn: false
            },
            css: {
                files: ['scss/**'],
                tasks: ['sass']
            }
        },


    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'watch' ]);
};
