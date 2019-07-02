<template>
  <section class="goods_cart" @click="pushPath">
    <i class="icon-cart iconfont"></i>
    <span v-if="goodsAmountInCart!=0" style="color:#fff">{{goodsAmountInCart}}</span>
  </section>  
</template>
<script>
export default {
  computed: {
    goodsAmountInCart() {
      return this.$store.state.goodsAmountInCart;
    }
  },
  methods:{
    pushPath(){
      this.$router.push('/ShoppingCart')
    }
  }
}
</script>
<style>
.goods_cart{
  height: 100%;
  position: relative; 
}
.goods_cart i{
  font-size: 30px;
  line-height: 44px;
  text-align: right;
  display: block;
  padding-right: 15px;
}
.goods_cart span{
  border-radius: 50%;
  display: block!important;
  position: absolute;
  background: red;
  top: 4px;
  right: 5px;
  height: 20px;
  min-width: 14px;
  font-size: 12px;
  padding: 0px 3px!important;
  line-height: 20px;
  color: #fff;
}
</style>
