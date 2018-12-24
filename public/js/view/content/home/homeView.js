'use strict';

const templates = require('./homeView.html');

const HomeView = Backbone.View.extend({
    className: 'g_pageContainer homeView',

    render: function() {
        let html = templates.scaffold();
        this.$el.html(html);

        return this;
    }
});

module.exports = HomeView;