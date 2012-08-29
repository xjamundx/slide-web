var Slide = Backbone.Model.extend({});
var Deck = Backbone.Model.extend({});
var $content = $('.content');
var $title = $('#title');
var SlideList = Backbone.Collection.extend({
  model: Slide
});
var templates = {};
var DeckList = Backbone.Collection.extend({
  model: Deck,
  url: '/decks'
});

var Decks = new DeckList();
var AppRouter = Backbone.Router.extend({
    initialize: function() {
      Backbone.history.start(); // {pushState: true});
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
      if (!Decks.length) {
        Decks.fetch({success: loadSlides});
      } else {
        loadSlides();
      }
      
      function loadSlides() {
          var deck = new SlidesView({model: Decks.get(deckId)});
      }
    },
    slide: function(deckId, num) {
      if (!Decks.length) {
        Decks.fetch({success: loadSlide});
      } else {
        loadSlide();
      }
      
      function loadSlide() {
        var deck = Decks.get(deckId);
        var slide = deck.get('slides')[num];
        slide.deckId = deckId;
        slide.num = num;
        $title.text(slide.title);
        var s = new Slide(slide);
        var view = new SlideView({model: s});
        $content.html(view.render().el);
      }
    }
});

var DeckView = Backbone.View.extend({
  initialize: function() {
    this.template = templates['public/tmpl/deck.hbs'];
  },
  render: function() {
    this.el = this.template(this.model.toJSON());
    return this;
  }
});

var SlidesView = Backbone.View.extend({
  el: $content,
  initialize: function() {
    this.render();
  },
  render: function() {
    var self = this;
    $title.text(this.model.get('title'));
    $(this.el).empty();
    this.model.get("slides").forEach(function(slide, i) {
      slide.deckId = self.model.get('id');
      slide.num = i;
      var view = new SlideView({model:new Slide(slide)});
      $(self.$el).append(view.render().el);
    });
    return this;
  }
});

var SlideView = Backbone.View.extend({
  initialize: function() {
    this.template = templates['public/tmpl/slide.hbs'];
  },
  template: templates['public/tmpl/slide.hbs'],
  render: function() {
    this.el = this.template(this.model.toJSON());
    return this;
  }
});
var DecksView = Backbone.View.extend({
  el: $content,
  initialize: function() {
    this.collection.fetch();
    this.collection.on('reset', this.render, this);
  },
  render: function() {
    var self = this;
    $title.text('All Slides');
    $(this.el).empty();
    this.collection.forEach(function(deck) {
      var view = new DeckView({model: deck});
      $(self.el).append(view.render().el);
    });
    return this;
  }
});

var router = new AppRouter();
