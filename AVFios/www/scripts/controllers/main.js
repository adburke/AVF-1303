'use strict';

angular.module('angularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Testacular'
    ];
  });

function twitCtrl($scope, $http) {
  $scope.input = '';
  $scope.search = function () {
    $http.jsonp('https://search.twitter.com/search.json?q=%40' + $scope.input + '&callback=JSON_CALLBACK')
      .success(function(data) {
        $scope.tweets = data.results;
        console.log(data);
      });
  };
}

function ytubeCtrl($scope, $http) {
  $scope.input = '';
  $scope.search = function () {
    $http.jsonp('https://gdata.youtube.com/feeds/api/videos?category=' + $scope.input + '&alt=json&max-results=6&v=2&callback=JSON_CALLBACK')
      .success(function(data) {
        $scope.videos = data.feed.entry;
        console.log(data);
      });
  };
}