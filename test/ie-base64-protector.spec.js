/*global exports, require*/

(function () {

    'use strict';

    var protector = require("../lib/protector"),
        selectorPrefix = '.lt-ie8',
        selector = 'body',
        css = selector + ' { background: url(image.jpg); }';

    exports['test protector'] = {

        "test that protect function is defined": function (test) {

            test.strictEqual(typeof protector.protect, 'function');
            test.done();
        },

        "test that protect accepts css and selectorPrefix as arguments and return modified css": function (test) {

            var result = protector.protect(css, selectorPrefix);

            test.notStrictEqual(result.indexOf(selectorPrefix + ' ' + selector), -1);
            test.done();
        },

        "test that protect throws an error if the css argument is not defined as a string": function (test) {

            test.throws(function () {
                protector.protect(undefined, selectorPrefix);
            }, Error);
            test.done();
        },

        "test that protect throws an error if the selectorPrefix argument is not defined as a string": function (test) {

            test.throws(function () {
                protector.protect(css, undefined);
            }, Error);
            test.done();
        }
    };
}());
