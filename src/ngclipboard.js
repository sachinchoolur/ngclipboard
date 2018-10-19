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
                  var successCallback = function () {
                    scope.ngclipboardSuccess({
                      e: e
                    });
                  };
                  if (!scope.$$phase) {
                    successCallback();
                  } else {
                      scope.$apply(successCallback);
                  }
                });

                clipboard.on('error', function(e) {
                  scope.$apply(function () {
                    scope.ngclipboardError({
                      e: e
                    });
                  });
                });

                element.on('$destroy', function() {
                    clipboard.destroy();
                });

            }
        };
    });
})();
