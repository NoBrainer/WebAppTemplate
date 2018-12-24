var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

// Set the global variables
window.$ = $;
window._ = _;
window.Backbone = Backbone;

// Setup the global config
var Config = require('../../scripts/readConfig');
window.Config = Config;

// Require singletons to make sure they're initialized
require('./router');
require('./model/appStateModel');

var AppView = require('./view/appView');

(function() {
    // Render the app view to the page
    var appView = new AppView();
    $('body').prepend(appView.render().$el);

    // Start the router
    Backbone.history.start();
})();