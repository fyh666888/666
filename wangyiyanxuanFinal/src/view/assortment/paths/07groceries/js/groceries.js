angular.module('groceriesPage',[])
.config( function ($stateProvider) {

    $stateProvider
    .state('assortment.groceries', {
        url : '/assortment.groceries',
        // css: "src/view/assortment/paths/07groceries/css/groceries.css",
        templateUrl : "src/view/assortment/paths/07groceries/groceries.html"
    })
})
.controller('groctrl',['$scope','$http',function ($scope,$http,$css){
    $http.get('http://localhost:8888/src/common/data/fenlei/07zahuo.json')
    .then(function (res){
        return res.data
    })
    .then(function (res){
        $scope.pro=res.categoryItemList
        console.log($scope.pro[0].itemList)
    })
}])