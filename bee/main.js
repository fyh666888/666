require.config({
    baseUrl: './libs/js',
    paths: {
        'underscore': 'underscore',
        'backbone': 'backbone',
        'css': 'css',
        'text': 'text',
        'jquery': 'jquery',
        'zepto':'zepto/zepto',
        'baiduTemplate':'baiduTemplate',
        'swiper':'swiper',
        'home':"../../home/js/home",
        'sscs': '../../sscs/js/sscs',
        'shoppingCart': '../../shoppingCart/js/shoppingCart',
        'mine': '../../mine/js/mine',
        'wx':'http://res.wx.qq.com/open/js/jweixin-1.0.0'
        
    }
});
require(['home','/router.js'], function (home,router) {
		home.show();
		router.start();
		

});
