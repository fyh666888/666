angular.module('clothPage',[])
.config( function ($stateProvider) {

    $stateProvider
    .state('assortment.cloth', {
        url : '/assortment.cloth',
        // css: "src/view/assortment/paths/04cloth/css/cloth.css",
        templateUrl : "src/view/assortment/paths/04cloth/cloth.html"
    })
})
.controller('cloctrl',['$scope','$http',function ($scope,$http,$css){
    $http.get('http://localhost:8888/src/common/data/fenlei/04fuzhuang.json')
    .then(function (res){
        return res.data
    })
    .then(function (res){
        $scope.pro=res.categoryItemList
        console.log($scope.pro[0].itemList)
    })
}])