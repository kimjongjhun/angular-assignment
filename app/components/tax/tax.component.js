angular
    .module('app.tax', [])
    .component('tax', {
        bindings: {},
        controller: [TaxController],
        controllerAs: 'vm',
        templateUrl: 'components/tax/tax.html'
    });

function TaxController() {
    var vm = this;
    angular.extend(vm, {
        recalculate: recalculate
    });

    function recalculate () {
        console.log('recalculating ... ');
    }
}