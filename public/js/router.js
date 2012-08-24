define([
    'backbone'
], function (Backbone) {  
  var AppRouter = new Backbone.Router.extend({
    initialize: function() {
      Backbone.history.start();
    },  
    routes: {
    },
    defaultRoute: function() { console.log("default route"); }, 
    decks: function() { console.log(this); },
    deck: function() { console.log(this); },
    slide: function() { console.log(this); },
    prez: function() { console.log(this); },
    pres: function() { console.log(this); }
  });
  return new AppRouter();
}); 
