// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// ES6引入模板语法
import Vue from 'vue'
import VueRouter from 'vue-router' // 1.引入路由文件
import VueResource from 'vue-resource'
import App from './App'
import Home from './pages/home'
import Sscs from './pages/sscs'
import One from './pages/sscs/one'
import Two from './pages/sscs/two'
import Three from './pages/sscs/three'
import Cart from './pages/cart'
import Mine from './pages/mine'
// 2.安装插件
Vue.use(VueRouter)
Vue.use(VueResource)

// 4.创建路由
const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/sscs', component: Sscs, children: [
        { path: '', component: One },
        { path: 'one', component: One },
        { path: 'two', component: Two },
        { path: 'three', component: Three },
    ] },
    { path: '/cart', component: Cart },
    { path: '/mine', component: Mine }
]

// 5.创建VueRouter实例
const router = new VueRouter({
    routes // routes: routes
});


// 创建Vue实例
new Vue({
  el: '#app', // 绑定元素
  template: '<App/>', // 使用组件替换内容
  components: { App }, // 局部组件,
  router // router: router // 6.将VueRouter挂在到Vue实例上
})
