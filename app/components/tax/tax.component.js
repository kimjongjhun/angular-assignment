angular
    .module('app.tax', [])
    .component('tax', {
        bindings: {},
        controller: ['taxService', TaxController],
        templateUrl: 'components/tax/tax.html'
    });

function TaxController(taxService) {
    angular.extend(this, {
        recalculate: recalculate,
        taxRate: taxService.taxRate
    });

    function recalculate (taxRateInput) {
        taxService.setTaxRate(taxRateInput);
        this.taxRate = taxService.getTaxRate();
    }
}