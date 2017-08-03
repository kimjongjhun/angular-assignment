/**
 * Created by zlaqh on 7/30/17.
 */

angular
    .module('app', ['app.ledger', 'app.parent', 'app.tax', 'app.total']);

/*
 1. Create a parent component that will hold 3 child components. - done
 2. The ledger should have a one way bound object that contains the items and prices. - done?
 3. The total component should have a one way bound object that takes in the total price of items without sales tax,
    and another one way bound item of sales tax. It should utilize the $onChanges method to detect when the tax rate is
    changed and recalc -
 4. The tax component should have a two way bound object for the tax rate. The tax rate should be editable by the user.
    -
 5. The items list should be an array that is hard coded into the parent component. The tax rate object should also
    exist in the parent component and be passed around. When the tax rate changes the total component should reflect
    the changes. -
*/