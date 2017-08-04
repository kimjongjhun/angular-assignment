angular
    .module('app.ledger')
    .service('ledgerService', [ledgerService]);

function ledgerService() {

    this.totalPrice = 0;
    this.getTotalPrice = getTotalPrice;

    function getTotalPrice(itemList) {
        for (var i = 0; i < itemList.length; i++) {
            this.totalPrice = this.totalPrice + Number(itemList[i].price);
        }

        return this.totalPrice;
    }

}