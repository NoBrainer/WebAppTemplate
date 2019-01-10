'use strict';

const ExportedObj = module.exports = {};

const elementId = 'all_svg';

const SvgUtil = {
    setup: function() {
        $.get('/resources/icons.svg')
            .done((resp) => {
                // Remove SVG in case it already exists
                $('#'+elementId).remove();

                // Setup the SVG element to have an id and be invisible
                let svgElement = resp.children[0];
                svgElement.id = elementId;
                svgElement.setAttribute('style', 'display:none');
                svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

                // Add to the page
                $('body').prepend(svgElement);
            });
    }
};

_.extend(ExportedObj, SvgUtil);