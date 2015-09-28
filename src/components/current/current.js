angular.module('nfdash.current', [])
.controller('CurrentController', ['$moment', function($moment) {
  this.challenge = {
    startDate: '2015-09-14',
    endDate: '2015-10-26',
  };
  this.dateRange = (
    $moment(this.challenge.startDate).format('dddd MMMM D') +
    ' - ' +
    $moment(this.challenge.endDate).format('dddd MMMM D')
  );
  
  this.data = {
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
}]);
