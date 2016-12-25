angular.module('otherPage',[])
.config( function ($stateProvider) {

    $stateProvider
    .state('assortment.other', {
        url : '/assortment.other',
        // css: "src/view/assortment/paths/09other/css/other.css",
        templateUrl : "src/view/assortment/paths/09other/other.html"
    })
})
.controller('othctrl',['$scope','$http',function ($scope,$http,$css){
    $http.get('http://localhost:8888/src/common/data/fenlei/09qita.json')
    .then(function (res){
        return res.data
    })
    .then(function (res){
        $scope.pro=res.categoryItemList
        console.log($scope.pro[0].itemList)
    })
}])