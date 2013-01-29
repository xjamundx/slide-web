define(function(require) {
	var SlideView = require('view/slide'),
		Slide = require('model/Slide'),
		addLink = function(container, id) {
			$('<a />')
				.addClass('btn blue')
				.attr({ 'id': 'js-add-deck', 'href': '#slides/' + id + '/add', 'title': 'Insert slide.' })
				.text('Insert slide')
				.appendTo($(container));
		};

	return Backbone.View.extend({
	  el: '.content',
	  initialize: function() {
	    this.render();
	  },
	  render: function() {
	    var self = this;
	    $('#title').text(this.model.get('title'));
	    this.$el.empty();
	    addLink($(this.el), this.model.get('id'));
	    this.model.get('slides').forEach(function(slide, i) {
	      slide.deckId = self.model.get('id');
	      slide.num = i;
	      var view = new SlideView({model: new Slide(slide)});
	      self.$el.append(view.render().el);
	    });
	    return this;
	  }
	});
})