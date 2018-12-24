'use strict';

const templates = require('./footerView.html');

const FooterView = Backbone.View.extend({
    className: 'g_pageContainer footerView',

    render: function() {
        let html = templates.scaffold();
        this.$el.html(html);

        return this;
    }
});

module.exports = FooterView;