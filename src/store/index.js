import Vue from "vue";
import Vuex from "vuex";
import 'es6-promise/auto'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false, //登录状态  用来判断显示消息提示
    msgNum: 0, //未读消息数目
    goodsAmountInCart:0, //购物车数量
    needShowFooter:false,  //是否显示底部导航
    footerSelected: 0, //底部导航位置
    tradingAreaSelected:0,// 商圈tab记忆
    treasureHouseSelected:0,// 商圈tab记忆
    temporaryAddress:{},
    searchValue:'',
  },
  mutations: {
    updateLoginState(state, val) {
      state.isLogin = val;
    },
    updateMsgNum(state, val) {
      state.msgNum = val;
    },
    updateGoodsAmountInCart(state, val) {
      state.goodsAmountInCart = val;
    },
    updateNeedShowFooter(state, val) {
      state.needShowFooter = val;
    },
    updateSelected(state, val) {
      state.footerSelected = val;
    },
    updateTemporaryAddress(state, val) {
      state.temporaryAddress = val;
    },
    updateSearchValue(state, val) {
      state.searchValue = val;
    },
  },
  actions: {
    updateLoginState(context) {
      context.commit("updateLoginState");
    },
    updateMsgNum(context) {
      context.commit("updateMsgNum");
    }
  }
});
