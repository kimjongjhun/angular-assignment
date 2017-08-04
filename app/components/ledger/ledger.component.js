angular
    .module('app.ledger', [])
    .component('ledger', {
        bindings: {
            'dummyData': '<',
            'totalPrice': '=?totalPrice'
        },
        controller: ['ledgerService', LedgerController],
        templateUrl: 'components/ledger/ledger.html'
    });

function LedgerController(ledgerService) {
    angular.extend(this, {
        $onInit: $onInit
    });

    this.totalPrice;

    function $onInit() {
        console.log(this.dummyData);
        this.totalPrice = ledgerService.getTotalPrice(this.dummyData);
    }
}