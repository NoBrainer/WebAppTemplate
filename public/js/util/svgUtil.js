'use strict';

const ExportedObj = module.exports = {};

const SvgUtil = {
    setup: function() {
        $.get({url: '/resources/icons.svg', dataType: 'text'})
            .done((svgText) => {
                $('#svgWrapper').html(svgText);
            });
    }
};

_.extend(ExportedObj, SvgUtil);