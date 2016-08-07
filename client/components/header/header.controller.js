'use strict';

class HeaderController {
  
  constructor($scope) {
    this.$scope = $scope;
    this.title = 'DLT';
    this.subTitle = 'Simple blog example';
  }

}

angular.module('dltApp')
  .controller('HeaderController', HeaderController);
