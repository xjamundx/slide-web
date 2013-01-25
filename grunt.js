module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    test: {
      files: ['test/**/*.js']
    },
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
    },
//    watch: {
//      files: '<config:lint.files>',
//      tasks: 'default'
//    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true
      },
      globals: {
        exports: true
      }
    },
    requirejs: {
      production: {
        options: {
          paths: {
            jquery: "lib/zepto.min",
            underscore: "lib/lodash.custom.min",
            backbone: "lib/backbone-min",
            hbs: "lib/hbs",
            i18nprecompile: "lib/i18nprecompile",
            handlebars: "lib/Handlebars"
          },
//          optimize: "none",
          insertRequire: ['app'],
          name: "lib/almond",
          baseUrl: "public/js-amd",
          include: "app",
          mainConfigFile: "public/js-amd/app.build.js",
          out: "public/js-amd/app.built.js"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.registerTask('default', 'requirejs');
// Default task.
// grunt.registerTask('default', 'lint test');

};