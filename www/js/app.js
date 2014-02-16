//Define an angular module for our app
var xyxxy = angular.module('xyxxy', ['ngRoute', 'ionic'])
 
//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/user/splash', {
        templateUrl: 'pages/user/splash.html',
        controller: 'UserSplash'
    }).
      otherwise({
        redirectTo: '/user/splash'
      });
}])
 
 
.controller('UserSplash', function($scope) { });