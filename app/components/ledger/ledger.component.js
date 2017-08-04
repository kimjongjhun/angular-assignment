angular
    .module('app.ledger', [])
    .component('ledger', {
        bindings: {
            'dummyData': '<'
        },
        controller: ['$http', LedgerController],
        templateUrl: 'components/ledger/ledger.html'
    });

function LedgerController($http) {
    angular.extend(this, {
        $onInit: $onInit,
    });

    this.itemList = [];

    function $onInit() {
        this.itemList = this.dummyData;
        console.log('in on init', this.itemList);
    }
}