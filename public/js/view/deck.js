//define(function(require) {
//  var Backbone = require('backbone');
//  var _ = require('underscore');
//  var template = require('text!../../tmpl/deck.html');
//  return Backbone.View.extend({
//    template: _.template(template),
//    render: function() {
//      this.el = this.template(this.model.toJSON());
//      return this;
//    }
//  });
//});

define(function(require) {
  var Backbone = require('backbone'),
      template = require('../../tmpl/templates');
  return Backbone.View.extend({
    render: function() {
      this.template = window['JST']['public/tmpl/deck.html'](this.model.toJSON()),
      this.el = this.template;
      return this;
    }
  });
});