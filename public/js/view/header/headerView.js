'use strict';

const AppStateModel = require('../../model/appStateModel');
const templates = require('./headerView.html');

const HeaderView = Backbone.View.extend({
    className: 'g_pageContainer headerView',

    initialize: function() {
        this.listenTo(AppStateModel, 'change:' + AppStateModel.fields.MODE, function(model, mode) {
            this.selectTab();
        });
    },

    render: function() {
        let html = templates.scaffold();
        this.$el.html(html);

        this.selectTab();

        return this;
    },

    selectTab: function() {
        this.$('.tab').removeClass('active');
        switch(AppStateModel.getMode()) {
            case AppStateModel.modes.HOME:
                this.$('.tab.home').addClass('active'); break;
            case AppStateModel.modes.TAB1:
                this.$('.tab.tab1').addClass('active'); break;
        }
    }
});

module.exports = HeaderView;