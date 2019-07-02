<template>
  <div class="product_list">
    <div class="product_list_header">
      <div class="product_list_nav">
        <div @click="goBack">
          <i class="icon-left iconfont"></i>
        </div>
        <div v-show="!showInput"> {{headerTitle}}</div>
        <div v-show="showInput" class="searchInput">
          <form action="" style="width:100%">
            <input placeholder="商品搜索" type="search" @keypress="selectGoods" v-model="searchValue">
          </form>
          <span class="icon-search iconfont" style="font-size:20px;padding:5px;color: #666;" @click="search"></span>
        </div>
      </div>

      <ul class="product_list_subclassification">
        <li v-for="(item,index) in navbarTitleList" :key="index" @click="getProductList(item.id);selectedIndex = index" :class="{selected_class:selectedIndex==index}">
          {{item.name}}
        </li>
      </ul>
      <ul class="product_list_sort">
        <li @click="handleClickSearchSort(1)" :class="{search_sort:searchSort==1}">综合
          <i class="icon-sort iconfont"></i>
        </li>
        <li @click="handleClickSearchSort(2)" :class="{search_sort:searchSort==2}">销量
          <i class="icon-sort iconfont"></i>
        </li>
        <li @click="handleClickSearchSort(3)" :class="{search_sort:searchSort==3}">评分
          <i class="icon-sort iconfont"></i>
        </li>
      </ul>
    </div>
    <div class="product_list_content" :class="{product_list_content1:showInput}">
      <van-list v-model="loading" :finished="finished" @load="loadMore">
        <ul class="product_list_box" v-show="list.length>0">
        
          <li v-for="(item,index) in list" :key="index" @click="pushPath('/productDetails/'+item.id)">
            <div class="product_img_box">
              <img :src="item.goodsImg" class="not_save_img" alt="">
            </div>
            <div class="product_text_box">
              <div class="product_name text_hide">{{item.goodsName}}</div>
              <div class="product_price_box">
                <div class="product_price text_hide">RMB：{{item.goodsPriceRmb}}</div>
                <!-- <div class="product_price text_hide" style="padding: 0px 0px 0 0px;color:#25a3fe">
                  <span style="padding: 0px 0px 0 0px;color:#25a3fe">{{unit}}：</span>{{item.goodsPriceBcc}}
                </div> -->
              </div>
              <div class="sell_num_box">{{item.goodsSale}}人已付款</div>
            </div>
          </li>
        
        <div v-if="finished" class="no_more_data" style="float: left;width: 100%;padding: 10px 0;">已经到底了</div>
      </ul>
      </van-list>
      <div v-show="list.length==0&&showNoData" class="no_data">没有数据</div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      selectedIndex: '0',
      searchSort: 1,//排序方式
      headerTitle: "",
      navbarTitleList: [],

      loading: false, 
      finished: true,
      list: [],
      
      unit:'帮劵',

      parameter: {
        pageNo: 1,  //当前页
        pageSize: 10,//每页10条
        goodsType: 1,
        goodsStyle:'',
        goodsFirstClassify: "",
        goodsSecondClassify: "",
        orderType: "",
        goodsName: ""
      },
      showInput: false,
      showNoData: false
    }
  },
  components: {
  },
  mounted() {
    let id = JSON.parse(this.$route.params.params).id;
    if(id==''&&this.searchValue==''){
      this.goBack();
      return;
    }
    this.init();
  },
  computed: {
    searchValue: {
      get() {
        return this.$store.state.searchValue;  
      },
      set(newValue) {
        this.$store.state.searchValue = newValue
      }
    }
  },
  methods: {
    selectGoods(){
      if(event.keyCode=='13'){
        event.preventDefault();
        this.select()
      }
    },
    search() {
      if (this.searchValue != "") {
        this.parameter.goodsName = this.searchValue;
        this.getProductList();
      } else {
        Toast({ message: "请输入您要搜索的内容", position: "bottom"});
      }
    },
    init(){
      let type = JSON.parse(this.$route.params.params).type;
      if(type){
        this.parameter.goodsStyle = type;
        this.getProductList();
        this.showInput = true;
      }else if (this.searchValue) {
        this.parameter.goodsName = this.searchValue;
        this.getProductList();
        this.showInput = true;
      } else {
        this.getSearchData();
        
      }
    },
    getSearchData(){
      let id = JSON.parse(this.$route.params.params).id;
      let level = JSON.parse(this.$route.params.params).level;
      this.$http(this.$api.selectMallGoodsClassifyById, { id: id }).then((res) => {
        if (res.code === 0) {
          if (res.data) {
            // console.log(res)
            this.headerTitle = res.data.name;
            this.parameter.goodsFirstClassify = res.data.id;
            if (res.data.child) {
              this.navbarTitleList = res.data.child;
              if (level == 2) {   //传的是二级分类id
                this.navbarTitleList.forEach((item, index) => {
                  if (item.id == id) {
                    this.selectedIndex = index;
                    this.parameter.goodsSecondClassify = id;
                  }
                });
              } else {
                this.parameter.goodsSecondClassify = res.data.child[0].id;
              }
              this.getProductList(this.parameter.goodsSecondClassify);
            }
          }
        }
      });
    },
    handleClickSearchSort(type) {
      this.searchSort = type;
      this.parameter.orderType = this.searchSort
      this.list = [];
      this.getProductList(this.parameter.goodsSecondClassify)
    },
    getProductList: function(id) {
      this.parameter.showLoading = '';
      this.parameter.goodsSecondClassify = id;
      this.parameter.pageNo = 1;
      this.$http(this.$api.selectMallGoodsList, this.parameter)
      .then((res) => {
        if (res.code === 0) {
          if(res.data.total>0){
            this.list = res.data.list;
            if(this.parameter.pageNo!=res.data.pageCount){
              this.finished = false;
            }            
          }else{
            this.list = [];
            this.showNoData = true;
            this.allLoaded = true;
          }
        }
      })
    },
    loadMore(){
      this.parameter.showLoading = '0';
      this.parameter.pageNo+=1;
      this.$http(this.$api.selectMallGoodsList,this.parameter).then(res=>{
        if(res.code==0){
          this.list = this.list.concat(res.data.list);
          this.loading = false;
          if(this.parameter.pageNo==res.data.pageCount){
            this.finished = true;            
          }
        }
      })
    },
  }
}
</script>
<style lang="less" scoped>
@mainColor:#f8e58c;
@auxiliaryColor:#fe6f6b;
.product_list  .product_list_header {
  background-color: #fff;
  color: #737373;
  box-shadow: 0 0 1px 0 #AAA;
  position: fixed;
  width: 100%;
  z-index: 10;
}

.product_list .product_list_subclassification {
  display: -webkit-box;
  font-size: 14px;
  overflow-x: scroll;
}

.product_list .product_list_subclassification::-webkit-scrollbar {
  display: none;
}

.product_list .product_list_subclassification li {
  padding: 8px 10px;
  margin: 0 10px;
}

.product_list .selected_class {
  border-bottom: 1px @mainColor solid;
  color: @mainColor
}

.product_list .product_list_nav {
  display: flex;
  align-items: center;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 0 1px 0 @mainColor;
  color: #333;
  background: @mainColor;
}

.product_list .product_list_nav>div:nth-child(1) {
  width: 10%;
  text-align: center
}

.product_list .product_list_nav>div:nth-child(2) {
  width: 80%;
  text-align: center;
  font-size: 14px;
  color: #333;
}

.product_list .product_list_nav .searchInput {
  display: flex;
  align-items: center;
  width: 80%;
  font-size: 12px;
  padding-right: 5px;
  background: #fff;
  height: 32px;
  line-height: 32px;
  border-radius: 3px;
}

.product_list .product_list_nav .searchInput input {
  border: none;
  width: 100%;
  height: 20px;
  line-height: 20px;
  padding: 10px 5px;
  font-size: 14px;
  color: #333;
  background: #fff;
  /* padding-left: 5px; */
  /*box-shadow: 0 0 1px 0 #777;*/
  /*border-radius: 4px 0 0 4px;*/
}


/*input[type=search]::-webkit-search-cancel-button{
    -webkit-appearance: none;
    position: relative;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #bbb;
    background-image: url('../../assets/img/add.png');
    background-size:60% ;
    background-repeat:no-repeat;
    background-position: 4px 4px;
    transform: rotate(45deg);*/


/*-ms-transform: rotate(45deg);              IE 9 
    -webkit-transform: rotate(45deg);       Safari and Chrome 
    -o-transform: rotate(45deg);               Opera 
    -moz-transform: rotate(45deg);          Firefox */


/*}*/

.product_list .product_list_nav .icon_search {
  margin: 1px 0;
  padding: 0 5px;
  color: #777;
  font-family: mintui!important;
  font-size: 14px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  text-align: center;
  line-height: 22px;
  border-radius: 5px 0 0 5px;
}

.product_list .product_list_nav .icon_search:before {
  content: "\E604";
}

.product_list .product_list_sort {
  display: flex;
  font-size: 14px;
}

.product_list .product_list_sort li {
  padding: 8px 0px 8px 20px;
  text-align: center;
}

.product_list .search_sort {
  color: @mainColor!important;
}

.product_list .product_list_content {
  top: 116px;
  bottom: 0;
  position: absolute;
  /* overflow: auto; */
  width: 100%;
}

.product_list .product_list_content1 {
  top: 80px !important;
  width: 100%;
}

.product_list .product_list_content ul {
  overflow: hidden;
  background: #eee;
  padding: 5px 2vw;
}

.product_list .product_list_content li {
  width: 47vw;
  margin-right: 2vw;
  margin-bottom: 5px;
  float: left;
  font-size: 14px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.product_list_content li:nth-of-type(2n){
  margin-right: 0;
}
.product_list .product_list_content .product_img_box {
  text-align: center;
  height: 47vw;
  width: 47vw;
  overflow: hidden;
  text-align: center;
  line-height: 47vw;
}

.product_list .product_list_content .product_img_box img {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
}

.product_list .product_text_box {
  padding: 10px 2vw;
  width: 45vw;
}

.product_list .product_name {
  color: #666;
  height: 24px;
  line-height: 24px;
}

/* .product_list .product_price_box {
  display: flex;
  justify-content: space-between;
} */

.product_list .product_price {
  /* width: 50%; */
  color:@auxiliaryColor;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
}

.product_list .sell_num_box {
  /* text-align: right; */
  font-size: 12px;
  color: #999;
}

.product_list .product_list_sort .icono-downArrow:before {
  border-style: solid;
  border-width: 4px 0 4px 4px;
  border-color: transparent;
  border-left-color: inherit;
  left: 100%;
  right: auto;
}

.product_list .product_list_sort .icono-downArrow {
  width: 12px;
  height: 2px;
  -webkit-box-shadow: inset 0 0 0 2px;
  box-shadow: inset 0 0 0 1px;
  margin: 0;
  -webkit-transform: translateX(-3px);
  transform: translateX(-3px);
  transform: translateY(-3px) rotate(90deg);
}

.product_list .showNoData {text-align: center; color: #737373;font-size: 14px;padding: 5px 0;}
</style>
