define(function(require) {
	var Backbone = require('backbone'),
		AddDecksView  = require('view/add_deck'),
		DecksView = require('view/decks'),
		DeckList = require('collection/decks'),
		AddSlidesView = require('view/add_slide'),
		SlidesView = require('view/slides'),
		SlideView = require('view/slide'),
		Slide = require('model/slide');
		Decks = new DeckList();
	return Backbone.Router.extend({
	    initialize: function() {
	      Backbone.history.start();
	    },  
	    routes: {
	      '': 'decks',
	      'decks/add': 'addNewDeck',
	      'decks/:deckId': 'deck',
	      'slides/:deckId/add': 'addNewSlide',
	      'slides/:deckId/:num': 'slide',
	    },
	    addNewDeck: function() {
	    	var newDeck = new AddDecksView({ collection: Decks });
	    },
	    decks: function() {
	    	var decks = new DecksView({collection: Decks});
	    },
	    deck: function(deckId) {
	      if (Decks.length) return loadSlides();	      
	      Decks.fetch({success: loadSlides});
	      function loadSlides() {
	          new SlidesView({model: Decks.get(deckId)});
	      }
	    },
	    addNewSlide: function(deckId) {
	    	Decks.fetch({
	    		success: function() {
	    			var deck = Decks.get(deckId);
	    			if (deck) {
	    				var newSlide = new AddSlidesView({ collection: Decks, model: deck });
	    			}
	    		}
	    	});
	    },
	    slide: function(deckId, num) {
	      if (Decks.length) return loadSlide();
	      Decks.fetch({success: loadSlide});
	      function loadSlide() {
	        var deck = Decks.get(deckId);
	        var slide = deck.get('slides')[num];
	        slide.deckId = deckId;
	        slide.num = num;
	        $('#title').text(slide.title);
	        var s = new Slide(slide);
	        var view = new SlideView({model: s});
	        $('.content').html(view.render().el);
	      }
	    }
	});
});