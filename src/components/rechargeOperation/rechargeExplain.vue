<template>
<div>
  <v-header :headTxt="headTxt"></v-header>
  <section>
    <div class="list fold-close" v-for="(item ,index) in explainData">
      <div class="question" @click="fold(index)">
        <span>{{index+1}}.</span>
        <span class="txt">{{item.q}}</span>
        <span><img class="foldIcon" src="../../assets/img/fold-down.png" alt="icon"></span>
      </div>
      <transition name="fade">
        <div class="answer">{{item.a}}</div>
      </transition>
    </div>
  </section>
</div>
</template>

<script>
  import head from '../header/header.vue'
    export default {
      data() {
        return {
          headTxt:'充值说明',
          explainData:''
        }
      },
      created () {
	    	this.$http.get("/api/explain").then((res) => {
	    		var data = res.body.data
	    		this.explainData = data
	    	})
	    },
      methods:{
        fold:function(index){
          var el = document.getElementsByClassName('answer')
          var img = document.getElementsByClassName('foldIcon')
          for(let i=0;i<el.length;i++){
            el[i].style.display = 'none'
            img[i].setAttribute('src', '../../assets/img/fold-down.png')
          }
          var getImg = img[index].getAttribute('src');
          if(getImg == '../../assets/img/fold-down.png'){
          	console.log(img[index].getAttribute('src'))
          	console.log('开')
            img[index].setAttribute('src','../../assets/img/fold-up.png')
            getImg = img[index].getAttribute('src')
            el[index].style.display = 'block'
          }
          else {
          	console.log(img[index].getAttribute('src'))
          	console.log('关')
            img[index].setAttribute('src','../../assets/img/fold-down.png')
            getImg = img[index].getAttribute('src')
            el[index].style.display = 'none'
          }
        }
      },
      components:{
        'v-header':head
      }
    }
</script>

<style scoped>
  section {
    padding: 0 4.933%;
  }
  .list {
    padding: 0.467rem 0 0;
    border-bottom: 1px solid #ddd;
  }
  .fold-open {
    padding-bottom: 0.36rem;
  }
  .fold-close {
    padding-bottom: 0.24rem;
  }
  .question {
    margin-bottom: 0.24rem;
    color: rgba(0,0,0,0.9);
    font-size: 0.36rem;
  }
  .question span:first-child {
    vertical-align: top;
  }
  .question .txt{
    display: inline-block;
    width: 87.87%;
  }
  .question span:last-child{
    float: right;
  }
  .answer {
    display: none;
    padding:0 3.846%;
    color: rgba(0,0,0,0.45);
    font-size: 0.32rem;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active 在低于版本 2.1.8 中 */ {
    opacity: 0
  }
</style>
