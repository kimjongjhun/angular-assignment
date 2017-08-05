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
        calc: calc,
        changeTax: changeTax,
        changeTotal: changeTotal
    });

    function calc() {
        changeTax(taxService.taxRate);
        changeTotal(ledgerService.totalPrice);
        console.log(this.totalPrice, this.taxRate);
        this.finalPrice = this.totalPrice * this.taxRate;
        console.log(this.finalPrice);
    }

    function changeTax(newTax) {
        if (this.taxRate != newTax) {
            this.taxRate = (taxService.taxRate/100)+1;
            console.log('changing tax rate', this.taxRate);
        } else {
            console.log('no tax rate change', this.taxRate)
        }
    }

    function changeTotal(totalPrice) {
        if (this.totalPrice != totalPrice) {
            this.totalPrice = totalPrice;
            console.log('changing total price', this.totalPrice);
        } else {
            console.log('no total price change', this.totalPrice);
        }
    }
}