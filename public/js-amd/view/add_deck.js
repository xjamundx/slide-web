define(function(require) {
    var template = require('hbs!../../tmpl/add_deck'),
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
                .append(this.template());
            $('#js-deck-form').ajaxForm({
                callback: function(res) {
                    self.collection.fetch({
                        success:function() {
                            Backbone.history.navigate('/#decks/' + res.id, { trigger: true });
                        }
                    });
                }
            });
            return this;
        }
    });
});