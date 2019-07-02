<template>
  <div>
    <van-tabbar v-model="selected">
      <van-tabbar-item @click="pushPage('/')" icon="shop">
        <i :class="[selected=='0'?'icon_mall_selected':'icon_mall','my_footer_icon']"></i>        
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item @click="pushPage('/shoppingCart')"  icon="cart" info="5">
        <i :class="[selected=='2'?'icon_treasure_house_selected':'icon_treasure_house','my_footer_icon']"></i>
        <span>购物车</span>
      </van-tabbar-item>
      <!-- <van-tabbar-item @click="pushPage('/socialContact')">
        <i :class="[selected=='2'?'icon_social_contact_selected':'icon_social_contact','my_footer_icon']"></i>
        <span>社交</span>
      </van-tabbar-item> -->
      <van-tabbar-item @click="pushPage('/my')" icon="contact">
        <i :class="[selected=='3'?'icon_my_selected':'icon_my','my_footer_icon']"></i>
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "myFooter",
  data() {
    return {};
  },
  props:[],
  computed: {
    selected: {
      get() {
        return this.$store.state.footerSelected;  
      },
      set(newValue) {
        this.$store.state.footerSelected = newValue
      }      
    }
  },
  methods: {
    pushPage(path) {
      this.$router.replace(path);
    }
  }
};
</script>
<style>
.van-tabbar{
  /* height: 53px; */
  box-shadow: 0 0 1px -1px #ccc;
  z-index: 100;
}
.van-tabbar-item--active{
  color: #f8e58c!important;
}
/* .my_footer_icon{
  background-image: url(../assets/img/icon.png);
  width: 23px;
  height: 23px;
  padding-bottom: 4px;
  background-size: 1500%;
  margin: auto;
  display: block;
} */
.icon_mall{
  background-position: 4.5% 21%;
}
.icon_mall_selected{
  background-position: 4.5% 29.5%;
}

.icon_trading_area{
  background-position: 27.2% 21%;
}
.icon_trading_area_selected{
  background-position: 27.2% 29.5%;
}

.icon_social_contact{
  background-position: 50% 21%;
}
.icon_social_contact_selected{
  background-position: 50% 29.5%;
}

.icon_treasure_house{
  background-position: 73% 21%;
}
.icon_treasure_house_selected{
  background-position: 73% 29.5%;
}

.icon_my{
  background-position: 95.5% 21%;
}
.icon_my_selected{
  background-position: 95.5% 29.5%;
}
</style>
