//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
xyxxy.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/user/splash', {
        templateUrl: 'pages/user/splash.html',
        controller: 'UserSplash'
    }).
	when('/stories/index', {
        templateUrl: 'pages/stories/index.html',
        controller: 'StoriesIndex'
    }).
      otherwise({
        redirectTo: '/stories/index'
      });
}]);