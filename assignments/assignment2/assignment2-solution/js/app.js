(function () {
    'use strict';

    var app = angular.module('ShoppingListCheckOff', []);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController(ShoppingListCheckOffService) {
        this.itemsList = ShoppingListCheckOffService.getToBuyItemsList();
        this.checkOffItem = function (itemIndex) {
            ShoppingListCheckOffService.checkOffItem(itemIndex);
        };
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
        this.itemsList = ShoppingListCheckOffService.getBoughtItemsList();
    }

    function ShoppingListCheckOffService() {
        var toBuyItemsList = [
                { name: 'cookies', quantity: 10 },
                { name: 'milk', quantity: 1 },
                { name: 'butter', quantity: 1 },
                { name: 'bread', quantity: 2 },
                { name: 'sugar', quantity: 2 }
            ],
            boughtItemsList = [];

        this.checkOffItem = function (itemIndex) {
            boughtItemsList.push(toBuyItemsList.splice(itemIndex, 1)[0]);
        };

        this.getBoughtItemsList = function() {
            return boughtItemsList;
        };

        this.getToBuyItemsList = function() {
            return toBuyItemsList;
        };
    }

    app.controller('ToBuyShoppingController', ToBuyShoppingController);
    app.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController);
    app.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

})();
