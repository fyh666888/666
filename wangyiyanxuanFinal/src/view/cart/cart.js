angular.module('cartPage',[])
.config( function ($stateProvider) {

	$stateProvider
	.state('cart', {
		url : '/cart',
		templateUrl : "src/view/cart/cart.html"
	})
})
