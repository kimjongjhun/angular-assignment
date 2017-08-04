angular
    .module('app.parent', [])
    .component('parent', {
        bindings: {},
        controller: ['taxService', ParentController],
        templateUrl: 'components/parent/parent.html'
    });

function ParentController(taxService) {
    angular.extend(this, {
        'dummy': [
            {
                'name': 'item name here',
                'price': '1.00',
                'displayPrice': '$1.00'
            },
            {
                'name': 'item name here',
                'price': '1.00',
                'displayPrice': '$1.00'
            },
            {
                'name': 'item name here',
                'price': '1.00',
                'displayPrice': '$1.00'
            },
            {
                'name': 'item name here',
                'price': '1.00',
                'displayPrice': '$1.00'
            },
            {
                'name': 'item name here',
                'price': '1.00',
                'displayPrice': '$1.00'
            },
            {
                'name': 'item name here',
                'price': '1.00',
                'displayPrice': '$1.00'
            },
            {
                'name': 'item name here',
                'price': '1.00',
                'displayPrice': '$1.00'
            },
            {
                'name': 'item name here',
                'price': '1.00',
                'displayPrice': '$1.00'
            },
            {
                'name': 'item name here',
                'price': '1.00',
                'displayPrice': '$1.00'
            },
            {
                'name': 'item name here',
                'price': '1.00',
                'displayPrice': '$1.00'
            }
        ],
        'taxRate': taxService.getTaxRate()
    });

}