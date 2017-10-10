<template>
  <header>
    <span class="header-icon" @click="returnBack(headTxt)"><img src="../../assets/img/returnBack.png" alt="return"></span>
    <span class="header-txt">{{headTxt}}</span>
  </header>
</template>

<script>
  export default {
    props:['headTxt'],
    methods:{
      returnBack:function (val) {
        if(val == '充值中心'){
          return;
        }
        window.history.back()
      }
    }
  }
</script>

<style scoped>
  header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.32rem;
    line-height: 1.32rem;
    background: #f1f2f3;
  }

  .header-icon {
    display: inline-block;
    width: 11.733%;
    padding: 0 2.4% 0 5.067%;
  }

  .header-icon img {
    width: 100%;
  }

  .header-txt {
    color: rgba(0, 0, 0, 0.9);
    font-size: 0.493rem;
  }
</style>
