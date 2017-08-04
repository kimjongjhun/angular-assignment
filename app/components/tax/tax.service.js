angular
    .module('app.tax')
    .service('taxService', [taxService]);

function taxService() {
    angular.extend(this, {
        setTaxRate: setTaxRate,
        getTaxRate: getTaxRate,
        test: test
    });

    this.taxRate = 7;

    function getTaxRate() {
        return this.taxRate;
    }

    function setTaxRate(newTaxRate) {
        this.taxRate = newTaxRate;
        console.log('from tax service', this.taxRate);
    }

    function test() {
        console.log('test success');
    }
}