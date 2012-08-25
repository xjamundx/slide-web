var Slide = Backbone.Model.extend({});
var Deck = Backbone.Model.extend({});
var SlideList = Backbone.Collection.extend({
  model: Slide
});
var DeckList = Backbone.Collection.extend({
  model: Deck,
  url: '/decks'
});
var Slides = new SlideList();
var Decks = new DeckList();
var DeckView = Backbone.View.extend({
  template: Handlebars.compile($("#template-deck").html()),
  render: function() {
    this.el = this.template(this.model.toJSON());
    return this;
  }
});
var SlideView = Backbone.View.extend({
  template: Handlebars.compile($("template-slide").html())
})

var DecksView = Backbone.View.extend({
  el: $("#decks"),
  initialize: function() {
    this.collection.fetch();
    this.collection.on('reset', this.render.bind(this));
  },
  render: function() {
    var self = this;
    this.collection.forEach(function(deck) {
      var view = new DeckView({model: deck});
      $(self.el).append(view.render().el);
    });
  }
});

var app = new DecksView({collection: Decks});
