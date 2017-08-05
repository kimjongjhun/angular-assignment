angular
    .module('app.tax')
    .service('taxService', [taxService]);

function taxService() {
    angular.extend(this, {
        setTaxRate: setTaxRate,
        getTaxRate: getTaxRate
    });

    this.taxRate = 7;

    function getTaxRate() {
        return this.taxRate;
    }

    function setTaxRate(newTaxRate) {
        if (newTaxRate) {
            this.taxRate = newTaxRate;
        }
    }
}