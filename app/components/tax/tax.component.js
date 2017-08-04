angular
    .module('app.tax', [])
    .component('tax', {
        bindings: {},
        controller: ['$scope', 'taxService', TaxController],
        templateUrl: 'components/tax/tax.html'
    });

function TaxController($scope, taxService) {
    var tsvm = taxService.vm;
    angular.extend(this, {
        recalculate: recalculate,
        taxRate: taxService.taxRate
    });

    function recalculate (taxRateInput) {
        taxService.setTaxRate(taxRateInput);
        this.taxRate = taxService.getTaxRate();
    }
}