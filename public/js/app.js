require.config({
  paths: {
    jquery: "lib/zepto.min",
    underscore: "lib/lodash.custom.min",
    backbone: "lib/backbone-min",
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
