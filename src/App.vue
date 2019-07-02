<template>
  <div id="app">
    <div>
      <transition name="slide-left">
        <!-- <keep-alive> -->
          <router-view class="child-view"></router-view>
        <!-- </keep-alive> -->
      </transition>
    </div>
   
    <my-footer v-show="needShowFooter"></my-footer>
  </div>
</template>

<script>
import myFooter from "@/components/footer.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components:{
    "my-footer": myFooter    
  },
  computed: {
    needShowFooter(){
      return this.$store.state.needShowFooter;      
    },
  },
  watch: {
    '$route' (to, from) {
      if(to.name == "mall"||to.name == "shoppingCart"||to.name == "my"){
        this.$store.commit("updateNeedShowFooter", true);
      }else{
        setTimeout(()=>{
          this.$store.commit("updateNeedShowFooter", false);       
        },300)
      }
    },
  },
};
</script>

<style lang="less">
#app{
  height: 100%;
  min-height: 100%;
  width: 100%;
  overflow-x: hidden;
}
.child-view {  
  position: absolute;  
  left: 0;  
  top: 0; 
  bottom: 0; 
  width: 100%;   
  // height: 100%;
  overflow-y: scroll;
  transition: all .5s cubic-bezier(.55,0,.1,1); 
}  
.slide-left-enter, .slide-right-leave-active {  
  opacity: 0;  
  -webkit-transform: translate(30px, 0);  
  transform: translate(30px, 0);  
}  
.slide-left-leave-active, .slide-right-enter {  
  opacity:0;  
  -webkit-transform: translate(-30px, 0);  
  transform: translate(-30px, 0);  
}
</style>
