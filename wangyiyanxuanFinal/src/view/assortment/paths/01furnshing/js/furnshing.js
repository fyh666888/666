angular.module('furnshingPage',['angularCSS'])
.config( function ($stateProvider) {

    $stateProvider
    .state('assortment.furnshing', {
        url : '/assortment.furnshing',
        // css: "src/view/assortment/paths/01furnshing/css/furnshing.css",
        templateUrl : "src/view/assortment/paths/01furnshing/furnshing.html"
    })
})
.controller('furnctrl',['$scope','$http',function ($scope,$http,$css){
    $http.get('http://localhost:8888/src/common/data/fenlei/01jujia.json')
    .then(function (res){
        return res.data
    })
    .then(function (res){
        $scope.pro=res.categoryItemList
        console.log($scope.pro[0].itemList)
    })
}])