require.config({
  shim: {     
    underscoreBase: {
      exports: '_'
    },
    underscore: {
      deps: ['underscoreBase'],
      exports: '_'
    }
  },
  paths: {
    jquery: "lib/zepto.min",
    backbone: "lib/backbone-min",
    underscoreBase: "lib/lodash.custom.min",
    underscore: "lib/underscoreSettings",
    text: "lib/text",
    hbs: "lib/hbs",
    i18nprecompile: "lib/i18nprecompile",
    handlebars: "lib/Handlebars"
  },
  hbs : {
    disableI18n: true
  }
});

define(function(require) {
  var AppRouter = require('router');
  new AppRouter();
});
