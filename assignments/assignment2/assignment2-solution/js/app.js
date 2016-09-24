(function () {
    'use strict';

    var app = angular.module('ShoppingListApp', []);

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
            'Buy 10 cookies',
            'Buy milk',
            'Buy butter',
            'Buy bread',
            'Buy 12 eggs'
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
