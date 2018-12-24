'use strict';

const ExportedClass = module.exports = Backbone.Model.extend();

const AppStateModel = Backbone.Model.extend({
    defaults: {
        mode: null,         //String
        section: null,      //String
        tab: null           //String
    },

    initialize: function(attrs, options) {
        this.initialSetupDeferred = $.Deferred();
    },

    getInitialSetupPromise: function() {
        return this.initialSetupDeferred.promise();
    },

    getMode: function() {
        return this.get(this.fields.MODE);
    },

    setMode: function(mode) {
        this.set(this.fields.MODE, mode);
        return this;
    },

    getOptions: function() {
        return this.get(this.fields.OPTIONS);
    },

    setOptions: function(options) {
        this.set(this.fields.OPTIONS, options);
        return this;
    },

    setPage: function(mode, tab, section, options) {
        this.set({
            mode: mode,
            tab: tab || null,
            section: section || null,
            options: _.isObject(options) ? options : null
        });
        return this;
    },

    getSection: function() {
        return this.get(this.fields.SECTION);
    },

    setSection: function(section, options) {
        this.set({
            section: section || null,
            options: _.isObject(options) ? options : null
        });
        return this;
    },

    getTab: function() {
        return this.get(this.fields.TAB);
    },

    setTab: function(tab) {
        this.set(this.fields.TAB, tab);
        return this;
    },

    fields: {
        MODE: 'mode',
        OPTIONS: 'options',
        SECTION: 'section',
        TAB: 'tab'
    },

    modes: {
        HOME: 'home',
        TAB1: 'tab1'
    }
});

const singletonInstance = new AppStateModel();
_.extend(ExportedClass, singletonInstance);
ExportedClass.prototype = AppStateModel.prototype;