var AppStateModel = require('../../model/appStateModel');
var templates = require('./headerView.html');

var HeaderView = Backbone.View.extend({
    className: 'page-container header-view',

    initialize: function() {
        this.listenTo(AppStateModel, 'change:' + AppStateModel.fields.MODE, function(model, mode) {
            this.selectTab();
        });
    },

    render: function() {
        var html = templates.headerView();
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