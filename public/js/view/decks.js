define(function(require) {
	var $ = require('jquery')
	var Backbone = require('backbone')
	var DeckView = require('view/deck')
	return Backbone.View.extend({
	  el: '.content',
	  initialize: function() {
	    this.collection.fetch();
	    this.collection.on('reset', this.render, this);
	  },
	  render: function() {
	    var self = this;
	    this.$el.empty();
	    this.collection.forEach(function(deck) {
	      var view = new DeckView({model: deck});
	      self.$el.append(view.render().el);
	    });
	    return this;
	  }
	});
})