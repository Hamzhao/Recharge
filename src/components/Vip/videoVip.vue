<template>
  <div>
    <v-header :headTxt="headTxt"></v-header>
    <section>
      <div class="showImg">
        <img src="../../assets/img/pic2.png" alt="showImg">
      </div>
      <div class="tab">
        <div :class="fold?'l l-close':'l'">
          <div class="source active">芒果TV<span class="p-icon"><img src="../../assets/img/libao.png" alt=""></span></div>
          <div class="source">爱奇艺<span class="p-icon"></span></div>
          <div class="source">腾讯<span class="p-icon"></span></div>
          <div class="source">优酷<span class="p-icon"></span></div>
          <div class="source">斗鱼<span class="p-icon"></span></div>
        </div>
        <span class="r" @click="foldTab"><img v-show="fold" src="../../assets/img/vdoVipdown.png" alt=""><img v-show="!fold" src="../../assets/img/vdoVipup.png" alt="vdoVipup"></span>
      </div>
      <div class="user">
        <input type="text" v-model="userVal" placeholder="请输入会员账号">
      </div>
      <div class="ctx">
        <div class="type">
          <router-link tag="span" to="">
            <a class="active">PC移动影视</a>
          </router-link>
          <router-link tag="span" to="">
            <a>全屏影视</a>
          </router-link>
        </div>
        <div class="mark">
          <span>手机+iPad+电脑</span>
          <span>电视+手机+iPad+电脑</span>
        </div>
        <div class="listCtx clearfix">
          <div class="list">
            <div class="tlt ds-ibl">
              <div>PC移动半年卡</div>
              <span>日付0.40元</span>
            </div>
            <div class="price ds-ibl">
              <span class="aft-dis">72.00元</span><span class="ticket ds-ibl">劵</span><span class="discount ds-ibl">惠</span>
              <div><del>80元</del></div>
            </div>
            <div class="btn fr">
              <button>购买</button>
            </div>
          </div>
        </div>
      </div>
      <div class="operation">
        <router-link tag="span" to="/explain/rechargeRecord">
          <span>充值记录</span>
        </router-link>
        <span class="line"></span>
        <router-link tag="span" to="/explain/rechargeExplain">
          <span>充值说明</span>
        </router-link>
      </div>
    </section>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import head from '../header/header.vue'
  import foot from '../footer/footer.vue'
  export default {
    data () {
      return {
        headTxt:'影视会员',
        fold:true,
        userVal:''
      }
    },
    methods:{
      foldTab:function(){
        this.fold = !this.fold
      }
    },
    components:{
      'v-header':head,
      'v-footer': foot
    }
  }
</script>

<style scoped>
  .tab {
    padding: 0.293rem 5.067% 0;
    background: #f1f2f3;
  }
  .l{
    display: inline-block;
    width: 80.12%;
    font-size: 0;
  }
  .l-close{
    height: 0.733rem;
    overflow: hidden;
  }
  .source{
    display: inline-block;
    margin-right: 9.108%;
    padding-bottom: 0.333rem;
    color: rgba(0,0,0,0.9);
    font-size: 0.413rem;
  }
  .source:nth-child(4n){
    margin-right:0
  }
  .tab .active{
    color: #2e76fc;
  }
  .p-icon {
    display: inline-block;
    width: 0.227rem;
  }
  .p-icon img{
    vertical-align: top;
  }
  .r{
    display: inline-block;
    float: right;
    width: 3.858%;
    padding-top: 0.213rem;
    font-size: 0;
    vertical-align: top;
  }
  .user {
    width: 90.13%;
    margin: 0.307rem auto 0;
    border-bottom: 1px solid #bcbcbc;
  }
  .user input{
    width: 100%;
    padding: 0.187rem 0;
    font-size: 0.387rem;
    border: none;
  }
  .user input::-webkit-input-placeholder{
    color: #ddd;
  }
  .type {
    width: 61.333%;
    margin: 0.827rem auto 0;
    font-size: 0;
    border: 1px solid #2e76fc;
    border-radius: 10px;
    overflow: hidden;
  }
  .type a{
    display: inline-block;
    width: 50%;
    padding: 0.227rem 0 0.2rem;
    text-align: center;
    font-size: 0.347rem;
  }
  .type .active{
    color: white;
    background: #2e76fc;
  }
  .mark{
    width: 61.333%;
    margin: 0.213rem auto 0;
    font-size: 0;
  }
  .mark span{
    display: inline-block;
    width: 50%;
    color: rgba(0,0,0,0.45);
    font-size: 0.267rem;
    text-align: center;
  }
  .listCtx {
  	margin-top: 0.2rem;
  	padding: 0 4.933%;
  	border-top: solid 1px #BFC3C7;
  }
  .list {
    font-size: 0;
    padding: .333rem 0;
    border-bottom: solid 2px #BFC3C7;
  }
  .tlt {
    max-width: 28.041%;
    margin-right: 7.121%;
  }
  .tlt div{
    color: rgba(0,0,0,0.9);
    font-size: 0.387rem;
  }
  .tlt span{
  	display: block;
  	margin-top: 0.16rem;
    color: rgba(0,0,0,0.45);
    font-size: 0.32rem;
  }
  .price {
  	width: 32.047%;
  }
  .price span {
  	color: white;
  	font-size: 0.213rem;
  }
  .price .aft-dis{
  	display: inline-block;
  	width: 68.981%;
  	color: #FF9C5F;
  	font-size:  0.387rem;
  }
  .price del {
  	display: block;
  	margin-top: 0.16rem;
  	color: rgba(0,0,0,0.45);
  	font-size: 0.32rem;
  }
  .price .ticket {
  	width: 14.351%;
  	margin-right: 2%;
  	padding: 0.08rem 0 0.04rem;
  	text-align: center;
  	background: #ff5252;
  	border-left:dotted 3px #FFFFFF;
  	border-right:dotted 3px #FFFFFF;
  	box-sizing: border-box;
  }
  .price .discount {
  	width: 14.351%;
  	padding: 0.08rem 0 0.04rem;
  	text-align: center;
  	background: #ff8800;
  }
  .btn{
  	width: 17.36%;
  	margin-top: 0.2rem;
  }
  .btn button {
  	width: 100%;
  	height: 0.68rem;
  	color: #2E76FC;
  	font-size: 0.293rem;
 		background: #fff;
 		border: solid 1px #BFC3C7;
 		border-radius: 0.333rem;
  }
</style>
