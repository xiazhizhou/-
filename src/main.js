// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from "./store/index";

import { Picker } from 'mint-ui';
import 'mint-ui/lib/Picker/style.css';
Vue.component(Picker.name, Picker);


import Vant from 'vant';
import 'vant/lib/vant-css/index.css';


import App from "./App";
import httpServer from "./http/axios"; //封装ajax请求
import Api from "./http/api"; //接口api
import validator from "./store/validator";
import $ from "jquery";

import './assets/css/common.css'
import './assets/css/xyj-vant.css'

Vue.prototype.$http = httpServer;
Vue.prototype.$api = Api;
Vue.prototype.$validator = validator;
Vue.prototype.$$ = $;

Vue.prototype.goBack = ()=>{
  router.go(-1);
}
Vue.prototype.pushPath = (path)=>{
  router.push(path);
}

Vue.use(Vant);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
