xyxxy.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
  .state('splash', {
    url: "/user/splash",
    templateUrl: "pages/user/splash.html",
    controller: 'UserSplash'
  })
  .state('login', {
    url: "/user/login",
    templateUrl: "pages/user/login.html",
    controller: 'UserLogin'
  })
  .state('register', {
    url: "/user/register",
    templateUrl: "pages/user/register.html",
    controller: 'UserRegister'
  })
  
  // if none of the above are matched, go to this one
  $urlRouterProvider.otherwise("/user/splash");
})