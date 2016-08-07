'use strict';

(function() {

  class BlogController {

    constructor($http, $scope, $routeParams) {
      this.$http = $http;
      this.$scope = $scope;
      this.id = $routeParams.id;
      this.post = {};
      this.categoriesFilter = '';
    }

    $onInit() {
      this.$http.get('/api/blog/' + this.id)
        .then(response => {
          this.post = response.data;
        });
    }
    
  }

  angular.module('dltApp')
    .component('post', {
      templateUrl: 'app/blog/blog.html',
      controller: BlogController
    });
})();
