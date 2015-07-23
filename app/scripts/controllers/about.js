'use strict';

/**
 * @ngdoc function
 * @name yourfbApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yourfbApp
 */
angular.module('fabioApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
