define(['text!/home/home.html',"wx","swiper",'baiduTemplate','jquery'],function(html,wx){
	return{
		show:function(){
//			$.noConflict();
//			console.log(jQuery)
//			console.log(Zepto)
//			console.log(swiper)
//发送请求获取数据
var url = "http://localhost:8888/data/homeData.json";
jQuery.get(url,function(data){
	handleIb(data["data"]["act_info"][0]["act_rows"]);
	handleMu(data["data"]["act_info"][1]["act_rows"]);
	handleTl(data["data"]["act_info"][3]["act_rows"]);
	handleTjia(data["data"]["act_info"][4]["act_rows"]);
	handleAll(data["data"]["act_info"][5]["act_rows"][0],jQuery(".se5:eq(0)"))
	handleAll(data["data"]["act_info"][5]["act_rows"][1],jQuery(".se5:eq(1)"))
	handleAll(data["data"]["act_info"][5]["act_rows"][2],jQuery(".se5:eq(2)"))
	handleAll(data["data"]["act_info"][5]["act_rows"][3],jQuery(".se5:eq(3)"))
	handleAll(data["data"]["act_info"][5]["act_rows"][4],jQuery(".se5:eq(4)"))
	handleAll(data["data"]["act_info"][5]["act_rows"][5],jQuery(".se5:eq(5)"))
	lunbo();
	bind();
	huodong();
	add();
})
//轮播图数据处理函数
function handleIb(data){
	$.each(data,function(index,elem){
		var li = $(`
			<li class="swiper-slide">
			<img src="${elem["activity"]["img"]}">
			</li>
		`);
		li
		$(".swiper-wrapper").append(li);
	});
	var div = $('<div class="swiper-pagination"></div>');
		$(".swiper-container").append(div);
}
	
//主要菜单数据处理函数
function handleMu(data){
	$.each(data,function(index,elem){
		var li = $(`
			<li class="menu_l">
			<span class="memu_l_s1"><img src="${elem["activity"]["img"]}"/></span>
			<span class="memu_l_s2"><p>${elem["activity"]["name"]}</p></span>
			</li>
			`);
			$(".menu").append(li);
	});
}
//先锋头条数据处理函数
function handleTl(data){
	$.each(data, function(index,elem) {
	var li = $(`
		<li>
			<span class="toutiao_sp"><img src="${elem["activity"]["img"]}"/></span>
		</li>
	`);
	$(".toutiao").append(li);
	});
}
//天天特价处理函数
function handleTjia(data){
	$.each(data, function(index,elem) {
	var li = $(`
		<li>
			<span class="tejia_sp"><img src="${elem["activity"]["img"]}"/></span>
		</li>
	`);
	$(".tejia").append(li);
	});
}
//优选水果,牛奶面包,卤味熟食..处理函数
function handleAll(data,node){
	var div = $(`
		<div class="title">
			<div class="left">
				<span class="left_s2">${data["category_detail"]["name"]}</span>
			</div>
			<div class="right">
				<span class="right_s1">更多</span>
				<span class="right_s2"><span>
			</div>
		</div>
	`);
	node.append(div);
	var div = $(`
			<div class="title_img">
				<img src="${data["activity"]["img"]}"/>
			</div>
	`);
	node.append(div);

	var se5_ul = $("<ul></ul>");
	node.append(se5_ul);
	$.each(data["category_detail"]["goods"],function(index,elem){
		var li = $(`
			<li>
				<img class="ul_img" src="${elem["img"]}"/>
				<p class="ul_p1" >${elem["name"]}</p>
				<div class="ul_div">
					<span class="ul_div_sleft">精选</span>
					<span class="ul_div_sright">${elem["pm_desc"]}</span>
				</div>
				<p class="ul_p2">${elem["specifics"]}</p>
				<p class="ul_p3"><span>￥${elem["partner_price"]}</span><s>￥${elem["market_price"]}</s></p>	
				<span class="span selected"></span>
			</li>
		`);
	se5_ul.append(li);
	});
}
//疯狂秒杀事件绑定函数
function bind(){
	$(".memu_l_s1:eq(1)").on("touchstart",function(){
		$("#div1").css("display","none");
		$("#div2").css("display","block");
	var url = "http://localhost:8888/data/miaosha.json";
		$.get(url,function(data){
	handleData(data);
});
//数据加载函数
function handleData(data){
	//生成html
	console.log(data['product'])
	var html = baidu.template("data",data);
	var contianer = document.getElementById("cn");
	contianer.innerHTML = html;
}
	});
	$("#header1 .left").on("touchstart",function(){
		$("#div1").css("display","block");
		$("#div2").css("display","none");
		lunbo()
	});
}
//轮播图函数
function lunbo(){
	 var mySwiper = new Swiper ('.swiper-container', {
    pagination: '.swiper-pagination',
	        paginationClickable: true,
	        centeredSlides: true,
	        autoplay: 2500,
	        autoplayDisableOnInteraction: false,
	        loop: true
   })
}
//判断是否有"买一赠一"活动,没有则隐藏
function huodong(){
$(".ul_div_sright:empty").hide();
}
//选择商品函数
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
		var src = $(this).siblings()[0].src;
		var name = $(this).siblings()[1].innerHTML;
		var price = $(this).siblings()[4].firstChild.innerHTML;
		data.push({
			"img":src,
			"name":name,
			"price":price
		});
	localStorage.setItem("data",JSON.stringify(data));
		index++;
		$(".ooo").html(index);
		$(".ooo").css("display","block")	
		console.log(index)
	});
}

  $('.container').html(html);
  console.log(wx)
		}
	}
});