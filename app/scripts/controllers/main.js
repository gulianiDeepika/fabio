'use strict';

/**
 * @ngdoc function
 * @name yourfbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yourfbApp
 */
angular.module('fabioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
