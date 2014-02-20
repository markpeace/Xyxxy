xyxxy.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('splash', {
      url: "/user/splash",
      templateUrl: "pages/user/splash.html",
      controller: 'UserSplash'
    })

    // if none of the above are matched, go to this one
    $urlRouterProvider.otherwise("/user/splash");
})