'use strict';

/**
 * @ngdoc function
 * @name yeomanAngularDeployApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanAngularDeployApp
 */
angular.module('yeomanAngularDeployApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
