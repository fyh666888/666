angular.module('babyPage',[])
.config( function ($stateProvider) {

    $stateProvider
    .state('assortment.baby', {
        url : '/assortment.baby',
        // css: "src/view/assortment/paths/06baby/css/baby.css",
        templateUrl : "src/view/assortment/paths/06baby/baby.html"
    })
})
.controller('babctrl',['$scope','$http',function ($scope,$http,$css){
    $http.get('http://localhost:8888/src/common/data/fenlei/06yingtong.json')
    .then(function (res){
        return res.data
    })
    .then(function (res){
        $scope.pro=res.categoryItemList
        console.log($scope.pro[0].itemList)
    })
}])