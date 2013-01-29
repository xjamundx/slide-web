define(function(require) {
	var DeckView = require('view/deck'),
		addLink = function(container) {
			$('<a />')
				.addClass('btn blue')
				.attr({ 'id': 'js-add-deck', 'href': '#decks/add', 'title': 'Add a new deck.' })
				.text('Create Deck')
				.appendTo($(container));
		};
	return Backbone.View.extend({
	  el: '.content',
	  initialize: function() {
	    this.collection.fetch();
	    this.collection.on('reset', this.render, this);
	  },
	  render: function() {
	    var self = this;
	    this.$el.empty();
	    addLink(this.$el);
	    this.collection.forEach(function(deck) {
	      var view = new DeckView({model: deck});
	      self.$el.append(view.render().el);
	    });
	    return this;
	  }
	});
})