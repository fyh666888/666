

//设置全局字体大小
document.documentElement.style.fontSize = innerWidth/10+"px";
window.onresize =function(){
    document.documentElement.style.fontSize = innerWidth /10+"px";

}


//一级路由
angular.module('assortmentPage',["ui.router","furnshingPage","kitchenPage","accessoriesPage","clothPage","cleaningPage","babyPage","groceriesPage","foodPage","otherPage",'angularCSS'])
.config( function ($stateProvider,$urlRouterProvider) {

    $stateProvider
    .state('assortment', {
        url : '/assortment',
        templateUrl : "src/view/assortment/assortment.html"
    })

    // 默认页面
    $urlRouterProvider.otherwise('/assortment.furnshing');

})




