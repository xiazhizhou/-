<template>
  <div class="my">
    <!-- 头部栏 -->
    <div class="top_heand">
      <!-- 个人信息 -->
      <div class="personinfo">
        <div class="per-img"></div>
        <div class="per-name"><span class="per-nameid">追风筝的小人<span class="set"></span></span><br>
          <span class="per-text">个人签名: 个性签名个性签名</span>
        </div>
      </div>
      <!-- 积分信息 -->
      <div class="top_body">
        <ul>
          <li>
            <span>100.00</span><br>
            <span>红积分</span>
          </li>
          <li>
            <span>100.00</span><br>
            <span>白积分</span>
          </li>
          <li>
            <span>100.00</span><br>
            <span>可用积分</span>
          </li>
          <li>
            <span>100.00</span><br>
            <span>信用值</span>
          </li>
        </ul>
      </div>
      <!-- 物流休息 -->
      <div class="top_footer">
        <ul>
          <li>
            <span class="icon ion-android-desktop" style="background-color:#9a8ab8;"></span><br>
            <span>代付款</span>
          </li>
          <li>
            <span class="icon ion-android-desktop" style="background-color:#7083ae;"></span><br>
            <span>代发货</span>
          </li>
          <li>
            <span class="icon ion-android-desktop" style="background-color:#e9adad;"></span><br>
            <span>代收货</span>
          </li>
          <li>
            <span class="icon ion-android-desktop" style="background-color:#a0bc8b;"></span><br>
            <span>代评价</span>
          </li>
          <li>
            <span class="icon ion-android-desktop" style="background-color:#eca867;"></span><br>
            <span>退换/售后</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 功能列表 -->
    <div class="cell">
      <van-cell-group>
        <van-cell value="" icon="records" is-link>
          <template slot="title">
            <span class="van-cell-text">我的订单</span>
          </template>
        </van-cell>
        <van-cell @click="pushPage('/mycollect')" value="" icon="records" is-link>
          <template slot="title">
            <span class="van-cell-text">我的收藏</span>
          </template>
        </van-cell>
        <van-cell value="" icon="records" is-link>
          <template slot="title">
            <span class="van-cell-text">我的足迹</span>
          </template>
        </van-cell>
      </van-cell-group>

      <van-cell-group>
        <van-cell value="" icon="records" is-link>
          <template slot="title">
            <span class="van-cell-text">收货信息</span>
          </template>
        </van-cell>
        <van-cell value="" icon="records" is-link>
          <template slot="title">
            <span class="van-cell-text">密码设置</span>
          </template>
        </van-cell>
      </van-cell-group>

      <van-cell-group>
        <van-cell value="" icon="records" is-link>
          <template slot="title">
            <span class="van-cell-text">消息中心</span>
          </template>
        </van-cell>
        <van-cell value="" icon="records" is-link>
          <template slot="title">
            <span class="van-cell-text">我的小蜜</span>
          </template>
        </van-cell>
        <van-cell value="" icon="records" is-link>
          <template slot="title">
            <span class="van-cell-text">关于我们</span>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("updateNeedShowFooter", true);
    this.$store.commit("updateSelected", 2);
  },
  methods: {
    pushPage(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.my {
  background-color: #f4f3f1;
  .top_heand {
    width: 100%;
    height: 300px;
    overflow: hidden;
    background: -moz-linear-gradient(0 100% -60deg, #ffbf29 0%, #f9e58c 100%);
    background: -webkit-gradient(
      linear,
      0 0,
      100% 100%,
      from(#ffbf29),
      to(#f9e58c)
    );
    position: relative;
    .personinfo {
      .per-img {
        display: inline-block;
        width: 80px;
        height: 80px;
        background-color: #ccc;
        border-radius: 50%;
        position: absolute;
        left: 5%;
        top: 10%;
      }
      .per-name {
        display: inline-block;
        position: absolute;
        left: 32%;
        top: 18%;
        .per-nameid {
          display: inline-block;
          margin-bottom: 5%;
          font-size: 15px;
          font-weight: 700;
        }
      }
      .per-text {
        font-size: 12px;
      }
    }
  }
  .top_body {
    position: absolute;
    left: 0%;
    top: 45%;
    width: 100%;
    text-align: center;
    ul {
      li {
        float: left;
        width: 25%;
      }
    }
  }
  .top_footer {
    position: absolute;
    left: -25%;
    bottom: -5%;
    width: 150%;
    height: 90px;
    padding-bottom: 20px;
    text-align: center;
    background-color: #fff;
    border-radius: 50%;
    ul {
      padding-top: 20px;
      li:first-child {
        padding-left: 17%;
      }
      li {
        float: left;
        width: 13%;
        font-size: 12px;
        span:first-child {
          width: 35px;
          height: 30px;
          border-radius: 13px;
          display: inline-block;
          // background-color: #9a8ab8;
          font-size: 20px;
          color: #f8e48d;
        }
      }
    }
  }
  .cell {
    margin-top: 10px;
    .van-cell-group {
      margin-bottom: 10px;
      .van-cell {
        height: 40px;
        line-height: 40px;
      }
    }
    .van-cell-group:last-child {
      margin-bottom: 50px;
    }
  }
}

.my /deep/ .van-cell__left-icon {
  line-height: 40px;
  margin-left: 10px;
}
.my /deep/ .van-cell__right-icon {
  line-height: 40px;
  margin-right: 10px;
}
</style>
