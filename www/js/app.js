//Define an angular module for our app
var xyxxy = angular.module('xyxxy', ['ngRoute', 'ionic'])
 
//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddNewOrder', {
        templateUrl: 'pages/user/splash.html',
        controller: 'AddOrderController'
    }).
      when('/ShowOrders', {
        templateUrl: 'pages/user/splash.html',
        controller: 'ShowOrdersController'
      }).
      otherwise({
        redirectTo: '/AddNewOrder'
      });
}])
 
 
.controller('AddOrderController', function($scope) {
     
    $scope.message = 'This is Add new order screen';
     
})
 
 
.controller('ShowOrdersController', function($scope) {
 
    $scope.message = 'This is Show orders screen';
 
});