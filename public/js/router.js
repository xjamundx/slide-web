define(function(require) {
	var Backbone = require('backbone');
	var DecksView = require('view/decks');
	var DeckList = require('collection/decks');
	var SlidesView = require('view/slides');
	var SlideView = require('view/slide');
	var Slide = require('model/slide');
	var Decks = new DeckList();

	function loadSlides(deckId) {
	  new SlidesView({model: Decks.get(deckId)});
	}

	function loadSlide(deckId, num) {
		var deck = Decks.get(deckId);
		var slide = deck.get('slides')[num];
		slide.deckId = deckId;
		slide.num = num;
		$('#title').text(slide.title);
		var s = new Slide(slide);
		var view = new SlideView({model: s});
		$('.content').html(view.render().el);
	}

	return Backbone.Router.extend({
	    initialize: function() {
	      Backbone.history.start();
	    },  
	    routes: {
	      "": "decks",
	      "decks/:deckId": "deck",
	      "slides/:deckId/:num": "slide"
	    },
	    decks: function() {
			var decks = new DecksView({collection: Decks});
	    },
	    deck: function(deckId) {
			if (Decks.length) return loadSlides(deckId);	      
			Decks.fetch({
				success: function() {
					loadSlides(deckId);
				}
			});
	    },
	    slide: function(deckId, num) {
			if (Decks.length) return loadSlide(deckId, num);
			Decks.fetch({
				success: function() {
					loadSlide(deckId, num);
				}
			});
	    }
	});
});
