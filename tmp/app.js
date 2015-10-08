(function () {
  'use strict';

  var app = angular.module('examples', ['chart.js']);

 
  app.controller('LineCtrl', function ($scope) {
    $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    //$scope.type = 'Scale'; 
    $scope.type = 'line'; 
    //$scope.type = 'Bar';

    $scope.data = [
      [65, 59, 90, 81, 56, 55, 40],
      [28, 48, 40, 19, 96, 27, 100]
    ];
  });

 
  function getRandomValue (data) {
    var l = data.length, previous = l ? data[l - 1] : 50;
    var y = previous + Math.random() * 10 - 5;
    return y < 0 ? 0 : y > 100 ? 100 : y;
  }
})();
