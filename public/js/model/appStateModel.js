var AppStateModel = Backbone.Model.extend({
    defaults: {
        mode: null
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

    setup: function() {
        //TODO: setup things
        this.initialSetupDeferred.resolve();
        return this.getInitialSetupPromise();
    },

    fields: {
        MODE: 'mode'
    },

    modes: {
        HOME: 'home',
        TAB1: 'tab1'
    }
});

var singletonInstance = new AppStateModel();
module.exports = singletonInstance;