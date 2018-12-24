'use strict';

const AppStateModel = require('../../model/appStateModel');
const HomeView = require('../../view/content/home/homeView');
const Tab1View = require('../../view/content/tab1/tab1View');

const ContentView = Backbone.View.extend({
    className: 'g_pageContainer contentView',

    initialize: function() {
        this.listenTo(AppStateModel, 'change:' + AppStateModel.fields.MODE, function(model, mode) {
            this.render();
        });
    },

    render: function() {
        this.cleanup();

        switch(AppStateModel.getMode()) {
            case AppStateModel.modes.HOME:
                this.childView = new HomeView(); break;
            case AppStateModel.modes.TAB1:
                this.childView = new Tab1View(); break;
            default:
                return this;
        }
        this.$el.html(this.childView.render().$el);

        return this;
    },

    cleanup: function() {
        if (this.childView) {
            this.childView.remove();
        }
    },

    remove: function() {
        this.cleanup();
        Backbone.View.prototype.remove.apply(this, arguments);
    }
});

module.exports = ContentView;