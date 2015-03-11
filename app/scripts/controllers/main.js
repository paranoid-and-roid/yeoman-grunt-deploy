'use strict';

/**
 * @ngdoc function
 * @name yeomanAngularDeployApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanAngularDeployApp
 */
angular.module('yeomanAngularDeployApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
