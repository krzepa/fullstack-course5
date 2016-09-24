(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

DIController.$inject = ['$scope', '$filter'];
function DIController($scope) {
  $scope.name = "Yaakov";

  $scope.upper = function () {

    $scope.name = upCase($scope.name);
  };
}

})();
