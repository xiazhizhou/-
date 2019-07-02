<template>
  <div>
    <my-header :title="'立即购买'" :showBack="true"/>
    <div class="buy_now">
      <div class="choose_address">
        <van-icon name="location" />
        <div class="choose_address_info">
          <label><span>收货人：张三</span><span>13470000222</span></label>
          <label><span>北京市昌平区沙河镇于辛庄路鑫阳公寓4栋</span></label>
        </div>
        <em class="van-icon van-icon-arrow"></em>
      </div>
      <i class="choose_address_bottom"></i>

      <div class="product_list_box">
        <ul>
          <li v-for="n in 3" class="product_list_li">
            <div class="product_shop">拉夏贝尔</div>
            <section class="product_info" v-for="n in 2">
              <i class="product_img_box"></i>
              <div class="product_info_desc">
                <label class="text_hide">拉夏贝尔2018夏季女性可爱波点短裙</label>
                <label>
                  <span>颜色分类：天蓝色</span>
                  <span>尺码：S码</span>
                </label>
                <label>
                  <em class="auxiliary_color">￥198.0</em>
                  <em>x 1</em>
                </label>
              </div>
            </section>
            <ul class="send_goods_info">
              <li>
                <label>买家留言：</label>
                <div>
                  <input type="text" placeholder="给卖家留言">
                </div>
              </li>
              <li>
                <label>配送方式：</label>
                <div>快递</div>
              </li>
              <li>
                <label>配送费用：</label>
                <div>免邮</div>
              </li>
              <li>
                <section>
                  <em>共2件商品</em>
                  <em>小计：<i class="auxiliary_color">￥336.50</i></em>
                </section>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      
      <van-submit-bar
        :price="305000"
        button-text="提交订单"
        @submit="onSubmit"
      />
    </div>

  </div>
</template>

<script>
import myHeader from "@/components/header.vue";
import { Toast, Dialog } from "vant";
export default {
  mounted() {},
  components: {
    "my-header": myHeader
  },
  methods: {
    //提交订单
    onSubmit(){

    }
  }
};
</script>

<style lang="less" scoped>
@mainColor: #f8e58c;
@auxiliaryColor: #fe6f6b;
.buy_now{
  bottom: 50px!important;
}
.choose_address{
  display: flex;
  align-items: center;
  padding: 10px 2%;
  background: #fff;
  i{
    width: 10vw;
    text-align: center;
    float: left;
    font-size: 20px;
    color: #fec130;
  }
  div{
    width: 80vw;
    float: left;
    label:nth-child(1){
      display: flex;
      align-items: center;
      justify-content: space-between;
      span{
        display: block;
        line-height: 20px;
      }
      span:nth-child(2){
        color: #666;
      }
    }
    label:nth-child(2){
      margin-top: 5px;
      display: block;
      font-size: 12px;
      color: #666;
    }
  }
  em{
    width: 6vw;
    text-align: right;
    float: left;
  }
}
.choose_address_bottom{
  margin-bottom: 10px;
  display: block;
}
.choose_address_bottom::after{
  content: '';
  display: block;
  height: 4px;
  background: -webkit-repeating-linear-gradient(135deg,#ff6c6c 0,#ff6c6c 20%,transparent 0,transparent 25%,#3283fa 0,#3283fa 45%,transparent 0,transparent 50%);
  background: repeating-linear-gradient(-45deg,#ff6c6c 0,#ff6c6c 20%,transparent 0,transparent 25%,#3283fa 0,#3283fa 45%,transparent 0,transparent 50%);
  background-size: 80px;
}

.product_list_box{
  .product_list_li{
    background: #fff;
    padding: 10px 5%;
    margin-bottom: 10px;
    border-bottom: 1px #eee solid;
    .product_shop{
      padding-bottom: 10px;
    }
    .product_info{
      padding: 10px 0;
      border-top: 1px #eee solid;
      display: flex;
      .product_img_box{
        display: block;
        width: 25vw;
        height: 25vw;
        background: #eee;
      }
      .product_info_desc{
        width: 64vw;
        margin-left: 1vw;
        line-height: 20px;
        position: relative;
        min-height: 100%;
        label{
          display: block;
        }
        span{
          display: inline-block;
          margin-right: 10px;
        }
        label:nth-child(2){
          background: #f5f5f5;
          font-size: 12px;
          padding: 5px;
          color: #666;
          margin-top: 5px;
          margin-bottom: 25px;
        }
        label:nth-child(3){
          bottom: 0px;
          position: absolute;
          overflow: hidden;
          width: 100%;
          color: #666;
          em:nth-child(1){
            float: left;
          }
          em:nth-child(2){
            float: right;
          }
        }
      }
    }
    .product_info:last-child{
      padding-bottom: 0;
    }
  }
  .product_list_li:last-child{
    margin-bottom: 0;
  }
}

.send_goods_info{
  background-color: #fff;
  li{
    padding: 10px 0;
    overflow: hidden;
    line-height: 25px;
    color: #666;
    border-top: 1px #eee solid;
    label{
      width: 25%;
      float: left;
    }
    div{
      width: 75%;
      float: left;
      text-align: right;
      input{
        width: 100%;
        border:none;
        text-align: right;
      }
    }
    section{
      width: 100%;
      text-align: right;
      em:first-child{
        margin-right: 10px;
      }
    }
  }
  li:last-child{
    padding-bottom: 0;
  }
}
</style>

