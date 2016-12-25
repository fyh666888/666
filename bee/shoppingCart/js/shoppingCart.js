define(["text!/shoppingCart/shoppingCart.html"],function(html){
	return {
		show:function(){
		$(".container").html(html);
			var data =JSON.parse(localStorage.getItem("data"));
			if(data !=null){
				$("#main1").css("display","block");
				$("#main").css("display","none");
						//对于获取的数据进行处理，计算重复个数并产生新的数据
				var data2 = [];
				var listMap = {};
				for (var i = 0, len = data.length, img, name,price,key; i < len; i++) {
				    img = data[i].img;
				    name = data[i].name;
				    price = data[i].price;
				    key = img + '-' + name+'-'+price; // key为id和name的组合，值为number
				    if (listMap[key]) {
				        listMap[key]++;
				    } else {
				        listMap[key] = 1;
				    }
				}
				for (var item in listMap) {
				    data2.push({
				        img: item.split('-')[0],
				        name: item.split('-')[1],
				        price: item.split('-')[2],
				        number: listMap[item]
				    })
				}	
//。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
			var sum = 0;
			//数据遍历
			$.each(data2, function(index,elem) {
				var li = $(`
				<li class="shop">
					<div  class="left">
						<span class="icon"></span>
						<img src="${elem.img}"/>
					</div>
					<div  class="right">
						<p class="up">${elem.name}</p>
						<div class="down">
							<span class="money">${elem.price}</span>
							<div class="am"><span class="add"></span>
								<span class="num">${elem.number}</span>
								<span class="mul"></span>
							</div>
						</div>
					</div>
					
				</li>
				`)
				$("#main1 .container").append(li);
				$(".shop .icon").addClass('selected');
				$(".allselected").addClass('selected1');
				
	//字符串截取,求得总钱数
			sum += Number(elem.price.slice(1))*Number(elem.number);
			var a = sum.toFixed(1);
			$(".mid .num").html(a);
			});
	//点击添加购物车
		$(".add").on("touchstart",function(){
			var num = $(this).next().html();
			num++;
			$(this).next().html(num);
			var price = $(this).parent().siblings().html().slice(1);
			var allSum = Number(price);
			var a = (Number($(".mid .num").html())+allSum).toFixed(1);
			$(".mid .num").html(a);
		});
		//点击减少购物车
		var b=0;
		$(".mul").on("touchstart",function(){
				var num = $(this).prev().html();
				num--;
				if(num>=0){
					$(this).prev().html(num);
					var price = $(this).parent().siblings().html().slice(1);
				var allSum = Number(price);
				 b = (Number($(".mid .num").html())-allSum).toFixed(1);
				$(".mid .num").html(b);
			}else{
				alert("您为选择该物品,请重新选择")
			}
		});
		//点击全选按钮
		var flag = true;
			var c;
		$(".allselected").on("touchstart",function(){
			var d = $(".mid .num").html()
			console.log(c)
			if(flag){
				$(this).removeClass("selected1");
				$(".shop .icon").removeClass("selected");
				flag =!flag;
				$(".mid .num").html(0);
				c = d;
			}else{
				$(this).addClass("selected1");
				$(".shop .icon").addClass("selected");
			flag =!flag;
			$(".mid .num").html(c);
			}
		});
			}else{
	//去逛逛事件绑定
			
		}
			}
		
	}

});