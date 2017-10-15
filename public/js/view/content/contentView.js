var AppStateModel = require('../../model/appStateModel');
var HomeView = require('../../view/content/home/homeView');
var Tab1View = require('../../view/content/tab1/tab1View');
var templates = require('./contentView.html');

var ContentView = Backbone.View.extend({
    className: 'page-container content-view',

    initialize: function() {
        this.listenTo(AppStateModel, 'change:' + AppStateModel.fields.MODE, function(model, mode) {
            this.render();
        });
    },

    render: function() {
        this.cleanup();

        var html = templates.scaffold();
        this.$el.html(html);

        switch(AppStateModel.getMode()) {
            case AppStateModel.modes.HOME:
                this.childView = new HomeView(); break;
            case AppStateModel.modes.TAB1:
                this.childView = new Tab1View(); break;
            default:
                return this;
        }
        this.$('.content-wrapper').html(this.childView.render().$el);

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