require.config({
  paths: {
    jquery: "lib/zepto.min",
    underscore: "lib/lodash.custom.min",
    backbone: "lib/backbone-min"
  }
});

require(["jquery", "underscore", "backbone"], function($, _, backbone) {
  console.log($("body"), _.extend({},{go: "team"}), backbone);
});
