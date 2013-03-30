define(function(require) {
	var Backbone = require('backbone')
	var Deck = require('model/deck')
	return Backbone.Collection.extend({
	  model: Deck,
	  url: '/decks'
	});
});