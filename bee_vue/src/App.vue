<template>
    <div id="app">

        <!-- 3.编写页面 -->
        <!-- 路由出口 -->
        <router-view></router-view>

        <!-- 使用router-link进行导航 to锚点-->
         <!--尾部-->
        <div id="footer">
             <ul class="foot">
            <li class="foot_f1"><router-link to="/home"><span class="left"> <div class="icon"></div></span><span class="right">首页</span></router-link></li>
            <li class="foot_f2"><router-link to="/sscs"><span class="left"> <div class="icon"></div></span><span class="right">闪送超市</span></router-link></li>
            <li class="foot_f3"><router-link to="/cart"><span class="left"> <div class="icon"></div><span class="ooo"></span></span><span class="right">购物车</span></router-link></li>
            <li class="foot_f4"><router-link to="/mine"><span class="left"> <div class="icon"></div></span><span class="right">我的</span></router-link></li>
          </ul>
        </div>

    </div>
</template>

<script>
var winW = document.documentElement.clientWidth || document.body.clientWidth;
  document.documentElement.style.fontSize = winW / 16 + "px";
  window.onresize = function(){
  var winW = document.documentElement.clientWidth || document.body.clientWidth;
  document.documentElement.style.fontSize = winW / 16 + "px";
  }
export default {
 
  components: {

  }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
a{
    text-decoration: none;
}
ul li{
    list-style: none;
}
span{
    display: block;
}
#footer{
  width: 100%;
  height: 2.5rem;
  background: #f1d9df;
  position: fixed;
  bottom: 0;
  }
  .foot{
    width: 100%;
    height: 100%;
    display: flex;
    align-content: center;
  }
  #footer li{
    flex-grow: 1;
  }
  #footer li .icon{
    width: 1.1rem;
    height: 1.2rem;
  }
  #footer .foot_f1 .left .icon{
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFHUExURUxpcf/UAP/WAP/VAP/WAP/WAP/WAP/UAP/WAP/VAP/UAP/VAP/WAP/XAP/VAP/VAP/VAP/VAP/WAP/WAP/aAP/WAP/XAP/VAP/WAP/WAP+/AP/WAP/VAP/VAP/SAP/MAP/WAP/fAP/WAP/WAP/VAP/WAP/WAP/VAP/UAP/VAP//AP/TAP/dAP/WAP/XAP/VAP/VAP/YAP/WAP/VAP/VAP/VAP/WAP/WAP/VAP/VAP/VAP/UAP/UAP/UAP/VAP/XAP/VAP/WAP/WAP/VAP/WAP/WAP/XAP/VAP/WAP/VAP/VAP/VAP/UAP/WAP/WAP/XAP/VAP/WAP/XAP/WAP/UAP/XAP/VAP/ZAP/WAP/WAP/WAP/WAP/VAP/WAP/UAP/VAP/WAP/WAP/YAP/WAP/VAP/WAP/WAP/VAP/VAP/VAP/aAP/VAP/WAEyhgyoAAABsdFJOUwBhbPx4a/sSwoAG/kwte/1o2V/DFdYnMeJYBPTy0hcFvAjUUqfu4ENndAMvD+g0uuQhisDsaWpG5VZcTh5t0XPm7+1uf7ZBjBPxPUkqnPogiPkNcls6gRujeaRkmZck3dxeFJ2PfamNuHoOvrrt0pEAAAFVSURBVEjH7dXVcoNAFIDhBFqShhAIcbe6u7epu7u797z/dTskGxaCHGY67U3/y7PzzTCw7LpcP5VPevt8/3BEXuG7F58D8QxK23jDiBUCg1gh80AK4MRUqiZAlDBiLA1U7KS96O0BTSm/nRBuQdd8m7WYjkBdczErkQ2BQcEtc9HdB4ZlTk03VjOYNPRgLJKPYNrygSFZBYvOOg3EElh2lawTM6w1gT29uN8Bu3Rb1J+2FcCN0mKlBRDtH6ki1g+o1jeJiN4BsoWNihjIALp4l0JOwEEXCjmexYtI9YdbE65x4EkI115ZAEfK1HdpwpGGvyWc6Jzwzh+MZ7lqLI8kQUZ2K8lMEEnyOTLP5ZHE6yFzj/ef/DY5d046KDKCIwmK7A5jSDxLn7CH9FJIJZq70609xxfH1aVi7RwJF9Vp66X+togmJKZRiSkVyLBQIrP2iRsy/ALyxS1budp1wgAAAABJRU5ErkJggg==') no-repeat;
    background-size: 100%;
  }
  #footer .foot_f2 .left .icon{
    background: url('data:image/png;base64,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') no-repeat;
    background-size: 100%;
  }
  #footer .foot_f3 .left .icon{
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAGnUExURUxpcX9/f5iYmJmZmZqampiYmJeXl5qampiYmJmZmZmZmZiYmKqqqpmZmZmZmZmZmZ+fn5mZmZmZmaqqqpmZmZmZmZmZmZmZmf///5mZmZeXl5mZmZiYmJmZmZmZmY2NjZqampeXl5GRkZiYmJmZmZiYmJmZmZmZmX9/f5iYmJiYmJqampiYmJmZmZiYmJmZmZiYmJmZmZiYmJiYmJmZmZiYmJubm5iYmJeXl5iYmJiYmJmZmZiYmJmZmZmZmZmZmZmZmZmZmZmZmZiYmJmZmZiYmJqampmZmZiYmJmZmZiYmJubm5mZmZmZmZmZmZmZmZmZmZiYmJmZmZSUlJmZmZiYmJmZmZaWlpmZmaKiopiYmJmZmZiYmJOTk5mZmZiYmJmZmZmZmZiYmJqampmZmZiYmJqampmZmZmZmZmZmZmZmZiYmJmZmZaWlpmZmZmZmZiYmJqampmZmZmZmZGRkZiYmJmZmZmZmZmZmZmZmZqampiYmJubm5mZmZiYmJaWlpiYmJmZmZiYmJiYmJaWlpmZmZmZmZiYmJWVlZiYmJiYmJiYmJmZmdtXqzcAAACMdFJOUwAEwKgwkCBg4NCgmgP68K8QsIcG+JHG6wGAQHZw/R4JUV4Hes33ijcCuHIh1l/009Tk/O3B+SRhG+jMvL26kjUPhcux19s9LX9aPhLcpfayGe9VGHiO6RGDC4bzORPYmHE8XBxG/kzfc04oV4gn1SOLR0ndDm2ZrUHhZTQp5qwsaGnC6iK/nq4dieWnwlaKVAAAAepJREFUSMfFlWdXE0EYhcNSEkpCQnpCEJAi0ntV7AoWbGDvBaUoKMVesID6/GhZwjnbZmfY4wfvt3vnPHPmnfKOz+ddfyD3ezQ75AHJsaP+7N6R6jFtZFiHar2tbqgJ4h4rugOFHpGCHB2lajVURQ2ml72p3EAS8DagVD8xAymHEvX6u7hlmGfwRkmsPEEz3HN4p0QeQ5Ph5mBJiVyHy4aL9lCpRDS4YrKv6VQR9THumn0LjQcUyAO4Z/ZxaFUg++Gh2a/CKwXSAo/Mfhmq5URFB7OWoBXW5Mh7KLPOETSfrEgHYdCavGBYjkRgwJpUQlhGpHrptkVV0CxDPjsfrh/aZchX+GKLbsNNGVIIH2zRNeQX8yPJlD2boU1CDMAnR9hHsMAdGRTdju3nn/W7ahSKRKcrVcj5OJ4qEEE7fQl97gvzz98QNNkgG15/pza+eUVUF1OgBUgGukoTmvYjEolslm3rZ3Fev9Lp9NWLTqTO+5btKx7rDHSHQj0uyLT0hwqHt0p0fS/aVSaTaa7w/TcdOXzyxNF6R9w+ElhfdCnhmF7lcXt8X08viT+52vzOjNsmCu2kcbc+ravOmtbk00NCZCI/eMqaRhvt37f5LM/pY4mUs8NB7LS4/pqp4IXzZx0t/0yShsl/OYm/p7baFInuYH0AAAAASUVORK5CYII=') no-repeat;
    background-size: 100%;
  
  }
  #footer .foot_f4 .left .icon{
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAI9UExURUxpcZiYmJiYmKKiopmZmZmZmZqampiYmJiYmJiYmJiYmJmZmZaWlpmZmX9/f5mZmZiYmKqqqpqampmZmf///5mZmZmZmZmZmZiYmJmZmZiYmJ+fn6qqqpmZmZmZmZeXl5mZmZmZmZeXl5SUlJmZmZqampaWlpqampmZmZaWlpaWlpmZmZiYmJiYmJmZmZmZmZqampmZmZmZmZmZmZiYmJiYmI2NjZmZmZmZmZubm5iYmJmZmZiYmJiYmJiYmJmZmZmZmZmZmZqampiYmJeXl5mZmZiYmJeXl5mZmZmZmZiYmJmZmZubm5iYmJmZmZmZmZiYmJmZmZmZmZmZmZiYmJmZmZiYmJubm5iYmJmZmZmZmZmZmZiYmJiYmJmZmZqampGRkZmZmZiYmJmZmZmZmZmZmZmZmZeXl5mZmZmZmZmZmX9/f5mZmZiYmJmZmZmZmZeXl5qampmZmZmZmZiYmJmZmZiYmJSUlJmZmZmZmZycnJmZmZiYmJiYmJmZmZmZmZubm5mZmZeXl5mZmZmZmZmZmZiYmJiYmJqampiYmJmZmZeXl5mZmZmZmZeXl5qampiYmJmZmZ+fn5iYmJmZmZiYmJmZmZiYmJmZmZiYmJmZmZmZmZiYmJmZmZmZmZiYmJmZmZubm5mZmZmZmZmZmZiYmJeXl5mZmZeXl5iYmJmZmZqampmZmZiYmJiYmJmZmZeXl5aWlpubm5iYmJmZmZmZmZiYmJiYmJiYmJiYmJiYmJmZmZiYmJmZmZmZmaI0cXQAAAC+dFJOUwD+cgv6/WWi1PlhgiLsAvj8AyuoAfXfN4uIjhAG9vFZQeRPDF8hLEzrETHptk211VZiSy3ocAmAyy7qRMe4NBnnuUc5L9rPO5aX2Z4zlbC3Ptiqb8BO9CSuj82j76RxYA6DysnD4sRFbHMoBDVIyHYlW5JG92nlGAqgGh6JkNJTEvtAhzx+3u1RhtwgXeFKJuObCLvuvQVSFLGmMp/B0J3GKQ+Z3cI2pV7yjUJ7xXpVKhYXQ9NnaFyTrFfm1q+xkSTMAAAChklEQVRIx62W5XMaURTFIewCiwQoBAgSkpIQCAGSNNZYG228scZTd3dvU3d3d3f3nr+ty2x3sLXp9H56e3Z/c5/ce/bJZP8nCjQj3wuHv322SQXyw+NgImPAky4ByOuLfjweGf3kjw4uThElGh8BRPdb34fA+3ehp24gOFWEeJIDPO6JLaoQcJ8RJGY0Aw+9cYLrIDBTaG6Wu0CHJVGzA7MF9uAQhTsPkjTXZeAqP7IDROpi6wjUX+EjnHrUlKfK13FpOh/SAGg55FzgFB+yAvISDtmWgUw+xA5iGod89hw6+JARUCs5ZJ0VY3yIFmQjh+zzo5UP0QAaDnmTHOv4EB8JFYdcAfkaPmTVKHJ0Kar3BJq38Z5+Pzi2Mw3YI1DI7TBUJ2mdQRzNEyjlDcDWugRlSA2kCTbMRro9JuOeX/YCZpMgsl0FkBOrmQax3G/NoLslINLJluMUsH9tZnHRPO0APUSXQtxiDtRmgQ3qdYMkH8vuNrJI+yubeJJdhyspxAXZ8kLYydY7opPavMhsn6tUlu2+cW+QfjTcauIFTGW0ixE1Wwrms4qiSXmbTqqvKOcmdLTPYTg7WZ5lppe2lKv3ZD1HgL0hrjfLFgJV+al6dRXQ5uTOr3DQfwFPSno9jAK1pDTAnWRxJ60waoT2ssiA0gQ3M9VCLlyvMqUclfHHuhw4L3bIjgRj1C1B7z4xxNsCfawQFgAe8dorIdDFjgOlWOwSR9LDyNoZ8+liKSV+LNbTffA7pSAXrKhnmvqaGmZpN4I2nGbMpvM5+qUhz0AyVTsH+CgNsVHIZZGvEq8qxF+fHwri54RKQoxZMXiTgb+QkBpv2ISh3+qIWjQiv8I//vG29geOtflZCGRFrAAAAABJRU5ErkJggg==') no-repeat;
    background-size: 100%;
  }
  #footer li span{
    display: flex;
    height: 1.25rem;
    justify-content: center;
    font-size: 0.6rem;
    align-items: center;
    color: #a6a6a6;
  }
  #div1,#div2{
    width: 100%;
    height: 100%;
  }
  #div2{
    display: none;
  }
  .swiper-container{
      width: 16rem;
      height: 6rem;
    }
  .swiper-container img{
      width: 100%;
    }
  #footer .foot_f4 .ooo{
      width: 0.8rem;
      height: 0.8rem;
      line-height: 0.8rem;
      background: red;
      border-radius: 50%;
      position: absolute;
      top: 5px;
      left: 219px;
      color: #FFFF00;
      text-align: center;
      display: none;
  }
</style>
