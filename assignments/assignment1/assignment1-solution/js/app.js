(function(){
  'use strict';
  var app = angular.module('LunchCheckerApp', []);

  function LunchCheckerController($scope,$injector) {
    $scope.dishes = '';
    $scope.message = '';
    $scope.messageStyle = '';
    $scope.checkNumberOfDishes = function() {
      console.log($injector.annotate(LunchCheckerController));
      var dishes = $scope.dishes.split(','),
          num = countDishes(dishes);
      if(num === 0) {
            $scope.message = 'Please enter data first';
            $scope.messageStyle = 'message-nodata';
      } else if(num <= 3) {
            $scope.message = 'Enjoy!';
            $scope.messageStyle = 'message-somedata';
      } else {
            $scope.message = 'Too much!';
            $scope.messageStyle = 'message-somedata';
      }
    };

    function countDishes(a) {
      return a.reduce(function(value, element){
        if(element.trim().length) return value + 1;
        else return value;
      }, 0);
    }
  }

  LunchCheckerController.$inject = ['$scope','$injector'];
  app.controller('LunchCheckerController', LunchCheckerController);

})();
