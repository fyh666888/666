<template>
    <div class="home">
        <!-- 头部 -->
      <div id="header_h">
        <div class="sys">
            <span class="up"></span><span class="down">扫一扫</span>
          </div>
          <!-- 地址定位 -->
          <div class="address">
            <span> <p>北京中南海</p></span>
            <div class="down"></div>
            <div class="up"></div>
          </div>
          <!-- 搜索 -->
          <div class="sous">
            <span class="up"></span><span class="down">搜索 </span>
          </div>
      </div>
      <!-- 主体 -->
      <div id="main_h">
        <section class="swiper-container">
          <ul class="swiper-wrapper">
            <li class="swiper-slide" v-for="item in dataLb">
              <img :src="item.activity.img">
            </li>
          </ul>
             <div class="swiper-pagination"></div>
        </section>
        <!--菜单栏-->
        <section class="se2">
          <ul class="menu">
            <li class="menu_l" v-for="item in dataBaner">
              <span class="memu_l_s1"><img :src="item.activity.img"/></span>
              <span class="memu_l_s2"><p>{{item.activity.name}}</p></span>
            </li>
          </ul>
        </section>
        <!--鲜蜂头条-->
        <section class="se3">
        <ul class="toutiao">
            <li class="menu_l" v-for="item in dataIcon">
               <span class="memu_l_s1"><img :src="item.activity.img"/></span>
             </li>
        </ul>
        </section>
        <!--特价-->
        <section class="se4">
          <ul class="tejia" >
            <li v-for="item in dataTttejia">
               <span class="tejia_sp"><img :src="item.activity.img"/></span>
            </li>
          </ul>
        </section>
        <!--优选水果-->
        <section class="se5" v-for="item in dataAll">
          <div class="title">
            <div class="left">
              <span class="left_s2">{{item["category_detail"]["name"]}}</span>
            </div>
            <div class="right">
              <span class="right_s1">更多</span>
              <span class="right_s2"><span>
            </div>
          </div>
          <div class="title_img">
            <img :src="item.activity.img"/>
          </div>
          <ul>
            <li v-for="item1 in item.category_detail.goods">
              <img class="ul_img" :src="item1.img"/>
              <p class="ul_p1">{{item1.name}}</p>
              <div class="ul_div">
                <span class="ul_div_sleft">精选</span>
                <span class="ul_div_sright">{{item1.pm_desc}}</span>
              </div>
              <p class="ul_p2">{{item1.specifics}}</p>
              <p class="ul_p3"><span>￥{{item1.partner_price}}</span><s>￥{{item1.market_price}}</s></p>  
              <span class="span selected"></span>
            </li>
          </ul>
        </section>
        </div>
    </div>
</template>

<script>
import "../../static/css/swiper-3.4.0.min.css"
import "../../static/css/home.css"
import Swiper from "../../static/js/swiper.js"
export default {
    data: function () {
        return {
            dataLb: [],
            dataBaner:[],
            dataIcon:[],
            dataTttejia:[],
            dataAll:[],
        }
    },
    methods: {
        test () {
            alert('test');
        },
    },
    updated() {
            this.$nextTick(()=>{
                let mySwiper = new Swiper ('.swiper-container', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    centeredSlides: true,
                    autoplay: 2500,
                    autoplayDisableOnInteraction: false,
                    loop: true
                  })   
            })
    },
    props: ['name'],
    components: {

    },
    mounted() {
        this.$http.get('http://localhost:8080/static/data/homeData.json').then(function (res) {
            this.dataLb = res.body.data.act_info[0]["act_rows"];
            this.dataBaner = res.body.data.act_info[1]["act_rows"];
            this.dataIcon = res.body.data.act_info[3]["act_rows"];
            this.dataTttejia = res.body.data.act_info[4]["act_rows"];
            this.dataAll = res.body.data.act_info[5]["act_rows"];
        });
    }
}
</script>
<style>

</style>
