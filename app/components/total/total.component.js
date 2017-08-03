angular
    .module('app.total', [])
    .component('total', {
        bindings: {
            'price': '<'
        },
        controller: function() {

        },
        templateUrl: 'components/total/total.html'
    });