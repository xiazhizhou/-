<template>
  <div class="mall">
    <div class="mall_search_box main_color_bg">
      <div class="user_area">北京
        <i class="icon-down iconfont"></i>
      </div>
      <div class="search_box ">
        <form action="">
          <input type="search" class="">
        </form>
        <i class="icon-search iconfont"></i>
      </div>
    </div>
    <div class="mall_box">
      <van-swipe :autoplay="5000" :duration="2000">
        <van-swipe-item v-for="(slide,index) in swiperSlides" :key="index"><img :src="slide.img"/></van-swipe-item>
      </van-swipe>

      <ul class="mall_classify">
        <li v-for="n in 10" @click="pushPath('/productList/'+JSON.stringify({'id':'084bdc5d5bdf47b0a258ab2587cafe2f','level':1}))">
          <i></i>
          <div>数码产品</div>
        </li>
      </ul>

      <div>
        <van-notice-bar text="享易家让您开心每一天"/>
      </div>

      <div class="mall_product1">
        <img src="http://7xroyt.com1.z0.glb.clouddn.com/base/SysNews/44a6928f3b3b4235ab8910dbcd184e91.png" alt="">
        <ul>
          <li>
            <label class="text_hide">MICHAEL KORS 迈克高仕</label>
            <span class="text_hide">牛皮手提单肩包</span>
            <i></i>
          </li>
          <li>
            <div>
              <label class="text_hide">MICHAEL KORS 迈克高仕</label>
              <span class="text_hide">牛皮手提单肩包</span>
              <div>
                <span class="text_hide">全场税费满减补贴</span>
                <i></i>
              </div>
            </div>
            <div>
              <label class="text_hide">MICHAEL KORS 迈克高仕</label>
              <span class="text_hide">牛皮手提单肩包</span>
              <div>
                <span class="text_hide">全场税费满减补贴</span>
                <i></i>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <ul class="mall_product2">
        <li><img src="http://7xroyt.com1.z0.glb.clouddn.com/base/SysNews/35022a26efdd47098f0e35d83a57b11c.png" alt=""></li>
        <li>
          <div>
            <span class="text_hide">源自法国</span>
            <span class="text_hide">LANCOME 兰蔻</span>
            <span class="text_hide">今日包邮</span>
          </div>
          <i></i>
        </li>
        <li>
          <div>
            <span class="text_hide">源自法国</span>
            <span class="text_hide">LANCOME 兰蔻</span>
            <span class="text_hide">今日包邮</span>
          </div>
          <i></i>
        </li>
        <li>
          <i></i>
          <label class="text_hide">日本|SK-II</label>
          <span class="text_hide">今日特价：1499</span>
        </li>
        <li>
          <i></i>
          <label class="text_hide">日本|SK-II</label>
          <span class="text_hide">今日特价：1499</span>
        </li>
        <li>
          <i></i>
          <label class="text_hide">日本|SK-II</label>
          <span class="text_hide">今日特价：1499</span>
        </li>
      </ul>

      <div class="recommend_product">
        <p>人气推荐 》</p>
        <ul>
          <li v-for="n in 10">
            <i></i>
            <div>
              <label class="text_hide">纯棉被洗色织格薄被</label>
              <span class="text_hide">100%棉填充，透气排汗，清爽舒适，物超所值</span>
              <em class="auxiliary_color text_hide">￥169</em>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      swiperSlides:[
        { img: "http://7xroyt.com1.z0.glb.clouddn.com/base/SysNews/44a6928f3b3b4235ab8910dbcd184e91.png", id: "" },
        { img: "http://7xroyt.com1.z0.glb.clouddn.com/base/SysNews/35022a26efdd47098f0e35d83a57b11c.png", id: "" },
        { img: "http://7xroyt.com1.z0.glb.clouddn.com/base/SysNews/f5b7dd7ed71b4157a5d2871c2e863dbf.png", id: "" },
      ]
    }
  },
  mounted(){
    this.$store.commit("updateNeedShowFooter", true);
    this.$store.commit("updateSelected", 0);
  }
}
</script>

<style lang="less" scoped>
.mall{
  bottom:50px!important;
  position: absolute;
  width: 100%;
  top: 0;
  .van-notice-bar{
    background-color: #fff;
    color:#333;
  }
}
.mall_search_box{
  height: 44px;
  display: flex;
  align-items: center;
  text-align: center;
  position: fixed;
  width: 100%;
  z-index: 1000;
}
.user_area{
  max-width: 60px;
  flex: 1;
  i{
    font-size: 12px;
  }
}
.search_box{
  flex: 1;
  color: #666;
  margin-right: 20px;
  padding: 5px 2%;
  display: flex;
  border-radius: 5px;
  background-color: #f5e7a8;
  form{
    width: 90%;
    input{
      width: 100%;
      border: none;
      height: 20px;
      line-height: 20px;
      background-color: #f5e7a8;
      color: #666;
    }
  }
  i{
    width: 10%;
    font-size: 20px;
    color: #666;
    height: 20px;
    line-height: 20px;
  }
}
.mall_box{
  overflow-y: auto;
  position: absolute;
  width: 100%;
  top: 44px;  
  bottom: 0;
}
.mall_classify{
  margin-top: 10px;
  background-color:#fff;
  overflow: hidden;
  padding-bottom: 10px;
  border-bottom: 1px #eee solid;
  li{
    width: 20%;
    text-align: center;
    float: left;
    margin-top: 15px;
    i{
      width: 12vw;
      height: 12vw;
      background-color: #eee;
      display: block;
      margin: auto;
      border-radius: 50%;
    }
    div{
      line-height: 25px;
      font-size: 12px;
    }
  }
}
.mall_product1{
  background: #fff;
  ul{
    display: flex;
    li:nth-child(1) {
      width: 50%;
      label{
        display: block;
        text-align: center;
        line-height: 25px;
      }
      span{
        display: block;
        text-align: center;
        font-size: 12px;
        line-height: 25px;  
        color: #666;      
      }
      i{
        display: block;
        width: 50vw;
        height: 50vw;
        background-color: #eee
      }
    }
    li:nth-child(2) {
      width: 50%;
      div{
        height: 50%;
        label{
          display: block;
          text-align: center;
          line-height: 25px;
        }
        span{
          display: block;
          font-size: 12px;
          padding: 0 5px;
          color: #666;      
        }
        div{
          display: flex;
          align-items: flex-end;
          span{
            width: 50%;
          }
          i{
            width: 50%;
            height: 100%;
            background: #eee
          }
        }
      }
    }
  }
}
.mall_product2{
  background: #fff;
  margin-top: 10px;
  overflow: hidden;
  li:nth-child(1){
    width: 100%;
  }
  li:nth-child(2){
    float: left;
    width: 50%;
    padding: 5%;
    display: flex;
    box-sizing: border-box;
    div{
      width: 60%;
      line-height: 10vw;
      color: #666;
      font-size: 12px;
      span{
        display: block;
      }
      span:nth-child(1){
        color: #333;
      }
    }
    i{
      width: 40%;
      height: 30vw;
      background: #eee
    }
  }
  li:nth-child(3){
    float: left;
    width: 50%;
    padding: 5%;
    display: flex;
    box-sizing: border-box; 
    div{
      width: 60%;
      line-height: 10vw;
      color: #666;
      font-size: 12px;
      span{
        display: block;
      }
      span:nth-child(1){
        color: #333;
      }
    }
    i{
      width: 40%;
      height: 30vw;
      background: #eee
    }
  }
  li:nth-child(4){
    border-top:1px #eee solid;
    float: left;
    width: 33.33%;
    i{
      width: 33.33vw;
      height: 33.33vw;
      display: block;
      background-color: #eee;
    }
    label{
      display: block;
      text-align: center;
      font-size: 14px;
      color: #333;
      line-height: 25px;
    }
    span{
      display: block;
      text-align: center;
      font-size: 12px;
      line-height: 25px;
      color: #666;
    }
  }
  li:nth-child(5){
    border-top:1px #eee solid;
    float: left;
    width: 33.33%;
    i{
      width: 33.33vw;
      height: 33.33vw;
      display: block;
      background-color: #eee;
    }
    label{
      display: block;
      text-align: center;
      font-size: 14px;
      line-height: 25px;
      color: #333;
    }
    span{
      display: block;
      text-align: center;
      font-size: 12px;
      line-height: 25px;
      color: #666;
    }
  }
  li:nth-child(6){
    border-top:1px #eee solid;
    float: left;
    width: 33.33%;
    i{
      width: 33.33vw;
      height: 33.33vw;
      display: block;
      background-color: #eee;
    }
    label{
      display: block;
      text-align: center;
      font-size: 14px;
      line-height: 25px;
      color: #333;
    }
    span{
      display: block;
      text-align: center;
      font-size: 12px;
      line-height: 25px;
      color: #666;
    }
  }
}
.recommend_product{
  padding: 15px 5%;
  margin-top: 10px;
  background-color: #fff;
  p{
    text-align: center;
    margin: 0 0 15px;
  }
  ul{
    overflow: hidden;
    li{
      float: left;
      width: 44vw;
      margin: 0 2vw 5px 0;
      i{
        display: block;
        width: 44vw;
        height: 44vw;
        background-color: #eee;
      }
      label{
        display: block;
        margin: 5px;
      }
      span{
        display: block;
        margin: 5px;
        font-size: 12px;
        color: #666;
      }
      em{
        display: block;
        font-style:normal;
        margin: 5px;
        font-size: 12px;        
      }
    }
    li:nth-of-type(2n){
      margin-right: 0;
    }
  }
}
</style>
