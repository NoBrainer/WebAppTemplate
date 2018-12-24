'use strict';

const ContentView = require('./content/contentView');
const FooterView = require('./footer/footerView');
const HeaderView = require('./header/headerView');
const templates = require('./appView.html');

const AppView = Backbone.View.extend({
    className: 'appView',

    render: function() {
        this.cleanup();

        let html = templates.scaffold();
        this.$el.html(html);

        this.headerView = new HeaderView();
        this.$('#header').html(this.headerView.render().$el);

        this.contentView = new ContentView();
        this.$('#content').html(this.contentView.render().$el);

        this.footerView = new FooterView();
        this.$('#footer').html(this.footerView.render().$el);

        return this;
    },

    cleanup: function() {
        if (this.headerView) {
            this.headerView.remove();
        }
        if (this.contentView) {
            this.contentView.remove();
        }
        if (this.footerView) {
            this.footerView.remove();
        }
    },

    remove: function() {
        this.cleanup();
        Backbone.View.prototype.remove.apply(this, arguments);
    }
});

module.exports = AppView;