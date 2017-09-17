var $ = require('jquery');
var Backbone = require('backbone');

var AppView = Backbone.View.extend({
    className: 'app-view',

    initialize: function() {},

    render: function() {
        this.$el.html("<h1>[UNDER CONSTRUCTION]</h1>");
        return this;
    }
});

module.exports = AppView;