<template>
  <div class="social_contact">
    社交
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  mounted(){
    this.$store.commit("updateNeedShowFooter", true);
    this.$store.commit("updateSelected", 2);
  }
}
</script>

<style lang="less" scoped>
.social_contact{
  bottom:50px!important;
}
</style>
