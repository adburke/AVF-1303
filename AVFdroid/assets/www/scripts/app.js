'use strict';

angular.module('angularApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        // controller: 'MainCtrl'
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
        controller: 'nativeCtrl'
      })
      .when('/research1', {
        templateUrl: 'views/research1.html'
      })
      .when('/research2', {
        templateUrl: 'views/research2.html'
      })
      .when('/research3', {
        templateUrl: 'views/research.html'
      })
      .when('/mash1', {
        templateUrl: 'views/mash1.html',
        controller: 'mash1Ctrl'
      })
      .when('/mash2', {
        templateUrl: 'views/mash2.html',
        controller: 'mash2Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
