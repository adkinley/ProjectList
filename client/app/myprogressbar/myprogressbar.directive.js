'use strict';

angular.module('homepageApp')
  .directive('myprogressbar', function () {
    return {
      templateUrl: 'app/myprogressbar/myprogressbar.html',
      restrict: 'EA',
      scope: true,
      link: function (scope, element, attrs) {
      	scope.value = JSON.parse(attrs["num"]);
      }
    };
  });

