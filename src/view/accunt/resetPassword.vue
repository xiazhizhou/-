<template>
  <div>
    <my-header title="密码找回" :showBack="true"/>
    <div class="reset_box">
      <section class="reset_input_box">
        <div v-show="resetActive==1">
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
          <button class="reset_btn" @click="goNext">下一步</button>
        </div>
        <div v-show="resetActive==2">
          <label for="">
            <i class="icon-password iconfont"></i>
            <section>
              <input type="text" placeholder="请填写新密码">
            </section>
          </label>
          <label for="">
            <i class="icon-confirm-password iconfont"></i>
            <section>
              <input type="text" placeholder="确认新密码">
            </section>
          </label>
          <button class="reset_btn">提交</button>
        </div>        
      </section>
     
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/header.vue";
export default {
  data(){
    return {
      resetActive:1
    }
  },
  components: {
    "my-header": myHeader,
  },
  created() {
    if (this.$route.fullPath.indexOf("?") != -1) {
      window.location.href = window.location.href.split('?')[0];
    }
  },
  watch: {
    $route(val, oldval) {
      if(val.fullPath.indexOf("?") == -1){
        this.resetActive = 1;
      }
    }
  },
  methods:{
    goNext(){
      if (window.location.href.indexOf("?showNext") == -1) {
        window.location.href = window.location.href + "?showNext";
      }
      this.resetActive = 2;
    }
  }
}
</script>

<style lang="less" scoped>
@mainColor:#f8e58c;
@auxiliaryColor:#fe6f6b;
.reset_box{
  background-color: #fff;
}
.reset_input_box{
  margin-top: 15vh;
  div{
    width: 80%;
    margin-left: 10%;
    label{
      display: flex;
      align-items: center;
      height: 44px;
      background: #f2f2f2;
      margin-bottom: 20px;
      padding: 0 10px;
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
        padding-left: 10px;
        border-left: 1px #bbb solid;
        input{
          width: 100%;
          border:none;
          background: #f2f2f2;
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

.reset_btn{
  background: @mainColor;
  margin-top: 50px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  width: 100%;
  color: #666;
  line-height: 40px;
}

</style>
