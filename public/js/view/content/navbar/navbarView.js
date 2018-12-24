'use strict';

const NavItemCollection = require('../../../collection/nav/navItemCollection');
const templates = require('./navbarView.html');

const NavView = Backbone.View.extend({
    className: 'navbarView',

    initialize: function(options) {
        options = options || {};

        let list = options.list || ['NO NAV ITEMS DEFINED'];
        this.collection = new NavItemCollection(list, {parse: true});

        this.listenTo(this.collection, 'change reset', this.render);
    },

    render: function() {
        this.$el.empty();
        this.collection.each(_.bind(this.renderNavItem, this));
        return this;
    },

    renderNavItem: function(navItemModel) {
        let html = templates.navItem(navItemModel.attributes);
        this.$el.append(html);
        return this;
    },

    getCollection: function() {
        return this.collection;
    }
});

module.exports = NavView;