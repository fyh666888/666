<template>
    <div class="mine">   
		<div id="header_m">
			<!--头部上边-->
			<div class="header_top">
				<!--用户头像-->
				<div class="user"></div>
				<!--用户名称及图标-->
				<div class="user_info">
					<span class="user_name">13222222222</span>
					<span class="icon">会员注册</span>
				</div>
				<!--返回-->
				<div class="next"></div>
			</div>
			<!--头部下边-->
			<div class="header_shoucang">
				<div class="left">
					<span>商品收藏</span>
				</div>
				<div class="right">
					<span>店铺收藏</span>
				</div>
			</div>
		</div>
    <div id ="main_m">
			<!--我的订单-->
			<div class="mydd">
				<div class="mydd_left">我的订单</div>
				<div class="mydd_right">
					<span class="chakan">查看全部订单</span><span class="icon"></span>
				</div>
			</div>
			<!--付款、收货、评价-->
			<div class="fukuan">
				<section class="fukuan_"><span class="top"><img src="/static/images/11.png" alt="" /></span><span class="botton">代付款</span></section>
				<section class="fukuan_"><span class="top"><img src="/static/images/12.png" alt="" /></span><span class="botton">代收货</span></section>
				<section class="fukuan_"><span class="top"><img src="/static/images/13.png" alt="" /></span><span class="botton">待评价</span></section>
				<section class="fukuan_"><span class="top"><img src="/static/images/14.png" alt="" /></span><span class="botton">退款/售后</span></section>
			</div>
			<!--积分、优惠劵-->
			<div class="jifen">
				<section class="s1"><span class="top"><img src="/static/images/1.png" alt="" /></span><span class="bottom">积分商城</span></section>
				<section class="s1"><span class="top"><img src="/static/images/2.png" alt="" /></span><span class="bottom">优惠劵</span></section>
				<section class="s1"><span class="top"><img src="/static/images/3.png" alt="" /></span><span class="bottom">收货地址</span></section>
				<section class="s1"><span class="top"><img src="/static/images/4.png" alt="" /></span><span class="bottom">客服反馈</span></section>
			</div>
				<section class="ss"><span class="top"><img src="/static/images/5.png" alt="" /></span><span class="bottom">关于我们</span></section>
			<!--退出-->
			<div class="load">
				<span>退出当前账户</span>
			</div>
		</div>
    </div>
</template>

<script>
import "../../static/css/mine.css"
export default {
    
}
</script>

<style lang="css">
</style>
