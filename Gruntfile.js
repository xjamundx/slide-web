module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    test: {
      files: ['test/**/*.js']
    },
    jshint: {
      files: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js', 'public/js/**/*.js', '!public/js/lib/**/*.js', '!public/js/app.buil*.js'],
      options: {
        curly: false,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        white: false,
        asi: true,
        smarttabs: true,
        jquery: true,
        nonstandard: true,
        globals: {
          angular: true
        }
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
          insertRequire: ['app'],
          name: "lib/almond",
          baseUrl: "public/js",
          include: "app",
          mainConfigFile: "public/js/app.build.js",
          out: "public/js/app.built.js"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.registerTask('default', ['jshint', 'requirejs']);

};
