define([
    'backbone'
], function (Backbone) {
  var AppRouter = Backbone.Router.extend({
    initialize: function() {
      Backbone.history.start();
    },  
    routes: {
      "/decks": "decks",
      "/deck/:deckId": "deck",
      "/slide/:deckId/:num": "slide",
      "*actions": "defaultRoute"
    },
    defaultRoute: function() { console.log("Default Route"); }, 
    decks: function() { console.log("Decks"); },
    deck: function() { console.log("Deck"); },
    slide: function() { console.log("Slide"); }
  });
  return AppRouter;
}); 
