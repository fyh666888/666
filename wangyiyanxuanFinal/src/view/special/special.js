var a = ['http://localhost:8888/src/common/data/zhuanti/01getListByAll.json',
'http://localhost:8888/src/common/data/zhuanti/02getListByAll.json',
'http://localhost:8888/src/common/data/zhuanti/03getListByAll.json',
'http://localhost:8888/src/common/data/zhuanti/04getListByAll.json',
'http://localhost:8888/src/common/data/zhuanti/05getListByAll.json',
'http://localhost:8888/src/common/data/zhuanti/06getListByAll.json',
'http://localhost:8888/src/common/data/zhuanti/07getListByAll.json'];
//定义数组存放所有数据
var obj = [];
var index = 0;
angular.module('specialPage',['angularCSS'])
.config( function ($stateProvider) {
	$stateProvider
	.state('special', {
		url : '/special',
		templateUrl : "src/view/special/special.html",
		css:{
            href:'src/view/special/special.css',
            persist:true
          },
		controller:function($scope,$http){
			$http.get('http://localhost:8888/src/common/data/zhuanti/01getListByAll.json')
			.success(function(res){
				$scope.data = res.data.result;
			});
			//遍历所有数据，存放到数组中
			for (i of a) {
				$http.get(i)
				.success(function(res){
					obj.push(res)
				})
			};
			//下一页点击事件
			$scope.next = function(){
				index++;
				if(index <= (obj.length-1)){
					this.data = obj[index].data.result;
					document.body.scrollTop = 0;
//					console.log(document.getElementsByClassName('main_spe')[0].scrollTop)
					document.getElementsByClassName('goTop')[0].style.display = 'none';
					if(index == (obj.length-1)){
						document.getElementsByClassName('lastPage')[0].style.display = 'block';
					}
				}else{
					index = obj.length-1;
				}
				//上一页点击事件
				$scope.pre = function(){
					index--;
					if(index >= 0){
						this.data = obj[index].data.result;
						document.body.scrollTop = 0;
						document.getElementsByClassName('goTop')[0].style.display = 'none';
						document.getElementsByClassName('lastPage')[0].style.display = 'none';
					}
					else{
					index = 0;
					}
				};
			};
			//屏幕滑动goTop出现隐藏
			$scope.touch = function(){
				if(document.body.scrollTop >= 800){
					document.getElementsByClassName('goTop')[0].style.display = 'block';
				}else{
					document.getElementsByClassName('goTop')[0].style.display = 'none';
				}
			}
			//点击goTop返回顶部
			$scope.backTop = function(){
				document.body.scrollTop = 0;
				document.getElementsByClassName('goTop')[0].style.display = 'none';
			}
		}
	})
})
//自定义滑动指令
.directive('myTouchmove', [function() {
	return function(scope, element, attr) {
	    element.on('touchmove', function(event) {
	            scope.$apply(function() { 
	                scope.$eval(attr.myTouchmove); 
	            });
	        });
	    };
	}]);
