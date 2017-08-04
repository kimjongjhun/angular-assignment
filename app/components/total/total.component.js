angular
    .module('app.total', [])
    .component('total', {
        bindings: {
            'price': '<'
        },
        controller: ['ledgerService', 'taxService', TotalController],
        templateUrl: 'components/total/total.html'
    });

function TotalController(ledgerService, taxService) {
    this.totalPrice;
    this.finalPrice;
    this.taxRate;

    angular.extend(this, {
        $onInit: $onInit,
        $onChanges: $onChanges,
        calc: calc,
        changeTax: changeTax,
        changeTotal: changeTotal
    });

    function $onInit() {
        this.tax = taxService.taxRate/100;
        calc();
    }

    function $onChanges() {
        console.log(this.taxRate);
        this.tax = this.taxRate;
        calc();
    }

    function calc() {
        changeTax(taxService.taxRate);
        changeTotal();
        console.log(this.totalPrice, this.tax);
        this.finalPrice = this.totalPrice * this.tax;
        console.log(this.finalPrice);
    }

    function changeTax(newTax) {
        if (this.taxRate != newTax) {
            this.taxRate = taxService.taxRate/100;
            console.log('changing tax rate', this.taxRate);
        } else {
            console.log('no tax rate change')
        }
    }

    function changeTotal() {
        this.totalPrice = ledgerService.totalPrice;
        console.log('checking total price', this.totalPrice);
    }
}