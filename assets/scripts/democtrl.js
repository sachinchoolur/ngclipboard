
// Demo controller
angular.module('ngclipboardDemo', ['ngclipboard']).controller('ngclipboardDemoCtrl', function ($scope) {
    $scope.onSuccess = function(e) {
		e.clearSelection();

	    console.info('Action:', e.action);
	    console.info('Text:', e.text);
	    console.info('Trigger:', e.trigger);

	    showTooltip(e.trigger, 'Copied!');
    };

    $scope.onError = function(e) {
    	console.error('Action:', e.action);
	    console.error('Trigger:', e.trigger);

	    showTooltip(e.trigger, fallbackMessage(e.action));
    }
});