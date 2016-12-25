define(['backbone'], function (Backbone) {
    return {
        start: function () {
            var Router = Backbone.Router.extend({
                routes: { // key是锚点的值，value是函数的值
                    'home': 'homeFunc',
                    'sscs': 'sscsFunc',
                    'shoppingCart': 'shoppingCartFunc',
                    'mine': 'mineFunc'
                },
                homeFunc () {
                    require(['home'], function (Home) {
                        Home.show();
                    });
                },
                sscsFunc () {

                    require(['sscs'], function (Sscs) {
                        Sscs.show();
                    });

                },
                shoppingCartFunc () {
                    require(['shoppingCart'], function (ShoppingCart) {
                        ShoppingCart.show();
                    });
                },
                mineFunc () {
                    require(['mine'], function (Mine) {
                        Mine.show();
                    });
                }
            });
             new Router();
            Backbone.history.start();
        }
    }
});
