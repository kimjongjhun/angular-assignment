angular
    .module('app.parent', [])
    .component('parent', {
        bindings: {

        },
        controller: [ParentController],
        templateUrl: 'components/parent/parent.html'
    });

function ParentController() {
    angular.extend(this, {
            taxRate: 1.05
    });

    this.dummy = [
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
    ];

    function $onChanges() {

    }
}