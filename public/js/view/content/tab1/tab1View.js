'use strict';

const templates = require('./tab1View.html');

const Tab1View = Backbone.View.extend({
    className: 'g_pageContainer tab1View',

    render: function() {
        let html = templates.scaffold();
        this.$el.html(html);

        return this;
    }
});

module.exports = Tab1View;