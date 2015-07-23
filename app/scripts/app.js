'use strict';

/**
 * @ngdoc overview
 * @name yourfbApp
 * @description
 * # yourfbApp
 *
 * Main module of the application.
 */
angular
  .module('fabioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'facebook'
  ])
  .config(function ($routeProvider, FacebookProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      FacebookProvider.init('642105092592127');
  });
