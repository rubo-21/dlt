'use strict';

angular.module('dltApp')
  .config(function($routeProvider) {
    $routeProvider.when('/blog/:id', {
      template: '<post></post>'
    });
  });
