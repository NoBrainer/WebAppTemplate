var ExportedClass = module.exports = Backbone.Model.extend();

var AppStateModel = require('./model/appStateModel');

var Router = Backbone.Router.extend({
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
        var options = this.parsePathParams(params);
        AppStateModel.setMode(AppStateModel.modes.HOME, tab, section, options);
    },

    goTab1: function(tab, section, params) {
        var options = this.parsePathParams(params);
        AppStateModel.setMode(AppStateModel.modes.TAB1, tab, section, options);
    },

    parsePathParams: function(params) {
        if (!_.isString(params) || _.isEmpty(params)) return null;
        var pairs = params.split('&');
        var obj = {};
        _.each(pairs, function(pair) {
            var split = pair.split('=');
            obj[split[0]] = split[1] || null;
        });
        return obj;
    }
});

var singletonInstance = new Router();
_.extend(ExportedClass, singletonInstance);
ExportedClass.prototype = Router.prototype;