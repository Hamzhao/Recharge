<template>
  <div>
    <v-header :headTxt="headTxt"></v-header>
    <section>
      <div class="search" v-if="!sch">
        <input type="text" v-model="val" @input="inputEvent()" placeholder="输入手机号码/订单编号">
        <button :class="disable?'btnActive':'btnNoActive'" @click="search()" disabled>查询</button>
      </div>
      <div class="searchRes" v-else>
        <div class="rsList clearfix">
          <div class="l clearfix">
            <div class="tlt">中国移动30元话费充值</div>
            <div class="desc">
              <span>手机号码13119527637</span>
              <span>2017-9-18 17:47:21</span>
            </div>
          </div>
          <div class="r fr clearfix">
            <div class="price"><span>30</span>元</div>
            <span class="state-s">交易成功</span>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
  import head from '../header/header.vue'
  export default {
    data () {
      return {
        headTxt:'充值记录',
        val:'',
        disable:false,
        sch:false
      }
    },
    methods:{
      search:function(){
        console.log('查询')
        this.sch = true
      },
      inputEvent:function () {
        let btn = document.getElementsByTagName('button')[0];
        if(this.val){
          btn.removeAttribute('disabled')
          this.disable = true
        }else {
          btn.setAttribute('disabled','disabled')
          this.disable = false
        }
        console.log(this.val)
      }
    },
    components:{
      'v-header':head
    }
  }
</script>

<style scoped>
  .search {
    padding: 0.507rem 0 0;
  }
  .search input {
    display: block;
    width: 89.733%;
    height: 1.013rem;
    margin: 0 auto 0.827rem;
    padding: 0 4.755%;
    font-size: 0.413rem;
    border: 1px solid #bcbcbc;
    border-radius: 0.493rem;
  }
  .search input::-webkit-input-placeholder {
    color: rgba(1,1,1,0.3);
  }
  .search button {
    display: block;
    width: 89.733%;
    height: 1.013rem;
    margin: 0 auto;
    color: #fff;
    font-size: 0.413rem;
    border-radius: 0.493rem;
    border: none;
  }
  .btnNoActive {
    background: #6d9ffd;
  }
  .btnActive {
    background: #2e76fc;
  }

  .rsList {
    padding: 0.373rem 5.067% 0.387rem 4.8%;
    border-bottom: 1px solid #bfc3c7;
  }
  .rsList span {
    display: block;
  }
  .l {
    display: inline-block;
  }
  .r span{
    text-align: right;
  }
  .tlt {
    color: rgba(0,0,0,0.9);
    font-size: 0.387rem;
  }
  .desc {
    color: rgba(0,0,0,0.45);
    font-size: 0.32rem;
  }
  .desc span{
    margin-top: 0.2rem;
  }
  .r {
    padding: 0.253rem 0 0;
  }
  .price {
    margin-bottom: 0.413rem;
    color: #ff9c5f;
    font-size: 0.32rem;
    text-align: right;
  }
  .price span{
    display: inline-block;
    font-size:0.44rem;
  }
  .state-f{
    color: #666;
    font-size: 0.32rem;
  }
  .state-s{
    color: #2e76fc;
    font-size: 0.32rem;
  }
</style>
