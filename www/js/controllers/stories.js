xyxxy.controller('StoriesIndex', function($scope, $http) { 

	$http.get('/test/mockdata.json').success(function(d){
		$scope.stories=d;
	});
	
});