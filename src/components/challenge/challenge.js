angular.module('nfdash.challenge', ['chart.js'])
.controller('nfdash.challenge.challengeCtrl', ['$scope', 'isCurrent', function($scope, isCurrent) {
  $scope.challenge = {
    startDate: '2015-09-14',
    endDate: '2015-10-26',
  };
  
  
  $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  $scope.type = 'Line'; //'Bar';

  $scope.data = [
    [65, 59, 90, 81, 56, 55, 40],
    [28, 48, 40, 19, 96, 27, 100]
  ];

  //*
  $scope.weight = {
    chartType: 'Line',
    data: [
      [
        "229.8",
        "229.2",
        "228.6",
        "229.8",
        "230.2",
        "230.2",
        "231.8",
        "232.8",
        "231.6",
        "229.6",
        "233.4",
        "232.8",
        "233.2",
        "235.6",
        "235.2",
        "238.2",
        "238.6",
        "234.6",
        "235.0",
        "234.4",
        "233.4",
        "235.0",
        "237.0"
      ]
    ],
    labels: [
      "9/02",
      "9/03",
      "9/05",
      "9/06",
      "9/07",
      "9/08",
      "9/09",
      "9/10",
      "9/11",
      "9/12",
      "9/15",
      "9/16",
      "9/17",
      "9/19",
      "9/20",
      "9/21",
      "9/22",
      "9/23",
      "9/24",
      "9/25",
      "9/26",
      "9/27",
      "9/29"
    ]
  };
  //*/

  /*
  $scope.data = {
    // pushups 3x/wk
    quest1: {
      labels: [
        'Week 1',
        'Week 2',
        'Week 3',
        'Week 4'
      ],
      
    },
    quest2: {
    },
    quest3: {
    },
    quest4: {

    }
  };
  */
}]);
