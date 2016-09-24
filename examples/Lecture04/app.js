(function () {
'use strict';

var app = angular.module('main.myFirstApp', []);
console.log('app',app);

    app.controller('MyFirstController', function ($rootScope, $scope) {
        console.log('scopes', $rootScope, $scope);
    });

})();
