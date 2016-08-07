'use strict';

describe('Component: postComponent', function() {

  // load the controller's module
  beforeEach(module('dltApp'));

  var scope;
  var postComponent;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/blog/undefined')
      .respond(404);

    scope = $rootScope.$new();
   postComponent = $componentController('post', {
      $http: $http,
      $scope: scope
    });
  }));

  it('should got error 404', function() {
    postComponent.$onInit();
    $httpBackend.flush();
    console.log(postComponent);
    expect(postComponent.something).not.toBeDefined();
  });
});
