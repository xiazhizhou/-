import Vue from 'vue'
import Router from 'vue-router'

const  login = r => require.ensure( [], () => r (require('@/view/accunt/login')))
const  register = r => require.ensure( [], () => r (require('@/view/accunt/register')))
const  resetPassword = r => require.ensure( [], () => r (require('@/view/accunt/resetPassword')))

// const  main = r => require.ensure( [], () => r (require('@/view/main/main')))

const  mall = r => require.ensure( [], () => r (require('@/view/mall/mall')))
const  productList = r => require.ensure( [], () => r (require('@/view/mall/productList')))
const  productDetails = r => require.ensure( [], () => r (require('@/view/mall/productDetails')))
const  buyNow = r => require.ensure( [], () => r (require('@/view/mall/buyNow')))

const  shoppingCart = r => require.ensure( [], () => r (require('@/view/cart/shoppingCart')))

const  socialContact = r => require.ensure( [], () => r (require('@/view/socialContact/socialContact')))

const  my = r => require.ensure( [], () => r (require('@/view/my/my')))
const  mycollect = r => require.ensure( [], () => r (require('@/view/my/mycollect')))
const  myAddress = r => require.ensure( [], () => r (require('@/view/my/myAddress')))

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mall',
      component: mall,
      meta: { requiresAuth: true }
    },
    {
      path: '*',
      name: 'mall',
      component: mall,  
      meta: { requiresAuth: true }
    },

    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/resetPassword',
      name: 'resetPassword',
      component: resetPassword
    },


    //产品列表 
    {
      path: '/productList/:params',
      name: 'productList',
      component: productList,  
      meta: { requiresAuth: true }
    },
    //产品详情
    {
      path:'/productDetails/:id',
      name:'productDetails',
      component:productDetails,
      meta: { requiresAuth: true } 
    },
    //立即购买
    {
      path:'/buyNow',
      name:'buyNow',
      component:buyNow,
      meta: { requiresAuth: true } 
    },


    //购物车 
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: shoppingCart,  
      meta: { requiresAuth: true }
    },

    
    {
      path: '/socialContact',
      name: 'socialContact',
      component: socialContact,  
      meta: { requiresAuth: true }
    },
    {
      path: '/my',
      name: 'my',
      component: my,  
      meta: { requiresAuth: true }
    },
    {
      path: '/mycollect',
      name: 'mycollect',
      component: mycollect,
      // meta: {requiresAuth: true }
    },
    {
      path: '/myAddress/:type',
      name: 'myAddress',
      component: myAddress,  
      meta: { requiresAuth: true }
    },
  ]
})
