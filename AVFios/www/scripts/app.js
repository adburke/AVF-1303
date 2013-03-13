'use strict';

angular.module('angularApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/twitter', {
        templateUrl: 'views/twitter.html',
        controller: 'twitCtrl'
      })
      .when('/youtube', {
        templateUrl: 'views/youtube.html',
        controller: 'ytubeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
