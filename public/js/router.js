var AppStateModel = require('./model/appStateModel');

var Router = Backbone.Router.extend({
    initialize: function() {
        this.route(/^.*/, 'goDefault', this.goDefault);
        this.route(/^home.*/, 'goHome', this.goHome);
        this.route(/^tab1.*/, 'goTab1', this.goTab1);
    },

    goDefault: function() {
        this.navigate('home', { trigger: true, replace: false });
    },

    goHome: function() {
        AppStateModel.setMode(AppStateModel.modes.HOME);
    },

    goTab1: function() {
        AppStateModel.setMode(AppStateModel.modes.TAB1);
    }
});

var singletonInstance = new Router();
module.exports = singletonInstance;