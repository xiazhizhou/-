<template>
  <div class="product_details">
    <div class="product_details_header">
      <div @click="goBack">
        <i class="icon-left iconfont"></i>
      </div>
      <div>
        <span :class="[{product_details_tab_selected:tab==1}]" @click="tabHref(1)">商品</span>
        <span :class="[{product_details_tab_selected:tab==2}]" @click="tabHref(2)">评价</span>
        <span :class="[{product_details_tab_selected:tab==3}]" @click="tabHref(3)">详情</span>
      </div>
      <div style="line-height:44px;position:relative;">
        <goods-cart></goods-cart>
      </div>
    </div>
    <div class="product_details_content"  ref="productDetails">
      <div>
        <van-swipe v-if="imgbannerList.length>0">
          <van-swipe-item v-for="(slide,index) in imgbannerList" :key="index"><img :src="slide.img"/></van-swipe-item>
        </van-swipe>
        <div class="product_details_text_box ">
          <div class="product_details_name text_hide_two">{{goodsDetail.goodsName}}</div>
          <div class="product_details_price text_hide">
            <i>RMB：{{goodsDetail.goodsPriceRmb}}</i>
          </div>
          <div class="product_details_sale">
            <em>快递: {{goodsDetail.goodsFreight}}</em>
            <em>销量 {{goodsDetail.goodsSale}}笔</em>
            <em>{{goodsDetail.cityName}}</em>
          </div>
        </div>
        <div class="product_details_commercial_specification " @click="showParamsPopup('clickSpecifications')">
          <div>商品规格</div>
          <div><i class="icon-more iconfont"></i></div>
        </div>
        <!-- 评价部分 -->
        <div class="product_details_comment" ref="productComment">
          <div class="product_details_comment_title">
            <span style="float:left">宝贝评价({{goodsDetail.commentNum}})</span>
            <div style="float:right">
              <span v-if="comment.customerName" @click="pushPath('/EvaluationList/'+goodsDetail.id)" style="margin-right: 5px;">查看全部</span>
              <i class="icon-right iconfont"></i>
              </div>
          </div>
          <div v-if="!comment.customerName" class="comment_content">
            <section class="comment_img_box">
              <img :src="comment.customerHead" alt="">
            </section>
            <section class="comment_info_box">
              <div>
                <i>{{comment.customerName}}邓先生</i>
                <em>{{comment.createTime}}2018.05.16</em>
              </div>
              <span class="">{{comment.commentContext}}真好看真好看真好看真好看真好看真好看真好看真好看真好看真好看</span>
            </section>
          </div>
          <div v-if="comment.customerName" class="no_more_data">
          暂无评论
          </div>
        </div>
        <!-- 店铺详情 -->
        <div class="product_details_shop">
          <section>
            <i>
              <img :src="goodsDetail.merchantImg" alt="">
            </i>
            <div>
              <em v-show="goodsDetail.merchantLevel">{{goodsDetail.merchantLevel}}</em> 
              <span>
                {{goodsDetail.merchantName}}
              </span>
            </div>
            <label><span @click="pushPath('/BusinessShop/'+goodsDetail.merchantId)">进店逛逛</span></label>
          </section>
          <ul class="shop_desc">
            <li>
              <em>宝贝描述</em>
              <i>{{goodsDetail.commentDescrebeSart}}</i>
              <span v-html='goodsDetail.commentDescrebeSart>=3.5?"高":goodsDetail.commentDescrebeSart>=1.5?"中":"低"'></span>
            </li>
            <li>
              <em>卖家服务</em>
              <i>{{goodsDetail.commentServiceSart}}</i>
              <span v-html='goodsDetail.commentServiceSart>=3.5?"高":goodsDetail.commentServiceSart>=1.5?"中":"低"'></span>
            </li>
            <li>
              <em>物流服务</em>
              <i>{{goodsDetail.commentLogisticsSart}}</i>
              <span v-html='goodsDetail.commentLogisticsSart>=3.5?"高":goodsDetail.commentLogisticsSart>=1.5?"中":"低"'></span>
            </li>
          </ul>
        </div>
        <!-- 商品详情 -->
        <div ref="productInfo" class="goods_info">
          <span class="">商品详情</span>
          <div v-html="goodsContext"></div>
        </div>
      </div>
      
      <!-- 立即购买弹出框 -->
      <van-popup class="product_details_commercial_specification_popup_style" v-model="popupVisible" position="bottom" @click-overlay="goBack">
        <div style=" position: relative;">
          <div class="product_sku_top">
            <i>
              <img :src="goodsDetail.goodsImg" alt="">
            </i>
            <div>
              <span class="text_hide">{{goodsDetail.goodsName}}</span>
              <span class="text_hide auxiliary_color">RMB：{{goodsDetail.goodsPriceRmb}}</span>              
            </div>
          </div>
          <div class="product_sku_params">
            <div v-for="(item,indexs) in kinds" :key="indexs">
              <span>{{item.kindName}}：</span>
              <ul>
                <li :key="index" v-for="(items,index) in item.kindValues" @click="selectedKinds(items,indexs)" 
                :class="{params_checked: item.checked == items.kindeDetailVaue}">
                  {{items.kindeDetailVaue}}
                </li>
              </ul>
            </div>
            <div class="product_sku_buy_num">
              <section>
                <div class="product_sku_stock">
                  <em>购买数量:</em>
                  <i>库存：{{goodsDetail.goodsStock}}</i>
                </div>
                <van-stepper v-model="value" :max="goodsDetail.goodsStock"/>
              </section>
            </div>
          </div>
          <ul class="product_sku_btn">
            <li v-show="btnStyle == 'pushCartConfirm'" @click="submit('pushCartConfirm')" class="">确定</li>
            <li v-show="btnStyle == 'buyNowConfirm'" @click="submit('buyNowConfirm')" class="">确定</li>
            <li v-show="btnStyle == 'clickSpecifications'" @click="submit('pushCart')" class="">加入购物车</li>
            <li v-show="btnStyle == 'clickSpecifications'" @click="submit('buyNow')" class="">立即购买</li>
          </ul>
        </div>
      </van-popup>
    </div>
    <!-- 底部导航 -->
    <ul class="product_details_footer">
      <li  @click="pushPath('/mainMall')">
        <van-icon name="shop"></van-icon>
        <span>首页</span>
      </li>
      <li @click="handleClickCollect">
        <i v-show="!isCollect" class="icon-favorite-outline iconfont"></i>
        <i v-show="isCollect" class="icon-favorite iconfont"></i>
        <span>收藏</span>
      </li>
      <li @click="showParamsPopup('pushCartConfirm')">加入购物车</li>
      <li @click="showParamsPopup('buyNowConfirm')">立即购买</li>
    </ul>
  </div>
</template>
<script>
import goodsCart from "@/components/goodsCart.vue";

import { Toast } from "vant";
export default {
  data() {
    return {
      tab: 1,
      commentBoxTop: 0,
      detailsBoxTop: 0,

      btnStyle: "",

      popupVisible: false,
      num: 1,

      goodsDetail: {},
      goodsId: "", //商品id
      kinds: [], //商品规格
      kindDetailId: "", //商品规格id
      combinations: [], //规格数组
      array: [],
      value: "",
      combinationId: "",
      imgbannerList: [],
      goodsContext: "",
      cartNum: "",
      comment: {},
      isCollect: false,
      unit: "帮劵"
    };
  },
  components: {
    "goods-cart": goodsCart
  },
  created() {
    if (this.$route.fullPath.indexOf("?") != -1) {
      this.goBack();
    }
  },
  watch: {
    $route(val, oldval) {
      if (oldval.fullPath.indexOf("?") != -1) {
        this.popupVisible = false;
      }
    }
  },
  mounted() {
    this.$refs.productDetails.addEventListener("scroll", this.onScroll);
    this.init();
  },
  methods: {
    init() {
      this.$http(this.$api.selectGoodsInfo, { id: this.$route.params.id }).then(
        res => {
          //商品详情
          if (res.code === 0) {
            if (res.data) {
              if (res.data.goodsStyle == "2") {
                this.unit = "积分";
              } else if (res.data.goodsStyle == "3") {
                this.unit = "贡献值";
              }
              this.goodsDetail = res.data;
              res.data.kinds.forEach(function(item) {
                item.checked = "";
              });
              this.kinds = res.data.kinds;
              this.goodsId = res.data.id;
              this.combinations = res.data.combinations;
              res.data.imgages.forEach(item => {
                this.imgbannerList.push({ img: item });
              });
              this.goodsContext = res.data.goodsContext;
              this.comment = res.data.comment;
              this.isCollect = res.data.flagCollection == 1;
            }
          }
        }
      );
    },
    //监听滚动
    onScroll() {
      //计算评论区和详情区距顶部高度
      this.commentBoxTop = this.$refs.productComment.offsetTop - 50;
      this.detailsBoxTop = this.$refs.productInfo.offsetTop - 50;
      let scrolled = event.target.scrollTop;
      if (scrolled >= this.detailsBoxTop) {
        this.tab = 3;
      } else if (
        scrolled < this.detailsBoxTop &&
        scrolled >= this.commentBoxTop
      ) {
        this.tab = 2;
      } else {
        this.tab = 1;
      }
    },
    //点击顶部分区跳转
    tabHref(tab) {
      this.tab = tab;
      this.commentBoxTop = this.$refs.productComment.offsetTop - 50;
      this.detailsBoxTop = this.$refs.productInfo.offsetTop - 50;
      if (tab == 1) {
        this.$refs.productDetails.scrollTop = 0;
      } else if (tab == 2) {
        this.$refs.productDetails.scrollTop = this.commentBoxTop + 50;
      } else if (tab == 3) {
        this.$refs.productDetails.scrollTop = this.detailsBoxTop + 50;
      }
    },
    //选择产品规格
    selectedKinds: function(data, key) {
      this.array[key] = data.kindDetailId;
      this.value = this.array.join("/");
      this.kinds.forEach((item, index) => {
        if (key == index) {
          item.checked = data.kindeDetailVaue;
          this.$set(this.kinds, index, item);
        }
      });
    },

    //打开sku
    showParamsPopup(type) {
      if (window.location.href.indexOf("?showParams") == -1) {
        window.location.href = window.location.href + "?showParams";
      }
      this.btnStyle = type;
      this.popupVisible = true;
    },
    //sku Popup 按钮操作
    submit(type) {
      let isChecked = true;
      this.kinds.forEach(data => {
        if (data.checked == "") {
          isChecked = false;
        }
      });
      if (!isChecked) {
        Toast({ message: "请选择规格", position: "bottom", duration: 1000 });
        return;
      }
      for (var p of this.combinations) {
        if (p.combination == this.value) {
          this.combinationId = p.combinationId;
        }
      }
      if (type == "buyNow" || type == "buyNowConfirm") {
        sessionStorage.setItem(
          "productParams",
          escape(
            JSON.stringify({
              combinationId: this.combinationId,
              productNum: this.num,
              productId: this.goodsId,
              types: 1,
              goodsStyle: this.goodsDetail.goodsStyle
            })
          )
        );
        this.$router.push({ name: "buyNow" });
      } else if (type == "pushCart" || type == "pushCartConfirm") {
        // console.log("加入购物车")
        this.$http(this.$api.addCustomerCar, {
          productId: this.goodsId,
          combinationId: this.combinationId,
          productNum: this.num
        }).then(res => {
          console.log(res);
          if (res.code === 0) {
            Toast({
              message: "添加购物车成功",
              position: "bottom",
              duration: 1000
            });
            this.$store.commit("updateGoodsAmountInCart", res.data);
            this.goBack();
          }
        });
      }
      this.popupVisible = false;
    },

    handleClick() {
      this.$router.push("/ShoppingCart/" + this.goodsId);
    },
    //收藏
    handleClickCollect(e) {
      if (!this.goodsDetail.id) {
        return;
      }
      this.isCollect = !this.isCollect;
      this.$http(this.$api.modifyMyCollection, {
        id: this.goodsDetail.id,
        showLoading: 0
      }).then(res => {
        if (res.code == 0) {
          Toast({ message: "操作成功", position: "bottom", duration: 1000 });
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@mainColor: #f8e58c;
@auxiliaryColor: #fe6f6b;
.product_details {
  font-size: 14px;
  overflow-x: hidden;
}
.product_details_header {
  display: flex;
  height: 44px;
  line-height: 44px;
  background: -webkit-linear-gradient(
    left,
    #f8d68c,
    #f8e58c
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    right,
    #f8d68c,
    #f8e58c
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    right,
    #f8d68c,
    #f8e58c
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #f8d68c, #f8e58c); /* 标准的语法 */
  padding: 0 2%;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  color: #333;
  box-sizing: border-box;
}

.product_details_header div:nth-child(1) {
  width: 10%;
}

.product_details_header div:nth-child(2) {
  width: 80%;
}

.product_details_header div:nth-child(3) {
  width: 10%;
  line-height: 40px;
}

.product_details_header span {
  padding: 0 10px;
  display: inline-block;
}

.product_details_tab_selected {
  color: #25a3fe;
}
.product_details_content {
  position: absolute;
  width: 100%;
  top: 44px;
  bottom: 50px;
  overflow-y: auto;
  overflow-x: hidden;
}
.product_details_text_box {
  padding: 10px 2%;
  border-bottom: 1px #eee solid;
  border-image: inherit;
  line-height: 22px;
  background: #fff;
}
.product_details_name {
  color: #333;
}
.product_details .product_details_price {
  color: @auxiliaryColor;
}

.product_details_sale {
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 12px;
}
.product_details_commercial_specification {
  overflow: hidden;
  padding: 15px 2%;
  background-color: #fff;
  color: #666;
  margin-bottom: 5px;
}
.product_details_commercial_specification div:nth-child(1) {
  float: left;
}
.product_details_commercial_specification div:nth-child(2) {
  float: right;
}

.product_details_commercial_specification_popup_style {
  width: 100%;
  border-radius: 5px 5px 0 0;
}
.product_sku_top {
  width: 100%;
  i {
    float: left;
    display: block;
    width: 25vw;
    height: 25vw;
    margin-top: -5vw;
    margin-left: 5vw;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 0px 1px 1px #eee;
  }
  div {
    width: 60vw;
    margin-left: 35vw;
    margin-right: 5vw;
    line-height: 10vw;
    span {
      display: block;
    }
  }
}

.product_sku_params {
  margin: 10px 5% 40px;
  border-top: 1px #eee solid;
  max-height: 70vh;
  min-height: 50vh;
  overflow-y: auto;
  span {
    font-size: 16px;
    display: inline-block;
    padding: 10px 0;
  }
  ul {
    overflow: hidden;
    li {
      float: left;
      padding: 2px 10px;
      margin: 5px 10px 5px 0;
      border: 1px #ccc solid;
      color: #666;
      border-radius: 5px;
    }
  }
}
.params_checked {
  border: 1px @auxiliaryColor solid !important;
  color: @auxiliaryColor!important;
}
.product_sku_buy_num {
  margin: 10px 0;
  padding-top: 10px;
  border-top: 1px #eee solid;
  section {
    display: flex;
    justify-content: space-between;
  }
  .product_sku_stock {
    em {
      line-height: 30px;
      display: block;
    }
    i {
      display: block;
      color: #666;
      font-size: 12px;
    }
  }
}

.product_sku_btn {
  height: 40px;
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
  line-height: 40px;
  overflow: hidden;
  z-index: 10;
  li:nth-child(1) {
    width: 100%;
    background: #ff0036;
    color: #fff;
  }
  li:nth-child(2) {
    width: 100%;
    background: #ff0036;
    color: #fff;
  }
  li:nth-child(3) {
    width: 50%;
    background: #ff9500;
    color: #fff;
    float: left;
  }
  li:nth-child(4) {
    width: 50%;
    background: #ff0036;
    color: #fff;
    float: right;
  }
}

.product_details_footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 0 1px 0 #ccc;
  background: #fff;
}

.product_details_footer li:nth-child(1) {
  width: 20%;
  text-align: center;
  color: #666;
  font-size: 14px;
}

.product_details_footer li:nth-child(2) {
  width: 20%;
  text-align: center;
  font-size: 14px;
  color: #666;
}

.product_details_footer li:nth-child(3) {
  width: 30%;
  background-color: #ff9500;
  color: #fff;
  text-align: center;
}

.product_details_footer li:nth-child(4) {
  width: 30%;
  background-color: #ff0036;
  color: #fff;
  text-align: center;
}

.product_details_footer li i {
  display: block;
  height: 50%;
  line-height: 28px;
  font-size: 20px;
  padding: 2px 0 3px 0;
}

.product_details_footer li span {
  line-height: 12px;
  display: block;
}

.product_details_comment {
  padding: 10px 2%;
  color: #666;
  margin-bottom: 5px;
  background: #fff;
}
.product_details_comment_title {
  padding-bottom: 5px;
  overflow: hidden;
  border-bottom: 1px #eee solid;
  color: #333;
}
.comment_content {
  display: flex;
  padding: 10px 0 0;
  .comment_img_box {
    width: 10vw;
    height: 10vw;
    margin: 0 auto;
    border-radius: 50%;
    background: #eee;
    text-align: center;
    img {
      max-width: 100%;
      max-height: 100%;
      margin: 0 auto;
    }
  }
  .comment_info_box {
    width: 84vw;
    margin-left: 2vw;
    div {
      overflow: hidden;
      width: 100%;
      line-height: 10vw;
      i {
        display: block;
        float: left;
      }
      em {
        display: block;
        float: right;
      }
    }
    span {
      font-size: 12px;
      color: #999;
      line-height: 20px;
      letter-spacing: 1px;
    }
  }
}
.no_more_data {
  padding: 10px 0 5px;
}

.product_details_shop {
  padding: 10px 2%;
  background-color: #fff;
  margin-bottom: 5px;
  section {
    display: flex;
    i {
      width: 18vw;
      height: 18vw;
      line-height: 18vw;
      display: block;
      overflow: hidden;
      text-align: center;
      box-shadow: 0px 0px 1px 1px #eee;
      img {
        width: auto;
        max-width: 100%;
        max-height: 100%;
        margin: 0 auto;
      }
    }
    div {
      width: 50vw;
      margin-left: 2vw;
      em {
        display: inline-block;
        padding: 2px 10px;
        border: 1px @mainColor solid;
        border-radius: 5px;
        color: @auxiliaryColor;
      }
      span {
        display: block;
        padding: 5px 0;
      }
    }
    label {
      width: 26vw;
      text-align: right;
      span {
        display: inline-block;
        padding: 5px 10px;
        border: 1px @auxiliaryColor solid;
        border-radius: 25px;
        color: @auxiliaryColor;
      }
    }
  }
}
.shop_desc {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  color: #666;
  font-size: 12px;
  i {
    color: @auxiliaryColor;
  }
}
.goods_info {
  background-color: #fff;
  span {
    padding: 10px 2%;
    display: block;
    color: #333;
  }
  img {
    width: 100%;
  }
}
</style>
