<template>
    <div class="collect">
        <!-- 头部 -->
        <div class="top">
            <span class="icon ion-chevron-left" @click="go"></span>
            <span class="title">收藏夹</span>
        </div>
        <!-- 分类栏 -->
        <div class="select">
            <ul>
                <li @click="tabtouch(0)" class="active" ref="my">
                    <span>我的宝贝</span>
                </li>
                <li @click="touchshow()"  class="pull_f">
                    <span>分类 <span class="icon ion-chevron-down"></span></span>
                </li>
                <li @click="tabtouch(1)" ref="jj">
                    <span>降价中</span>
                </li>
            </ul>
        </div>
        <!-- 下拉列表 -->
        <div class="pull_d" v-show="on">
            <span>类型1</span>
            <span>类型2</span>
            <span>类型3</span>
        </div>
        <!-- 商品区域 -->
        <div class="goods">
            <ul v-show="flag">
                <li v-for="n in 10">
                    <i></i>
                    <!-- <div class="off">比收藏时价格降低5.00元</div> -->
                    <div class="ff">
                        <span class="text_hide">当当网 正版书籍 火爆热销中销中销中销中</span>
                        <em class="auxiliary_color text_hide">￥21.60</em>
                        <p class="icon ion-heart"></p>
                    </div>
                </li>
            </ul>
            
            <ul v-show="!flag">
                <li v-for="n in 10">
                    <i></i>
                    <div class="off">比收藏时价格降低5.00元</div>
                    <div class="ff">
                        <span class="text_hide">当当网 正版书籍 火爆热销中销中销中销中</span>
                        <em class="auxiliary_color text_hide">￥21.60</em>
                        <p class="icon ion-heart"></p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 遮盖曾 -->
        <div @click="touchshow" class="set_modal" v-show="on"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
      on: false
    };
  },
  mounted() {
    this.$store.commit("updateNeedShowFooter", true);
    this.$store.commit("updateSelected", 2);
  },
  methods: {
    go() {},
    tabtouch(index) {
      var list = document.querySelectorAll(".active")[0];
      list.classList.remove("active");
      if (index == 0) {
        this.$refs.my.classList.add("active");
        this.flag = true;
      } else {
        this.$refs.jj.classList.add("active");
        this.flag = false;
      }
    },
    touchshow() {
      console.log(123);

      this.on = !this.on;
    }
  }
};
</script>


<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.collect {
  .top {
    width: 100%;
    height: 44px;
    position: relative;
    left: 0;
    top: 0;
    background-color: #f8e38c;
    .ion-chevron-left {
      font-size: 18px;
      display: inline-block;
      width: 40px;
      height: 44px;
      text-align: center;
      line-height: 44px;
      position: absolute;
    }
    .title {
      font-size: 16px;
      display: inline-block;
      height: 44px;
      line-height: 44px;
      position: absolute;
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }
  .select {
    background-color: #f8e38c;
    width: 100%;
    height: 40px;
    border-top: 1px solid #fff;
    ul {
      li {
        width: 33.33%;
        text-align: center;
        float: left;
        line-height: 40px;
      }
    }
  }
  .goods {
    padding: 15px 5%;
    margin-bottom: 50px;
    background-color: #f2f2f2;
    p {
      text-align: center;
      margin: 0 0 15px;
    }
    ul {
      overflow: hidden;
      li {
        float: left;
        width: 44vw;
        margin: 0 2vw 5px 0;
        background-color: #fff;
        position: relative;
        .off {
          position: absolute;
          left: 0px;
          bottom: 56px;
          font-size: 12px;
          display: inline-block;
          width: 100%;
          background-color: #f4d99e;
        }
        .ff {
          position: relative;
        }
        i {
          display: block;
          width: 44vw;
          height: 44vw;
          background-color: #eee;
        }
        span {
          display: block;
          margin: 5px;
          font-size: 12px;
          color: #5d5d5d;
        }
        em {
          display: inline-block;
          font-style: normal;
          margin: 5px;
          font-size: 12px;
        }
        p {
          font-style: normal;
          display: inline-block;
          position: absolute;
          bottom: -10px;
          right: 5%;
          color: #dd0000;
        }
      }
      li:nth-of-type(2n) {
        margin-right: 0;
      }
    }
  }
}
.active {
  color: #fe776d;
}
.pull_d {
  position: absolute;
  width: 33.3%;
  z-index: 999;
  top: 86px;
  left: 50%;
  transform: translateX(-50%);
  // display: none;
  span {
    display: block;
    width: 100%;
    background-color: rgb(0, 174, 255);
  }
}
.pull_f {
  position: relative;
  z-index: 999;
}
.set_modal {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 555;
  background-color: rgba(255, 255, 255, 0);
  // display: none;
}
</style>

