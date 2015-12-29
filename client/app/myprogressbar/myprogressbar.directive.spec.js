'use strict';

describe('Directive: myprogressbar', function () {

  // load the directive's module and view
  beforeEach(module('homepageApp'));
  beforeEach(module('app/myprogressbar/myprogressbar.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<myprogressbar></myprogressbar>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the myprogressbar directive');
  }));
});