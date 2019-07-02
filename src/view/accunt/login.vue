<template>
  <div style="background-color:#fff">
    <div class="login_title">登录</div>
    <section class="login_title_box">
      <span :class="{'checked':isChecked=='1'}" @click="isChecked=1">短信登录</span>
      <span :class="{'checked':isChecked=='2'}" @click="isChecked=2">密码登录</span>
    </section>
    <section class="login_input_box">
      <div v-show="isChecked=='1'">
        <label for="">
          <i class="icon-phone iconfont"></i>
          <section>
            <input type="text" placeholder="请填写手机号">
          </section>
        </label>
        <label for="">
          <i class="icon-sms iconfont"></i>
          <section>
            <input type="text" placeholder="短信验证码">
          </section>
          <span>获取验证码</span>
        </label>
      </div>
      <div v-show="isChecked=='2'">
        <label for="">
          <i class="icon-phone iconfont"></i>
          <section>
            <input type="text" placeholder="请填写手机号">
          </section>
        </label>
        <label for="">
          <i class="icon-password iconfont"></i>
          <section>
            <input type="text" placeholder="请填写密码">
          </section>
        </label>
        <label for="">
          <i class="icon-ver-code iconfont"></i>
          <section>
            <input type="text" placeholder="验证码">
          </section>
          <em class="ver_code" @click="refreshCode">
            <ver-code :identifyCode="identifyCode"></ver-code>
          </em>
        </label>
      </div>
    </section>
    <div class="login_btn_box">
      <span>登录</span>
      <label for="">
        <em @click="pushPath('/resetPassword')">找回密码</em>
        <em @click="pushPath('/register')">立即注册</em>
      </label>
    </div>
    <div class="third_party_login">
      <label for="">第三方登录</label>
      <section>
        <i class="icon-qq iconfont" style="color:#00a3ee"></i>
        <i class="icon-wx iconfont" style="color:#008a1e"></i>
        <i class="icon-weibo iconfont" style="color:#e30100"></i>
      </section>
    </div>
  </div>
</template>

<script>
import verCode from '@/components/verCode'
export default {
  data(){
    return{
      isChecked:1,

      //验证码随机生成的数字
      identifyCodeArr: "1234567890abcdefghijklmnopqrstuvwxyz",
      //生成的四位数
      identifyCode: ""
    }
  },
  components:{
    'ver-code':verCode
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodeArr, 4);
  },
  methods:{
    //验证码方法
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodeArr, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodeArr[
          this.randomNum(0, this.identifyCodeArr.length)
        ];
      }
    },
  }
}
</script>

<style lang="less" scoped>
@mainColor:#f8e58c;
@auxiliaryColor:#fe6f6b;
.login_title{
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #fff;
}
.login_title_box{
  overflow: hidden;
  padding: 5px 20%;
  background-color: #fff;
  color: #666;
  span{
    width: 50%;
    height: 30px;
    line-height: 30px;
    display: block;
    float: left;
    box-sizing: border-box;
    text-align: center
  }
  span:first-child{
    border-right: 1px #eee solid;
  }
  .checked{
    color: #FF9800;
  }
}
.login_input_box{
  margin-top: 15vh;
  div{
    width: 80%;
    margin-left: 10%;
    label{
      display: flex;
      align-items: center;
      height: 44px;
      border-bottom: 1px #eee solid;
      margin-bottom: 20px;
      i{
        max-width: 30px;
        height: 30px;
        margin-right: 10px;
        font-size: 30px;
        color: #666;
        // background-color: #eee;
        flex: 1;
      }
      section{
        flex: 1;
        input{
          width: 100%;
          border:none;
          color: #666;          
        }
      }
      span{
        flex: 1;
        padding: 5px 10px;
        // border:1px @auxiliaryColor solid;
        border-radius: 4px;
        max-width: 70px;
        // color:  @auxiliaryColor;
        color: #0aa520;
      }
      .ver_code{
        flex: 1;
        max-width: 100px;
        div{
          width: 100%;
          margin: 0;
        }
      }
    }
  }
}
.login_btn_box{
  padding: 10px 10%;
  span{
    display: block;
    text-align: center;
    padding: 10px;
    background: @mainColor;
    margin-bottom: 10px;
    font-size: 16px;
    border-radius: 4px;
  }
  label{
    display: flex;
    justify-content: space-between;
    color: @auxiliaryColor;
  }
}
.third_party_login{
  position: absolute;
  bottom: 0;
  height: 120px;
  margin: 0 10%;
  width: 80%;
  border-top: 1px #eee solid;
  text-align: center;
  label{
    padding: 0 10px;
    background: #fff;
    top: -10px;
    position: relative;
    color: #999;
    font-size: 12px;
  }
  section{
    line-height: 100px;
    display: flex;
    margin:0 15%;
    justify-content: space-between; 
    i{
      font-size: 30px;
    }
  }
}
</style>

