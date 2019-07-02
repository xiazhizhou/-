<template>
  <div class="header_box">
    <div>
      <i class="icon-left iconfont" style="padding:10px;" v-show="showBack==true"  @click="goBack"></i>
    </div>
    <div>{{title}}</div>
    <div @click="rightAction">{{rightText}}</div>
  </div>
</template>

<script>
export default {
  props: ["showBack", "title", "rightText"],
  methods:{
    rightAction(){
      this.$emit('rightAction');
    }
  }
};
</script>

<style>
.header_box {
  width: 100%;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  color: #333;
  display: flex;
  background: -webkit-linear-gradient(left, #f8d68c , #f8e58c); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, #f8d68c , #f8e58c); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, #f8d68c , #f8e58c); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #f8d68c , #f8e58c); /* 标准的语法 */
}
.header_box div:nth-child(1) {
  width:20%;
  padding-left:10px;
}
.header_box div:nth-child(2) {
  width:60%;
  text-align:center;
}
.header_box div:nth-child(3) {
  width:20%;
  text-align:center;
  font-size:12px;
}
.header_box + div {
  position: absolute;
  width: 100%;
  top: 44px;
  bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>