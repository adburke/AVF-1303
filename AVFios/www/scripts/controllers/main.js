'use strict';

var app = angular.module('angularApp');

app.controller('twitCtrl', function ($scope, $http) {
  // $scope.input = '';
  $scope.search = function () {
    $http.jsonp('http://search.twitter.com/search.json?q=%40' + $scope.input + '&rpp=5&callback=JSON_CALLBACK')
      .success(function(data) {
        $scope.tweets = data.results;
        console.log(data);
      })
      .error(function(data, status) {
          $scope.data = data || "Request failed";
          $scope.status = status;
          console.log(status);
      });
  };
});

app.controller('ytubeCtrl', function ($scope, $http) {
  // $scope.input = '';
  $scope.search = function () {
    $http.jsonp('https://gdata.youtube.com/feeds/api/videos?category=' + $scope.input + '&alt=json&max-results=6&v=2&callback=JSON_CALLBACK')
      .success(function(data) {
        $scope.videos = data.feed.entry;
        console.log(data);
      })
      .error(function(data, status) {
          $scope.data = data || "Request failed";
          $scope.status = status;
          console.log(status);
      });
  };
});

app.controller('nativeCtrl', function ($scope) {
  $scope.image = "./img/cordova.png";
  $scope.getImage = function (imageURI) {
    $scope.image = imageURI;
  };

  $scope.getGeo = function (position) {
    $scope.latitude = position.coords.latitude;
    $scope.longitude = position.coords.longitude;
    $scope.altitude = position.coords.altitude;
    $scope.accuracy = position.coords.accuracy;
    $scope.altitudeAcc = position.coords.altitudeAccuracy;
    $scope.heading = position.coords.heading;
    $scope.speed = position.coords.speed;
    $scope.timestamp = position.timestamp;
  };

  $scope.getVideo = function (videoArray) {
    $scope.video = videoArray[0].fullPath;
  };

  $scope.getAccel = function (acceleration) {
    $scope.accelX = acceleration.x;
    $scope.accelY = acceleration.y;
    $scope.accelZ = acceleration.z;
    $scope.accelTimestamp = acceleration.timestamp;
  };

});

app.controller('mash1Ctrl', function ($scope) {

  $scope.geoMash = function(position) {
    $scope.latitude = position.coords.latitude;
    $scope.longitude = position.coords.longitude;
  };
          
});

app.controller('mash2Ctrl', function ($scope, $http, geolocation) {

  geolocation.getCurrentPosition(function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    $http.jsonp('http://api.wunderground.com/api/d97410dd6342cdac/forecast/q/' + latitude + ',' + longitude + '.json?callback=JSON_CALLBACK')
      .success(function(data) {
        var wthr = data.forecast.simpleforecast.forecastday;
        $scope.weather = wthr;
      })
      .error(function(data, status) {
          console.log(status);
      });
    });
});
