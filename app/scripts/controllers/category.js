'use strict';

/**
 * @ngdoc function
 * @name ecommerceApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the ecommerceApp
 */
angular.module('ecommerceApp')
  .controller('CategoryCtrl', function ($scope, category, products) {
    $scope.category = category;
    $scope.products = products;
    console.log(products);
    // this.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
  });
