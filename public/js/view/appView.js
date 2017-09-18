var $ = require('jquery');
var Backbone = require('backbone');
var templates = require('./appView.html');

var AppView = Backbone.View.extend({
    className: 'app-view',

    initialize: function() {},

    render: function() {
        var html = templates.appView({ title: "My App" });
        this.$el.html(html);
        return this;
    }
});

module.exports = AppView;