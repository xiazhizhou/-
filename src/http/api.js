const serviceModule = {  

    baseURL : "http://47.75.51.134:8080/syb-backend/",
    // baseURL : "http://192.168.5.132:8080/syb-backend/",

    //二维码路径
    qrUrl: 'http://www.bangshiye.vip/#/',
    // qrUrl: 'http://192.168.5.115:8080/#/',
    //登录
    login: {  
      url: 'api/eco/common/login.do',
      method: 'post'  
    },
    //发送验证码
    sendVerificationCode:{
      url: 'api/eco/common/getSmsCode.do',
      method: 'post'
    },
    //注册
    register:{
      url: 'api/eco/common/regiestUser.do',
      method: 'post'
    },
    //忘记密码
    forgetPassword:{
      url: 'api/eco/common/forgetPass.do',
      method: 'post'
    },
    //验证token是否失效
    checkToken:{
      url: 'api/eco/common/checkTokenExist.do',
      method:'post'
    },

    //我的 获取个人信息
    getMyInfo: {  
      url: 'api/eco/customer/selectSybCustomer.do',
      method: 'post'  
    },
    //修改登录密码
    changeLoginPwd:{
      url:"api/eco/common/modifyLoginPass.do",
      method:"post"
    },
    //修改安全密码
    changePayPwd:{
      url:"api/eco/common/modifyPayPass.do",
      method:"post"
    },
    //检查是否已经注册
    checkLogin:{
      url:"api/eco/common/checkLogin.do",
      method:"post"
    },
    //修改个人信息
    modifyMsg:{
      url:"api/eco/customer/updateCustomerInfo.do",
      method:"post"
    },
    //实名认证
    identification:{
      url:"api/eco/common/checkAuth.do",
      method:"post"
    },
    selectSybInformationBulletin: {  
      url: 'api/eco/common/selectSybInformationBulletin.do',  
      method: 'post'  
    },
    //交易大厅头部获取BLC
    tradeCount:{
      url:"api/eco/trade/selectTradeCount.do",
      method:"post"
    },
    //交易大厅 委托求购 委托出售
    tradeList:{
      url:"api/eco/trade/selectTradeList.do",
      method:"post"
    },
    //交易大厅 我要买入
    tradeBuy:{
      url:"api/eco/trade/pushTradeInfo.do",
      method:"post"
    },
    //交易大厅 出售
    tradeSellOut:{
      url:"api/eco/trade/pushTradeBuy.do",
      method:"post"
    },
    //当前所有矿机
    selectEcoMachineList: {  
      url: '/api/eco/customer/selectEcoMachineList.do',  
      method: 'post'  
    },
    //当前矿机详情
    selectMyEcoMachineInfo: {  
      url: '/api/eco/customer/selectMyEcoMachineInfo.do',  
      method: 'post'  
    },
    //我的云主机
    selectMyEcoMachineList: {  
      url: '/api/eco/customer/selectMyEcoMachineList.do',  
      method: 'post'  
    },
    //单个领取矿机收益
    getMyEcoMachinRate: {  
      url: '/api/eco/customer/getMyEcoMachinRate.do',  
      method: 'post'  
    },
    //我的圈友个人信息
     selectSybCustomer: {  
      url: '/api/eco/customer/selectSybCustomer.do',  
      method: 'post'  
    },
    //我的圈友列表
    selectCustomerList: {  
      url: '/api/eco/customer/selectCustomerList.do',  
      method: 'post'  
    },
    //交易已完成列表
    transactionCompletedList:{
      url: 'api/eco/trade/selectMyTradeList.do',  
      method: 'post' 
    },
    //交易中
    tradeingInfo:{
      url: 'api/eco/trade/selectTradeInfoByTradeing.do',  
      method: 'post' 
    },
    checkTradeStatus:{
      url: 'api/eco/trade/checkTradeStatus.do',
      method: 'post' 
    },
    //确认收货
    confirmReceipt:{
      url: 'api/eco/trade/pushTradeConfirm.do',  
      method: 'post' 
    },
    //求购和出售
    buyAndSell:{
      url: 'api/eco/trade/selectMyTradeSimpleData.do',  
      method: 'post' 
    },
    //取消交易
    rescission:{
      url: 'api/eco/trade/cancleMyTradeSimpleData.do',  
      method: 'post' 
    },
    //收支流水 blc收益
    selectMyEarningsList:{
      url:"api/eco/customer/selectMyEarningsList.do",
      method:"post"
    },
    //贡献值明细
    selectMyContributionList:{
      url:"api/eco/customer/selectMyContributionList.do",
      method:"post"
    },
    //上传图片
    uploadImgs:{
      url:'api/eco/common/uploadImages.do',
      method:'post'
    },
    uploadAuthImg:{
      url:'api/eco/common/uploadAuthImg.do',
      method:'post'
    },
    pushTradeVoucher:{
      url: 'api/eco/trade/pushTradeVoucher.do',
      method: 'post'
    },
     //上传图片
    selectBlcTrandeTbale2:{
      url: '/api/eco/trade/selectBlcTrandeTbale2.do',
      method: 'post'
    },
     //一键领取所有收益
    getAllMyEcoMachinRate:{
      url: '/api/eco/customer/getAllMyEcoMachinRate.do',
      method: 'post'
    },
    //购买矿机
    buyEcoMachineInfo:{
      url: '/api/eco/customer/buyEcoMachineInfo.do',
      method: 'post'
    },
    
    customerAuth:{
      url: 'api/eco/common/customerAuth.do',
      method: 'post'
    },
    //检查实名认证状态
    checkAuthImg:{
      url: 'api/eco/common/checkAuthImg.do',
      method: 'post'
    },
    //实名认证四要素
    pushAuthData:{
      url: 'api/eco/auth/pushAuthData.do',
      method: 'post'
    },

    selectIndexData:{
      url:'api/eco/customer/selectIndexData.do',
      method: 'post'
    },
    getMsglist:{
      url:'api/eco/customer/selectCustomerMessageList.do',
      method: 'post'
    },
    getMsgDetail:{
      url:'api/eco/customer/selectCustomerMessageById.do',
      method: 'post'
    },
    delMsg:{
      url:'api/eco/customer/delCustomerMessageByIds.do',
      method: 'post'
    },
    messageAllRead:{
      url:'api/eco/customer/CustomerMessagetoRead.do',
      method: 'post'
    },
    // 查询商城首页所有图片
    selectMallIndexInfo:{
      url:"api/eco/mall/selectMallIndexInfo.do",
      method:"post"
    },
    // 新手指南
    gettingStarted:{
      url:"api/eco/common/gettingStarted.do",
      method:"post"
    },
    // 查询商品分类（1级+2级）
    selectMallGoodsClassifyById:{
      url:"api/eco/mall/selectMallGoodsClassifyById.do",
      method:"post"
    },
    // 查询商品列表
    selectMallGoodsList:{
      url:"api/eco/mall/selectMallGoodsList.do",
      method:"post"
    },
    //商品详情
    selectGoodsInfo:{
      url:"api/eco/mall/selectGoodsInfo.do",
      method:"post"
    },
    //评价列表
    selectGoodsCommentList:{
      url:"api/eco/mall/selectGoodsCommentList.do",
      method:"post"
    },
    //创建订单
    createOrderInfo:{
      url:"api/eco/order/createOrderInfo.do",
      method:"post"
    },
    //查询分类信息
    selectGoodsClassifyList:{
      url:"api/eco/mall/selectGoodsClassifyList.do",
      method:'post'
    },
    //意见反馈
    customerFeedback:{
      url:'api/eco/customer/customerFeedback.do',
      method: 'post'
    },
    //所有收货地址
    selectMallCustomerAddressList:{
      url:"api/eco/mall/selectMallCustomerAddressList.do",
      method:"post"
    },
     //添加/修改收货地址
    saveMallCustomerAddress:{
      url:"api/eco/mall/saveMallCustomerAddress.do",
      method:"post"
    },
     //设置默认收货地址
    setDefultAdress:{
      url:"api/eco/mall/setDefultAdress.do",
      method:"post"
    },
     //删除收货地址
    delMallCustomerAddress:{
      url:"api/eco/mall/delMallCustomerAddress.do",
      method:"post"

    },
    //添加购物车
    addCustomerCar:{
      url:"api/eco/customerCar/addCustomerCar.do",
      method:"post"
    },
    //生成订单号
    buildOrderInfo:{
      url:"api/eco/order/buildOrderInfo.do",
      method:"post"
    },
    //我的购物车
    selectcustomerCar:{
      url:"api/eco/customerCar/selectcustomerCar.do",
      method:"post"
    },
    //查询购物车商品数量
    selectCustomerCarNum:{
      url:"api/eco/customerCar/selectCustomerCarNum.do",
      method:"post"
    },
    //查询商城首页模块商品列表
    selectIndexGoods:{
      url:"api/eco/mall/selectIndexGoods2.do",
      method:"post"
    },
     //支付bcc接口
    orderToPay:{
      url:"api/eco/order/orderToPay.do",
      method:"post"
    },
     //查询订单
    selectMyOrder:{
      url:"api/eco/order/selectMyOrder.do",
      method:"post"
    },
     //确认收货
    confirmOrder:{
      url:"api/eco/order/confirmOrder.do",
      method:"post"
    },
    //删除购物车
    delCustomerCar:{
      url:"api/eco/customerCar/delCustomerCar.do",
      method:"post"
    },
    //购物车生成订单
    buildOrderInfoByCars:{
      url:"api/eco/order/buildOrderInfoByCars.do",
      method:"post"
    },
    //批量删除购物车
    delMoreCustomerCar:{
      url:"api/eco/customerCar/delMoreCustomerCar.do",
      method:"post"
    },
    //评价商品
    pushGoodsComment:{
      url:"api/eco/mall/pushGoodsComment.do",
      method:"post"
    },
    //收藏
    modifyMyCollection:{
      url:"api/eco/mall/modifyMyCollection.do",
      method:"post"
    },
    //收藏列表
    selectMyCollection:{
      url:"api/eco/mall/selectMyCollection.do",
      method:"post"
    },
    //编辑购物车
    modifyCustomerCar:{
      url:"api/eco/customerCar/modifyCustomerCar.do",
      method:"post"
    },
    //删除订单
    delOrderInfo:{
      url:"api/eco/order/delOrderInfo.do",
      method:"post"
    },
    //查询物流信息接口
    selectLogisticsInfo:{
      url:"api/eco/order/selectLogisticsInfo.do",
      method:"post"
    },
    //获取商家等级
    selectMallBusinessLevel:{
      url:"api/eco/business/selectMallBusinessLevel.do",
      method:"post"
    },
    //商家入驻申请
    pushBusinessApply:{
      url:"api/eco/business/pushBusinessApply.do",
      method:"post"
    },
    //获取商家信息
    getBusiness:{
      url:"api/eco/business/getBusiness.do",
      method:"post"
    },
    modifyBusiness:{
      url:"api/eco/business/modifyBusiness.do",
      method:"post"
    },
    //检查申请状态
    checkBusinessApply:{
      url:"api/eco/business/checkBusinessApply.do",
      method:"post"
    },
    //查询商家信息
    selectBusinessInfo:{
      url:"api/eco/business/selectBusinessInfo.do",
      method:"post"
    },
    //blc转bcc
    convertBlcToBcc:{
      url:"api/eco/trade/convertBlcToBcc.do",
      method:"post"
    },
    //bcc转blc
    convertBccToBLc:{
      url:"api/eco/business/convertBccToBLc.do",
      method:"post"
    },
    //在线升级
    pushBusinessLevel:{
      url:"api/eco/business/pushBusinessLevel.do",
      method:"post"
    },
    //交易记录
    businessPorfitList:{
      url:"api/eco/business/businessPorfitList.do",
      method:"post"
    },
    //转换记录
    selectSybAccountConvert:{
      url:"api/eco/trade/selectSybAccountConvert.do",
      method:"post"
    },
    //扫码支付
    offlinePay:{
      url:"api/eco/business/offlinePay.do",
      method:"post"
    },
    //商品管理
    selectMallGoodsListByBusinessId:{
      url:"api/eco/business/selectMallGoodsListByBusinessId.do",
      method:"post"
    },
    //商品上下架
    changeGoodsStatus:{
      url:"api/eco/business/changeGoodsStatus.do",
      method:"post"
    },
    //会员签到
    customerSign:{
      url:"api/eco/customer/customerSign.do",
      method:"post"
    },


    //藏宝阁
    //宝箱列表
    selectSysTreasure:{
      url:"api/customerTreasure/selectSysTreasure.do",
      method:"post"
    },
    //我的宝箱
    selectMyTreasure:{
      url:"api/customerTreasure/selectMyTreasure.do",
      method:"post"
    },
    //藏宝
    pushTreasure:{
      url:"api/customerTreasure/pushTreasure.do",
      method:"post"
    },
    //领取宝箱
    getTreasureProfit:{
      url:"api/customerTreasure/getTreasureProfit.do",
      method:"post"
    },
    //一键领取宝箱
    getTotalTreasureProfit:{
      url:"api/customerTreasure/getTotalTreasureProfit.do",
      method:"post"
    },

    //商圈
    //检查是否商家
    checkBusiness:{
      url:"api/eco/business/checkBusiness.do",
      method:"post"
    }
  }  
  const Api = {...serviceModule }  
    
  export default Api