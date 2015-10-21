(function() {
    'use strict';
    angular.module('ngclipboard', []).directive('ngclipboard', function() {
        return {
            restrict: 'A',
            scope: {
                ngClipboardSuccess: '&',
                ngClipboardError: '&'
            },
            link: function(scope, element) {

                var _id = element.attr('id');
                if (!_id) {
                    element.attr('id', 'ngclipboard' + Date.now());
                    _id = element.attr('id');
                }

                var clipboard = new Clipboard('#' + _id);

                clipboard.on('success', function(e) {
                    scope.ngClipboardSuccess({
                        e: e,
                        id: element.attr('id')
                    });
                });

                clipboard.on('error', function(e) {
                    scope.ngClipboardError({
                        e: e,
                        id: element.attr('id')
                    });
                });

            }
        };
    });
}());
