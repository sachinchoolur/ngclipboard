(function() {
    'use strict';
    var MODULE_NAME = 'ngclipboard';
    var angular, ClipboardJS;

    // Check for CommonJS support
    if (typeof module === 'object' && module.exports) {
      angular = require('angular');
      ClipboardJS = require('clipboard');
      module.exports = MODULE_NAME;
    } else {
      angular = window.angular;
      ClipboardJS = window.ClipboardJS;
    }

    angular.module(MODULE_NAME, []).directive('ngclipboard', function() {
        return {
            restrict: 'A',
            scope: {
                ngclipboardSuccess: '&',
                ngclipboardError: '&'
            },
            link: function(scope, element) {
                //constructor for clipboardjs changed to ClipboardJS
                var clipboard = new ClipboardJS(element[0]);

                clipboard.on('success', function(e) {
              
                });

                clipboard.on('error', function(e) {
              
                });

                element.on('$destroy', function() {
                    clipboard.destroy();
                });

            }
        };
    });
})();
