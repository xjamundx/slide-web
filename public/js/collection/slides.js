define(function(require) {
  var Backbone = require('backbone');
  var Slide = require('model/slide');
  return Backbone.Collection.extend({
    model: Slide
  });
});
