var templates = require('./tab1View.html');

var Tab1View = Backbone.View.extend({
    className: 'tab1-view',

    render: function() {
        var html = templates.scaffold();
        this.$el.html(html);

        return this;
    }
});

module.exports = Tab1View;