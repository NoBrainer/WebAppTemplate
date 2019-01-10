'use strict';

const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');

// Set the global variables
window.$ = $;
window._ = _;
window.Backbone = Backbone;

// Setup the global config
let Config = require('../../scripts/readConfig');
window.Config = Config;

// Require singletons to make sure they're initialized
require('./router');
require('./model/appStateModel');

const AppView = require('./view/appView');
const SvgUtil = require('./util/svgUtil');

(function() {
    // Render the app view to the page
    let appView = new AppView();
    $('body').prepend(appView.render().$el);

    // Setup the SVGs inline
    SvgUtil.setup();

    // Start the router
    Backbone.history.start();
})();