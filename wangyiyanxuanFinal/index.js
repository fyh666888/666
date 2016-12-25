angular.module('TemplateProject',["ui.router","homePage","specialPage","assortmentPage","minePage","cartPage"])
.config( function ($urlRouterProvider) {

	(function(window){
		var winW = document.documentElement.clientWidth || document.body.clientWidth;
		document.documentElement.style.fontSize = winW / 10 + "px";
		window.onresize = function(){
			var winW = document.documentElement.clientWidth || document.body.clientWidth;
			document.documentElement.style.fontSize = winW / 10 + "px";
		}
	})(window)
	// 默认页面
	$urlRouterProvider.otherwise('/home');

})
.controller('headCtrl', function ($scope) {
	$scope.flag = true;
	$scope.myClass = "header left"
	$scope.change = function () {
		$scope.flag = !$scope.flag;
		$scope.myClass = $scope.myClass == "header left" ? "header left toggle" : "header left";
	}
})
