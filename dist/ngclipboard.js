/*! ngclipboard - v1.1.1 - 2017-03-19
* https://github.com/sachinchoolur/ngclipboard
* Copyright (c) 2017 Sachin; Licensed MIT */
(function() {
    'use strict';

    var MODULE_NAME = 'ngclipboard';
    var angular, Clipboard;
    
    function initialize() {
        angular.module(MODULE_NAME, []).directive('ngclipboard', function() {
          return {
              restrict: 'A',
              scope: {
                  ngclipboardSuccess: '&',
                  ngclipboardError: '&'
              },
              link: function(scope, element) {
                  var clipboard = new Clipboard(element[0]);

                  clipboard.on('success', function(e) {
                    scope.$apply(function () {
                      scope.ngclipboardSuccess({
                        e: e
                      });
                    });
                  });

                  clipboard.on('error', function(e) {
                    scope.$apply(function () {
                      scope.ngclipboardError({
                        e: e
                      });
                    });
                  });

              }
          };
      });
    }

    // Check for CommonJS support
    if (typeof module === 'object' && module.exports) {
        angular = require('angular');
        Clipboard = require('clipboard');
        module.exports = MODULE_NAME;

        initialize();

    // Check for AMD support
    } else if (typeof define === 'function' && define.amd) {
        define(['angular', 'Clipboard'], function(ng, clipboard) {
            angular = ng;
            Clipboard = clipboard;

            initialize();
        });
    } else {
        angular = window.angular;
        Clipboard = window.Clipboard;

        initialize();
    }

})();
