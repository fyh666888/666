angular.module('minePage',["angularCSS"])
.config( function ($stateProvider) {

	$stateProvider
	.state('mine', {
		url : '/mine',
		templateUrl : "src/view/mine/mine.html",
		css : "src/view/mine/mine.css",
		controller : 'mineCtrl'
	})
})
.controller('mineCtrl',function ($scope) {
	$scope.user = "";
	$scope.psd = "";

	$scope.xiala = true;
	$scope.signin = true;
	$scope.err = true;
	// 下拉菜单出现事件
	$scope.text = function () {
		if ($scope.user) {
			$scope.xiala = false;
		}else {
			$scope.xiala = true;
		}
	}

	// 下拉菜单点击事件
	$scope.choose = function (e) {
		$scope.user = e.target.innerText
		$scope.xiala = true;
	}

	// 登录点击事件
	$scope.sign = function () {
		console.log($scope.user);
		if($scope.user == "admin@163.com" && $scope.psd == "admin") {
			$scope.signin = true;
		} else {
			$scope.err = false;
		}
	}
	// 错误信息消失事件
	$scope.lose = function () {
		$scope.err = true;
	}
})
.filter('email',function () {
	return function (ele,arg) {
		return ele + arg;
	}
})



