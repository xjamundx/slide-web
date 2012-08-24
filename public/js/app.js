require.config({
  paths: {
    jquery: "lib/zepto.min",
    underscore: "lib/lodash.custom.min",
    backbone: "lib/backbone-min"
  }
});

require(["jquery", "underscore", "backbone", "router"], function($, _, Backbone, Router) {
  console.log(Router);
  var router = new Router();
});
