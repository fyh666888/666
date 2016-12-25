angular.module('cleaningPage',[])
.config( function ($stateProvider) {

    $stateProvider
    .state('assortment.cleaning', {
        url : '/assortment.cleaning',
        // css: "src/view/assortment/paths/05cleaning/css/cleaning.css",
        templateUrl : "src/view/assortment/paths/05cleaning/cleaning.html"
    })
})
.controller('clectrl',['$scope','$http',function ($scope,$http,$css){
    $http.get('http://localhost:8888/src/common/data/fenlei/05xihu.json')
    .then(function (res){
        return res.data
    })
    .then(function (res){
        $scope.pro=res.categoryItemList
        console.log($scope.pro[0].itemList)
    })
}])