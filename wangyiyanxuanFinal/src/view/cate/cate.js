angular.module('catePage',[])
.config( function ($stateProvider) {

	$stateProvider
	.state('cate', {
		url : '/cate',
		templateUrl : "src/view/cate/cate.html"
	})
	.state('cate.jujia', {
		url : '/cate.jujia',
		templateUrl : "src/view/cate/cate.jujia/cate.jujia.html"
	})
	.state('cate.chuju', {
		url : '/cate.chuju',
		templateUrl : "src/view/cate/cate.chuju/cate.chuju.html"
	})
})
