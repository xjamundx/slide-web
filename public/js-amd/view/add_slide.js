define(function(require) {
    var template = require('hbs!../../tmpl/add_slide'),
        ajaxForm = require('../functions/jquery.ajaxForm');

    return Backbone.View.extend({
        el: '.content',
        template: template,
        initialize: function() {
            this.collection.fetch();
            this.collection.on('reset', this.render, this);
        },
        render: function() {
            var self  = this;
            $(this.el)
                .empty()
                .append(this.template(this.model.toJSON()));
            $('#js-slide-form').ajaxForm({
                callback: function(res) {
                    self.collection.fetch({
                        success:function() {
                            Backbone.history.navigate('/#slides/' + res.deckId + '/' + res.slideId, { trigger: true });
                        }
                    });
                }
            });
            return this;
        }
    });
});