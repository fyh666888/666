angular.module('accessoriesPage',[])
.config( function ($stateProvider) {

    $stateProvider
    .state('assortment.accessories', {
        url : '/assortment.accessories',
        // css: "src/view/assortment/paths/03accessories/css/accessories.css",
        templateUrl : "src/view/assortment/paths/03accessories/accessories.html"
    })
})
.controller('accctrl',['$scope','$http',function ($scope,$http,$css){
    $http.get('http://localhost:8888/src/common/data/fenlei/03peijian.json')
    .then(function (res){
        return res.data
    })
    .then(function (res){
        $scope.pro=res.categoryItemList
        console.log($scope.pro[0].itemList)
    })
}])