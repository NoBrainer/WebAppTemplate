'use strict';

const ExportedClass = module.exports = Backbone.Model.extend();

const AppStateModel = require('./model/appStateModel');

const Router = Backbone.Router.extend({
    initialize: function() {
        this.route(/^.*/, 'goDefault', this.goDefault);

        this.route('home(/)(?:params)', 'goHome', this.goHome);
        this.route('home/:tab(/)(?:params)', 'goHome', this.goHome);
        this.route('home/:tab/:section(/)(?:params)', 'goHome', this.goHome);

        this.route('tab1(/)(?:params)', 'goHome', this.goTab1);
        this.route('tab1/:tab(/)(?:params)', 'goHome', this.goTab1);
        this.route('tab1/:tab/:section(/)(?:params)', 'goHome', this.goTab1);
    },

    goDefault: function() {
        this.navigate(AppStateModel.modes.HOME, { trigger: true, replace: false });
    },

    goHome: function(tab, section, params) {
        let options = this.parsePathParams(params);
        AppStateModel.setMode(AppStateModel.modes.HOME, tab, section, options);
    },

    goTab1: function(tab, section, params) {
        let options = this.parsePathParams(params);
        AppStateModel.setMode(AppStateModel.modes.TAB1, tab, section, options);
    },

    parsePathParams: function(params) {
        if (!_.isString(params) || _.isEmpty(params)) return null;
        let pairs = params.split('&');
        let obj = {};
        _.each(pairs, function(pair) {
            let split = pair.split('=');
            obj[split[0]] = split[1] || null;
        });
        return obj;
    }
});

const singletonInstance = new Router();
_.extend(ExportedClass, singletonInstance);
ExportedClass.prototype = Router.prototype;