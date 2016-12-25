angular.module('kitchenPage',[])
.config( function ($stateProvider) {

    $stateProvider
    .state('assortment.kitchen', {
        url : '/assortment.kitchen',
        // css: "src/view/assortment/paths/02kitchen/css/kitchen.css",
        templateUrl : "src/view/assortment/paths/02kitchen/kitchen.html"
    })
})
.controller('kitctrl',['$scope','$http',function ($scope,$http,$css){
    $http.get('http://localhost:8888/src/common/data/fenlei/02chuju.json')
    .then(function (res){
        return res.data
    })
    .then(function (res){
        $scope.pro=res.categoryItemList
        console.log($scope.pro[0].itemList)
    })
}])