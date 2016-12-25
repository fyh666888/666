define(["text!/sscs/sscs.html",'jquery','zepto'],function(html){
	return {
		show:function(){
			var url = "http://localhost:8888/data/getCategoryProducts.json";
$.get(url,function(data){
//	console.log(data["data"]);
	handle(data["data"]);
	add();
});
//数据处理函数
function handle(data){
	$.each(data, function(index,elem) {
		var li = $(`
			<li>
				<img src="${elem["img"]}"/>
				<div>
				<p class="p1">${elem["keywords"]}</p>
				<div class="div">
				<span class="s1">精选</span>
				<span class="s2">${elem["pm_desc"]}</span>
				</div>
				<span class="sp1">${elem["specifics"]}</span>
				<p class ="p2">
				<span>￥${elem["partner_price"]}</span>
				<s>￥${elem["market_price"]}</s>
				</p>
				<span class="sp2 selected"></span>
				</div>
			</li>
		`)
		$(".ul_main").append(li);
	});
}
//点击添加购物车事件绑定函数
 	var data = JSON.parse(localStorage.getItem("data"));
	var index;
	function add(){
		if(data == null)
		{
		data = [];
		}
		index = data.length;
		if(index != 0){
			$(".ooo").css("display","block")	
			$(".ooo").html(index);
		}	
	$(".selected").on("touchstart",function(){
//		console.log($(this).siblings())
//		console.log($(this).siblings()[3].childNodes[1].innerHTML)
		var src = $(this).siblings().parent().prev()[0].src;
		var name = $(this).siblings()[0].innerHTML;
		var price = $(this).siblings()[3].childNodes[1].innerHTML
		console.log(name)
		console.log(src)
		console.log(price)
		data.push({
			"img":src,
			"name":name,
			"price":price
		});
		console.log(data)
	localStorage.setItem("data",JSON.stringify(data));
			index++;
		$(".ooo").html(index);
		$(".ooo").css("display","block")	
		console.log(index)
	});
}
		$(".container").html(html);
		}
	}
});