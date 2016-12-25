angular.module('foodPage',[])
.config( function ($stateProvider) {

    $stateProvider
    .state('assortment.food', {
        url : '/assortment.food',
        // css: "src/view/assortment/paths/08food/css/food.css",
        templateUrl : "src/view/assortment/paths/08food/food.html"
    })
})
.controller('fooctrl',['$scope','$http',function ($scope,$http,$css){
    $http.get('http://localhost:8888/src/common/data/fenlei/08yinshi.json')
    .then(function (res){
        return res.data
    })
    .then(function (res){
        $scope.pro=res.categoryItemList
        console.log($scope.pro[0].itemList)
    })
}])