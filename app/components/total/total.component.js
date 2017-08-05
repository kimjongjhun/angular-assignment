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
    var vm = this;
    vm.totalPrice = 0;
    vm.finalPrice = 0;
    vm.taxRate = taxService.taxRate;

    angular.extend(this, {
        calc: calc,
        changeTax: changeTax,
        changeTotal: changeTotal
    });

    function calc() {
        changeTax(taxService.taxRate);
        changeTotal(ledgerService.totalPrice);
        console.log(vm.totalPrice, vm.taxRate);
        vm.finalPrice = (vm.totalPrice * vm.taxRate).toFixed(2);
    }

    function changeTax(newTax) {
        if (vm.taxRate !== newTax) {
            vm.taxRate = (taxService.taxRate/100)+1;
            console.log('changing tax rate', vm.taxRate);
        } else {
            console.log('no tax rate change', vm.taxRate)
        }
    }

    function changeTotal(totalPrice) {
        if (vm.totalPrice !== totalPrice) {
            vm.totalPrice = totalPrice;
            console.log('changing total price', vm.totalPrice);
        } else {
            console.log('no total price change', vm.totalPrice);
        }
    }
}