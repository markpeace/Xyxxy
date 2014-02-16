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
	when('/stories/index', {
        templateUrl: 'pages/stories/index.html',
        controller: 'StoriesIndex'
    }).
      otherwise({
        redirectTo: '/stories/index'
      });
}])
 
 .controller('StoriesIndex', function($scope, $http) { 

	$http.get('/test/mockdata.json').success(function(d){
		$scope.stories=d;
	});
	
});

