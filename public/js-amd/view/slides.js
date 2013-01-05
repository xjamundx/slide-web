define(function(require) {
	var $ = require('jquery')
	var Backbone = require('backbone')
	var SlideView = require('view/slide')
	var Slide = require('model/Slide')
	return Backbone.View.extend({
	  el: '.content',
	  initialize: function() {
	    this.render();
	  },
	  render: function() {
	    var self = this;
	    $('#title').text(this.model.get('title'));
	    this.$el.empty();
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