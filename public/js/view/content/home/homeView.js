var templates = require('./homeView.html');

var HomeView = Backbone.View.extend({
    className: 'g_pageContainer homeView',

    render: function() {
        var html = templates.scaffold();
        this.$el.html(html);

        return this;
    }
});

module.exports = HomeView;