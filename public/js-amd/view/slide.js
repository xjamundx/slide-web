define(function(require) {
	var Backbone = require('backbone')
	var template = require('hbs!../../tmpl/slide')
	return Backbone.View.extend({
	  template: template,
	  render: function() {
	    this.el = this.template(this.model.toJSON());
	    return this;
	  }
	})
})