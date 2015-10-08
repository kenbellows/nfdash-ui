var mainModule = angular.module('nfdash.main', [
    'ngRoute',
    'chart.js',
    'nfdash.challenge',
    //'nfdash.trends',
    //'nfdash.profile'
]);

mainModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/current'
    })
    .when('/current', {
      templateUrl: 'components/challenge/challenge.html',
      controller: 'nfdash.challenge.challengeCtrl',
      resolve: { isCurrent: function() { return true; } }
    })
    .when('/challenge/:id', {
      templateUrl: 'components/challenge/challenge.html',
      controller: 'nfdash.challenge.challengeCtrl',
      resolve: { isCurrent: function() { return false; } }
    })
    /*
    .when('/trends', {
      templateUrl: 'components/trends/trends.html',
      controller: 'nfdash.trends.trendsCtrl'
    })
    .when('/profile', {
      templateUrl: 'components/profile/profile.html',
      controller: 'nfdash.profile.profileCtrl'
    })
    */
  ;
}])
.controller('nfdash.main.mainCtrl', ['$scope', function($scope) {
  console.log('in!');
}]);

