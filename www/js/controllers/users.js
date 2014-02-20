xyxxy.controller('UserSplash', function($scope, $http) { 	
})

.controller('UserLogin', ['$scope', '$rootScope', '$location', 'ParseService', '$ionicLoading', function($scope, $rootScope, ParseService, $location, $ionicLoading) {
  $scope.login = function () {
    $scope.loading = $ionicLoading.show({
      content: 'Logging In',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 500
    });
    
    Parse.User.logIn($scope.login.username, $scope.login.password, {
      success: function (user) {
        $rootScope.currentUser = user;
        $scope.loading.hide();
        window.location.href="#/stories/index";
      },
      error: function (user, error) {
        $scope.loading.hide();
        alert("Error: " + error.message + " (" + error.code + ")");
      }
    });
    
  }
}])


.controller('UserRegister', ['$scope', '$rootScope', '$location', 'ParseService', '$ionicLoading', function($scope, $rootScope, ParseService, $location, $ionicLoading) {
  $scope.register = function () {

    if ($scope.register.password!=$scope.register.passwordconfirm) {
      alert("Unable to register: Passwords did not match");
      return;
    }
    
    $scope.loading = $ionicLoading.show({
      content: 'Registering',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 500
    });
    
    var user = new Parse.User();
    user.set("email", $scope.register.email);
    user.set("username", $scope.register.username);
    user.set("password", $scope.register.password);  
    user.signUp(null, {
      success: function(user) {
        $rootScope.currentUser = user;
        $scope.loading.hide();
        window.location.href="#/stories/index";
      },
      error: function(user, error) {
        $scope.loading.hide();
        alert("Unable to register:  "  + error.message);
      }
    });    
  };
}]);