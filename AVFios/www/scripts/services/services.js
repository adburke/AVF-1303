'use strict';

/* Services */

var app = angular.module('angularApp');

// This service makes sure cordova has fired its deviceready
app.factory('cordovaReady', function() {
  return function (fn) {
  
    var queue = [];
    
    var impl = function () {
      queue.push(Array.prototype.slice.call(arguments));
    };
    
    document.addEventListener('deviceready', function () {
      queue.forEach(function (args) {
        fn.apply(this, args);
      });
      impl = fn;
    }, false);
    
    return function () {
      return impl.apply(this, arguments);
    };
  };
});

// Phonegap Accelerometer service
app.factory('accelerometer', function ($rootScope, cordovaReady) {
  return {
    getCurrentAcceleration: cordovaReady(function (onSuccess, onError) {
      navigator.accelerometer.getCurrentAcceleration(function () {
        ("accelerometer service fired");
        var that = this,
          args = arguments;
          
        if (onSuccess) {
          $rootScope.$apply(function () {
            onSuccess.apply(that, args);
          });
        }
      }, function () {
        var that = this,
          args = arguments;
         
        if (onError) {
          $rootScope.$apply(function () {
            onError.apply(that, args);
          });
        }
      });
    })
  };
});

// Phonegap Accelerometer service
app.factory('geolocation', function ($rootScope, cordovaReady) {
  return {
    getCurrentPosition: cordovaReady(function (onSuccess, onError) {
      navigator.geolocation.getCurrentPosition(function () {
        console.log("geolocation service fired");
        var that = this,
          args = arguments;
        // Success function
        if (onSuccess) {
          $rootScope.$apply(function () {
            onSuccess.apply(that, args);
          });
        }
      }, function () {
        var that = this,
          args = arguments;
        // Error function 
        if (onError) {
          $rootScope.$apply(function () {
            onError.apply(that, args);
          });
        }
      });
    })
  };
});