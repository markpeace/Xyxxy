xyxxy.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
  .state('splash', {
    url: "/user/splash",
    templateUrl: "pages/user/splash.html",
    controller: 'UserSplash'            
  });
  
  
  $urlRouterProvider.otherwise("/user/splash");
  
})