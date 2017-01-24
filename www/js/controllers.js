angular.module('starter.controllers', [])


.controller('LoginCtrl', function($scope, $state) {
	$scope.login = function(user){
		console.log("login : " + user);
		$state.go('tab.dash');
	};
	$scope.signup = function(){
		console.log("sign up");
		$state.go('sign-up');
	}
})
	

.controller('SignupCtrl', function($scope, $state) {
	$scope.login = function(user){
		console.log("login : " + user);
		$state.go('login');
	};
})

.controller('AddCtrl', function($scope, $state) {
	$scope.add = function(cam){
		console.log("cam : " + cam);
		$state.go('tab-cams');
	};
})

.controller('DashCtrl', function($scope) {})

.controller('CamsCtrl', function($scope, Cams) {

  $scope.cams = Cams.all();
  $scope.remove = function(ccam) {
    Cams.remove(cam);
  };
})

.controller('CamDetailCtrl', function($scope, $stateParams, Cams) {
  $scope.cam = Cams.get($stateParams.camId);
})

.controller('InfoCtrl', function($scope, $state) {
 
});
