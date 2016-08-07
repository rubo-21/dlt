'use strict';

(function() {

  class MainController {

    constructor($http, $scope) {
      this.$http = $http;
      this.$scope = $scope;
      this.posts = [];
      this.categories = [];
      this.categoriesFilter = '';
    }

    changeFilter(category) {
       this.categoriesFilter = category;
    }

    $onInit() {
      this.$http.get('/api/blog')
        .then(response => {
          this.posts = response.data;
          let categories = this.categories;

          // creating categories using posts object
          _(this.posts).forEach(post => {
            var category = post.category;

            if(_.indexOf(categories, category) === -1) {
              categories.push(category);
            }
          });

          // sorting categories ASC
          this.categories = categories.sort((a, b) => {
              a = a.toLowerCase();
              b = b.toLowerCase();

              if(a < b) {
                return -1;
              }
              if(a > b) {
                return 1;
              }
              return 0;
          });
        });
    }

    addPost() {
      if (this.newPost) {
        this.$http.post('/api/blog', this.newPost);
        this.newPost = '';
      }
    }

    deletePost(post) {
      this.$http.delete('/api/blog/' + post._id);
    }
  }

  angular.module('dltApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
