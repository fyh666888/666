<template lang="html">
    <div class="cart">
	        <!-- 头部 -->
		<div id="header_c">
			<span class="gouwuche">购物车</span>
		</div>
			<!--主体-->
		<div id="main_c">
			<div class="center">
				<div class="img"><img src="/static/images/center.png"/></div>
				<div class="qin">亲，购物车空空的耶~</div>
				<div class="guang"><a href="#home">去逛逛</a></div>
			</div>
		</div>
		<div id="main1">
			<div class="address">
				<ul>
					<li><span class="s1">收<div class="ss">a</div>货<div class="ss">a</div>人</span> <span class="s2">fyh&nbsp;先生</span></li>
					<li> <span class="s1">电<div class="ss1">中</div>话</span>
					<span class="s2">13222222222</span><span class="s4">修改</span>
					<span class="s5"></span></li>
					<li><span class="s1">收货地址</span><span class="s2">北京市中南海011号</span></li>
				</ul>
			</div>
			<ul class="shouhuo">
				<li>
					<section class="p1"><div class="left">闪送超市</div><div class="right"><span>凑单专区</span></div></section>
					<section class="p2">￥0起送，22:00前满￥30免运费，22:00后满￥69免运费</section>
				</li>
				<li>
					<section>
						<div class="left">
						<span>收货时间</span>
						<span>一小时送达</span>
						</div>
						<div class="right">
						<span>可预订</span>
						<span></span>
						</div>
					</section>
				</li>
				<li>
					<section>
						<span class="left">收获备注</span><input type="text" placeholder="可输入100字内特殊要求的字符" />
					</section>
				</li>
			</ul>
			<ul class="container"></ul>
			<div class="all">
				<span class="allselected all"></span><div class="left">全选</div>
				<div class="mid">共:<span style="display: inline-block;">￥</span><span class="num"></span>
				</div>
					<div class="right">选好了</div>
			</div>
		</div>
    </div>
</template>

<script>
import "../../static/css/cart.css"
export default {
}
</script>

<style lang="css">
</style>
