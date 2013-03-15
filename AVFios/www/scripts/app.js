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
      .when('/native', {
        templateUrl: 'views/native.html',
        controller: 'ytubeCtrl'
      })
      .when('/research', {
        templateUrl: 'views/research.html',
        controller: 'researchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
