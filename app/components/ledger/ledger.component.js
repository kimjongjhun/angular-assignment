angular
    .module('app.ledger', [])
    .component('ledger', {
        bindings: {},
        controller: ['$http', LedgerController],
        controllerAs: 'vm',
        templateUrl: 'components/ledger/ledger.html'
    });

function LedgerController($http) {
    var vm = this;
    vm.itemList = [];

    $http.get('/angular-assignment/app/dummy.json')
        .then(function (result) {
            vm.itemList = result.data;
            console.log(vm.itemList);
        });
}