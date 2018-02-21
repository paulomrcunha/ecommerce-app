'use strict';

/**
 * @ngdoc function
 * @name ecommerceApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the ecommerceApp
 */
angular.module('ecommerceApp')
  .controller('StoreCtrl', function ($scope, categories) {
    $scope.categories = categories;
    console.log(categories);
    // this.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
  });
