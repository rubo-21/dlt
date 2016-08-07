'use strict';

angular.module('dltApp')
  .directive('myheader', () => ({
    templateUrl: 'components/header/header.html',
    restrict: 'E',
    controller: 'HeaderController',
    controllerAs: 'head'
  }));
