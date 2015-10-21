![license](https://img.shields.io/npm/l/ladda-angular.svg)
![travis](https://travis-ci.org/sachinchoolur/ladda-angular.svg?branch=master)
![bower](https://img.shields.io/bower/v/ladda-angular.svg)
![npm](https://img.shields.io/npm/v/ladda-angular.svg)

# ladda-angular
Angularjs directive for [Ladda](http://lab.hakim.se/ladda/) button *`( <300 bytes )`* by [@hakimel](https://twitter.com/hakimel)

Demo
---
[Ladda angular](http://sachinchoolur.github.io/ladda-angular/)

You can also check live demo on [codepen](http://codepen.io/sachinchoolur/pen/ogxpOZ)

How to use 
---
#### Bower

You can Install ladda-angular using the [Bower](http://bower.io) package manager.

```sh
$ bower install ladda-angular --save
```

#### npm

You can also find ladda-angular on [npm](http://npmjs.org).

```sh
$ npm install ladda-angular
```
#### Create your ladda button

For more information about how to create ladda button please refer [ladda](https://github.com/hakimel/Ladda) button repository.

#### The code
add the Following code into your document.
``` html
<script src="path/ladda-angular.min.js"></script>
```
#### module
Add `ladda` dependency to your module
``` javascript 
var myApp = angular.module("app", ["ladda"]);
```
#### directive
Add directive `ladda-button` with your normal ladda button.
``` html
<button ladda-button="laddaLoading" data-style="expand-right" class="ladda-button"><span class="ladda-label">Submit</span></button>
```
Directive attribute should be a scope variable with boolean or number.
* `true`   == start loading.
* `false`  == stop loading.
* `number` == progress value.

#### Controller example
``` javascript
app.controller('laddaDemoCtrl', function ($scope, $interval, $timeout) {
    
    // Example without progress Bar
    $scope.showLoading = function () {
        /* 
         Set ladda loading true
         Loading spinner will be shown;
        */
        $scope.laddaLoading = true;
        $timeout(function () {
            
            /*
             Set ladda loading false after 3 Seconds. 
             Loading spinner will be hidden;
            */
            $scope.laddaLoading = false;
        }, 3000);
    };

    // Example with progress Bar
    $scope.loadingWithProgress = function () {
        
        // Set progress 0;
        $scope.laddaLoadingBar = 0;
        
        // Run in every 30 milliseconds
        var interval = $interval(function () {
            
            // Increment by 1; 
            $scope.laddaLoadingBar++;
            if ($scope.laddaLoadingBar >= 100) {
                
                // Cancel interval if progress is 100
                $interval.cancel(interval);
                
                //Set ladda loading false
                $scope.laddaLoadingBar = false;
            }
        }, 30);
    };
});
```

#### [guidelines for contributors](https://github.com/sachinchoolur/ladda-angular/blob/master/contributing.md)

#### MIT © [Sachin](https://twitter.com/sachinchoolur)





