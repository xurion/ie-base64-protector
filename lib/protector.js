/* globals module, require */

var cssParser = require('css'),
    fs = require('fs');

module.exports.protect = function (css, selectorPrefix) {

    'use strict';

    if (typeof css !== 'string') {

        throw new Error('css is undefined');
    }

    if (typeof selectorPrefix !== 'string') {

        throw new Error('selectorPrefix is undefined');
    }

    var parsedCss,
        i,
        j,
        k,
        newSelectors,
        newStyles = '';

    parsedCss = cssParser.parse(css).stylesheet.rules;

    for (i = 0; i < parsedCss.length; i = i + 1) {

        if (parsedCss[i].type === 'rule') {

            for (j = 0; j < parsedCss[i].declarations.length; j = j + 1) {

                if (parsedCss[i].declarations[j].property === 'background' || parsedCss[i].declarations[j].property === 'background-image') {

                    if (/[a-zA-Z0-9\/:\.]+\.[a-zA-Z]+/.test(parsedCss[i].declarations[j].value)) {

                        newSelectors = '';

                        for (k = 0; k < parsedCss[i].selectors.length; k = k + 1) {

                            newSelectors = newSelectors + selectorPrefix + ' ' + parsedCss[i].selectors[k] + ',';
                        }

                        newSelectors = newSelectors.substr(0, newSelectors.length - 1);
                        newStyles = newStyles + newSelectors + '{' + parsedCss[i].declarations[j].property + ':' + parsedCss[i].declarations[j].value + ';/*ImageEmbed:skip*/}';
                    }
                }
            }
        }
    }

    return newStyles;
};
