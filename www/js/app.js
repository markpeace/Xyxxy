var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, true);
    },

    onDeviceReady: function() {
        angular.element(document).ready(function() {
            angular.bootstrap(document);
        });
    },
};

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
 
 
.controller('UserSplash', function($scope) { })
 
.controller('StoriesIndex', function($scope) {
	$scope.stories =[
		{ id:1, title: 'Alice in Wonderland', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
		{ id:1, title: 'The Philosophers Stone', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
		{ id:1, title: 'King Kong', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
		{ id:1, title: 'The Magic Faraway Tree', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
		{ id:2, title: 'Five Go On A Sailing Adventure', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' }
	];
});