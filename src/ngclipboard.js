(function() {
    'use strict';
    angular.module('ngclipboard', []).directive('ngclipboard', function() {
        return {
            restrict: 'A',
            scope: {
                ngclipboardSuccess: '&',
                ngclipboardError: '&'
            },
            link: function(scope, element) {
                var clipboard = new Clipboard(element[0]);

                clipboard.on('success', function(e) {
                    scope.ngclipboardSuccess({
                        e: e
                    });
                });

                clipboard.on('error', function(e) {
                    scope.ngclipboardError({
                        e: e
                    });
                });

            }
        };
    });
}());
