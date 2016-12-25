
 angular.module("homePage",["angularCSS"])
        .config( function ($stateProvider) {
        $stateProvider
        .state('home', {
            url : '/home',
            templateUrl : "src/view/home/home.html",
            css:"src/view/home/css/index.css",
        })  
        .state("zhigong",{
            url:"/zhigong",
            templateUrl:"src/view/home/zhigong.html"
        })
    })
    .controller("ctrl",function($scope,$http,math){
        $http.get("http://localhost:8888/src/view/home/data/index/jsonData.json")
        .then(function(response){
            return response.data.focusList;
        })
        .then(function(res){
           $scope.arr = res;
           console.log($scope.arr);
           math.lunbo()
        })
    })
    // 控制器依赖注入
    .service("math",function(){
        this.lunbo = function(){
            var mySwiper = new Swiper ('.firstSwiper .swiper-container', {
            
            direction: 'horizontal',
            loop: true,
            autoplay:2000,
            speed:1000,
            autoplayDisableOnInteraction:false,
            grabCursor:true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,
      })   
        }
    })
    // 新品
    .controller("xinpinCtrl",function($scope,$http){
        $http.get("http://localhost:8888/src/view/home/data/index/jsonData.json")
        .then(function(res){
            $scope.xinpinArr=res.data.newItemList;
            console.log($scope.xinpinArr)
        })
    })
    // 人气推荐
     .controller("renqiCtrl",function($scope,$http){
        $http.get("http://localhost:8888/src/view/home/data/index/jsonData.json")
        .then(function(res){
            $scope.popularArr=res.data.popularItemList;
            console.log($scope.popularArr)
        })
    })
     // 专题精选
     .controller("jingxuanCtrl",function($scope,$http,math1){
        $http.get("http://localhost:8888/src/view/home/data/index/jsonData.json")
        .then(function(res){
            $scope.zhuantiArr=res.data.topicList;
            console.log($scope.zhuantiArr)
            math1.lunbo();
        })
    })
     .service("math1",function(){
        this.lunbo = function(){
            var mySwiper1 = new Swiper ('.jingxuan .swiper-container', {
              
            direction: 'horizontal',
            loop: true,
            // autoplay:3000,
            speed:1000,
            autoplayDisableOnInteraction:false,
            grabCursor:true,
            // 如果需要分页器
            // pagination: '.swiper-pagination',
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,
      })   
        }
    })
     // 具体分类
      .controller("cateListCtrl",function($scope,$http){
        $http.get("http://localhost:8888/src/view/home/data/index/jsonData.json")
        .then(function(res){
            $scope.cateListArr=res.data.cateList;
            console.log($scope.cateListArr);
        })
    })
    .controller("test",function($scope){
        
        $scope.backTop = function(){
           var maxTop=document.querySelector("body").scrollTop;
           if(maxTop>=800){
                document.getElementsByClassName("backTop")[0].style.display="block";
           }else{
                document.getElementsByClassName("backTop")[0].style.display="none";

           }
        };
        $scope.backtoTop = function(){
            document.querySelector("body").scrollTop = 0;
        }
    })
    .directive('myTouchmove', [function() {
    return function(scope, element, attr) {
        element.on('touchmove', function(event) {
                scope.$apply(function() { 
                    scope.$eval(attr.myTouchmove); 
                });
            });
        };
    }])
    .controller("zhigong",function($scope,$http){
        $http.get("http://localhost:8888/src/view/home/data/index/jsonData.json")
        .then(function(res){
            $scope.zhigongArr=res.data.tagList;
        })
      
    })