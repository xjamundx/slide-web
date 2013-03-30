define(function (require) {
    var Backbone = require('backbone');
    var rivets = require('rivets');

    return Backbone.View.extend({
        el: 'header h1',
        initialize: function () {
            _.bindAll(this, 'render');
            this.model.on('change:title', this.onDomChangeTitle, this);
            this.render();
        },
        onDomChangeTitle: function () {
            if (this.model.has('title')) {
                window.document.title = this.model.get('title');
            }
        },
        render: function () {
            rivets.bind(this.el, {header: this.model});
            return this;
        }
    });
});