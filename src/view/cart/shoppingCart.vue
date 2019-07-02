<template>
  <div class="shopping_cart">
    <section class="operation_box" v-show="isShowOperation">
      <div @click="favorite">移入收藏夹</div>
      <div @click="del">删除</div>
    </section>
    <my-header :title="'购物车'" :rightText="'管理'" @rightAction="showOperation" />
    <div class="shopping_cart_box" :style="{top:boxTop+'px'}">
      <ul class="cart_product">
        <li v-for="(item,index) in cartProduct">
          <div class="cart_product_shop">
            <div @click="shopAllChecked(index)"><span :class="{'product_checked':item.checked}"></span></div>
            <div>联想官方旗舰店 <i class="icon-right iconfont"></i></div>
          </div>
          <div class="cart_product_info" v-for="(product,i) in item.list">
            <div @click="productChecked(item,i)"><span :class="{'product_checked':product.checked}"></span></div>
            <div class="product_img_box">
              <img src="" alt="" srcset="">
            </div>
            <div>
              <label class="text_hide_two">Lenovo/联想 拯救者 R720-15IKB i7游戏笔记本手提电脑15.6英寸</label>
              <label class="cart_product_params"><span class="text_hide_two">红色；定制配置：i7-77HQ/16G 1T+256G/固态/GTX1050TI独显4G</span></label>
              <label class="auxiliary_color" style="font-size:12px;padding:0 5px;">库存：100件</label>
              <section>
                <span class="auxiliary_color">￥{{product.price}}</span>
                <van-stepper v-model="product.num" @change="total"/>
              </section>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <section class="footer_totle">
      <div @click="allChecked"><span :class="{'product_checked':isAllChecked}"></span></div>
      <div @click="allChecked">全选</div>
      <div>合计：<em class="auxiliary_color">￥{{checkedPrice}}</em></div>
      <div class="auxiliary_color_bg">结算({{checkedNum}})</div>
    </section>
  </div>
</template>

<script>
import myHeader from "@/components/header.vue";
import { Toast,Dialog } from 'vant';
export default {
  data(){
    return {
      boxTop:44,
      isShowOperation:false,

      checkedNum:0,
      checkedPrice:0,
      isAllChecked:false,

      cartProduct:[
        {checked:false,
           list:[
             {
               checked:false,
               num:1,
               price:100
             },
             {
               checked:false,
               num:1,
               price:100               
             }
           ]
        },
        {checked:false,
           list:[
             {
               checked:false,
               num:1,
               price:100
             },
             {
               checked:false,
               num:1,
               price:100
             }
           ]
        },
        {checked:false,
           list:[
             {
               checked:false,
               num:1,
               price:100
             },
             {
               checked:false,
               num:1,
               price:100
             }
           ]
        },
      ]
    }
  },
  created() {
    if (this.$route.fullPath.indexOf("?") != -1) {
      this.goBack();
    }
  },
  watch: {
    $route(val, oldval) {
      if (oldval.fullPath.indexOf("?") != -1) {
        Dialog.close();
      }
    }
  },
  mounted(){
    this.$store.commit("updateNeedShowFooter", true);
    this.$store.commit("updateSelected", 1);
  },
  components:{
    'my-header':myHeader
  },
  methods:{
    //管理
    showOperation(){
      this.isShowOperation = !this.isShowOperation
      if(this.isShowOperation){
        this.boxTop = 84;
      }else{
        this.boxTop = 44;
      }
    },

    //移入收藏夹
    favorite(){
      Toast({message:'移入收藏夹成功！',position:'bottom'});
    },
    //删除
    del(){
      if (window.location.href.indexOf("?showDel") == -1) {
        window.location.href = window.location.href + "?showDel";
      }
      Dialog.confirm({
        title: '提示',
        message: '确定从购物车删除选中商品？'
      }).then(() => {
        // on confirm
        this.goBack();        
        Toast({message:'删除成功！',position:'bottom'});
      }).catch(() => {
        // on cancel
        this.goBack();        
      });
      
    },
    total(){
      //计算总数量
      this.checkedNum = 0;//初始化总数量
      this.checkedPrice = 0;//初始化总价

      let allChoose = true;
      this.cartProduct.forEach(data=>{
        data.list.forEach(item=>{
          if(item.checked){
            this.checkedNum += 1;
            this.checkedPrice += item.price*item.num;
          }
        })
        if(!data.checked){
         allChoose = false;
        }
        this.isAllChecked = allChoose;
      })
    },
    //商铺全选
    shopAllChecked(index){
      //商铺全选
      this.cartProduct[index].checked = !this.cartProduct[index].checked
      //商铺各商品选中
      this.cartProduct[index].list.forEach(item=>{
        //判断当前商铺选择状态
        if(this.cartProduct[index].checked){
          item.checked = true;
        }else{
          item.checked = false;
        }
      })
      this.total()
    },
    
    productChecked(item,index){
      item.list[index].checked = !item.list[index].checked;
      if(!item.list[index].checked){
        item.checked=false;
      }else{
        let isShopAllChecked = true
        item.list.forEach(item=>{
          if(!item.checked){
            isShopAllChecked = false
          }
        })
        item.checked = isShopAllChecked;
      }
      this.total()
    },

    allChecked(){
      if(this.isAllChecked){
        this.cartProduct.forEach(data=>{
          data.checked = false;
          data.list.forEach(item=>{
            item.checked = false;
          })
        })
        this.checkedNum = 0;//初始化总数量
        this.checkedPrice = 0;//初始化总价
        this.isAllChecked = false;
      }else{
        this.cartProduct.forEach(data=>{
          data.checked = true;
          data.list.forEach(item=>{
            item.checked = true;
          })
        })
        this.total()
      }
    }
  }
}
</script>

<style lang="less" scoped>
@mainColor:#f8e58c;
@auxiliaryColor:#fe6f6b;
.shopping_cart{
  bottom: 0;
}
.shopping_cart_box{
  bottom: 90px!important;
}
.operation_box{
  position: fixed;
  top:44px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 10;
  height: 40px;
  background: #fff;
  box-shadow: 0 0 1px 0px @mainColor;
  div:nth-child(1){
    padding: 2px 10px;
    border: 1px @auxiliaryColor solid;
    color: @auxiliaryColor;
    border-radius: 5px;
  }
  div:nth-child(2){
    padding: 2px 10px;
    margin: 0 15px;
    border: 1px #666 solid;
    color: #666;
    border-radius: 5px;    
  }
}
.cart_product{
  li{
    background-color:#fff;
    margin-bottom: 10px;
    .cart_product_shop{
      padding: 10px 2%;
      display: flex;
      align-items: center;
      div:nth-child(1){
        width:10vw;
        height:6vw;
        max-height: 30px;
        padding:0 2vw;
        box-sizing: border-box;
        span{
          display:block;
          width:6vw;
          height:6vw;
          max-width: 30px;
          max-height: 30px;
          margin: auto;
          border:1px #ccc solid;
          border-radius: 50%;
          box-sizing: border-box;
        }
      }
      div:nth-child(2){
        i{
          padding-left:5px;
          color: #666;
        }
      }
    }
    .cart_product_info{
      display: flex;
      padding: 5px 2%;
      line-height: 20px;
      div:nth-child(1){
        width:10vw;
        padding:0 2vw;
        box-sizing: border-box;
        span{
          display:block;
          width:6vw;
          height:6vw;
          max-width: 30px;
          max-height: 30px;
          margin: auto;
          border:1px #ccc solid;
          border-radius: 50%;
          box-sizing: border-box;
        }
      }
      .product_img_box{
        width: 25vw;
        height: 25vw;
        background: #eee;
        line-height: 25vw;
        img{
          max-width: 100%;
          max-height: 100%;
          margin: auto;
        }
      }
      div:nth-child(3){
        width: 60vw;
        margin-left: 1vw;
        align-items: flex-start;
        label,span{
          display: block;
        }
        .cart_product_params{
          display: block;
          padding: 5px;
          background: #f5f5f5;
          color: #666;
          font-size: 12px;
          width:70%;
          span{
            display: block;
          }
        }
        section{
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
  }
  li:last-child{
    margin-bottom: 0;
  }
}
.product_checked{
  background-color: #f8e58c;
}
.footer_totle{
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 50px;
  width: 100%;
  background: #fff;
  height: 40px;
  box-sizing: border-box;
  border-top: 1px #eee solid;
  color: #555;
  em{
    font-style: normal;
  }
  div:nth-child(1){
    display: flex;
    // width:10vw;
    height:6vw;
    max-height: 30px;
    text-align: center;
    box-sizing: border-box;
    margin-left: 2vw;
    width: 10vw;
    span{
      display:block;
      width:6vw;
      height:6vw;
      margin: auto;
      max-width: 30px;
      max-height: 30px;
      border:1px #ccc solid;
      border-radius: 50%;
      box-sizing: border-box;
    }
  }
  div:nth-child(2){
    width: 12vw;
    text-align: left;
  }
  div:nth-child(3){
    width: 46vw;
    text-align: right;
    padding-right: 2vw;
  }
  div:nth-child(4){
    width: 30vw;
    line-height: 40px;
    height: 40px;
    text-align: center;
    color: #fff;
  }
}
</style>