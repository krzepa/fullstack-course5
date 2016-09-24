(function () {
    'use strict';

    var app = angular.module('ShoppingListCheckOff', []);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController(ShoppingListCheckOffService) {
        this.itemsList = ShoppingListCheckOffService.toBuyItemsList;
        this.checkOffItem = function (itemIndex) {
            ShoppingListCheckOffService.checkOffItem(itemIndex);
        };
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
        this.itemsList = ShoppingListCheckOffService.boughtItemsList;
    }

    function ShoppingListCheckOffService() {
        this.toBuyItemsList = [
            { name: 'cookies', quantity: 10 },
            { name: 'milk', quantity: 1 },
            { name: 'butter', quantity: 1 },
            { name: 'bread', quantity: 2 },
            { name: 'sugar', quantity: 2 }
        ];

        this.boughtItemsList = [];

        this.checkOffItem = function (itemIndex) {
            this.boughtItemsList.push(this.toBuyItemsList.splice(itemIndex, 1)[0]);
        }
    }

    app.controller('ToBuyShoppingController', ToBuyShoppingController);
    app.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController);
    app.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

})();
