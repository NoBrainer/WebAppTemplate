'use strict';

const ExportedClass = module.exports = Backbone.Collection.extend();

const NavItemModel = require('../../model/nav/navItemModel');

const NavItemCollection = Backbone.Collection.extend({
    model: NavItemModel,

    getActiveItemModel: function() {
        let itemModel = this.find(function(navItemModel) {
            return navItemModel.isActive();
        });
        return itemModel || null;
    },

    activateItemWithId: function(id) {
        this.each(function(itemModel) {
            if (itemModel.getId() === id) {
                itemModel.setActive(true, {silent: true});
            } else {
                itemModel.setActive(false, {silent: true});
            }
        });
        this.trigger('change');
    }
});

_.extend(ExportedClass, NavItemCollection);
ExportedClass.prototype = NavItemCollection.prototype;