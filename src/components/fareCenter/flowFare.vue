<template>
  <div class="recharge-lists" v-if="statu == '400'">
    <div class="recharge-list pre-price" v-for="item in showPrice">{{item}}</div>
  </div>
  <div class="recharge-lists" v-else-if="statu == '200'">
    <div class="recharge-list disc-price" v-for="item in price" :data-val="'移动全国'+item.realP+'流量'" @click="selectItem(item.showP,item.realP)">
      {{item.showP}}
      <span :data-val="'移动全国'+item.realP+'流量'">售价:{{item.realP}}元</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['statu'],
    data () {
      return {
        showPrice: '',
        price: '',
        selectVal: ''
      }
    },
    created () {
    	this.$http.get("/api/flowFare").then((res) => {
    		var data = res.body.data
    		this.showPrice = data.showPrice
    		this.price = data.price
    	})
    },
    methods: {
      selectItem: function (show,real) {
        var txt = '移动全国'+show+'流量'
        var val = real
        this.$root.bus.$emit('status', true)
        this.$root.bus.$emit('selectVal', val)
        this.$root.bus.$emit('selectTxt', txt)
      }
    }
  }
</script>

<style scoped>
  .recharge-lists {
    margin: 0.387rem 0 0.2rem;
    font-size: 0;
    padding-bottom: 0.12rem;
  }

  .recharge-list {
    display: inline-block;
    width: 31.508%;
    margin-right: 2.514%;
    margin-bottom: .227rem;
    color: rgba(0, 0, 0, 0.45);
    font-size: 0.413rem;
    text-align: center;
    border: 1px solid #bfc3c7;
    border-radius: 10px;
  }

  .pre-price {
    padding: 0.613rem 0;
  }

  .disc-price {
    padding: 0.333rem 0 0.32rem;
    color: rgba(0, 0, 0, 0.9);
  }

  .disc-price span {
    display: block;
    margin-top: 0.16rem;
    color: #ff9c5f;
    font-size: 0.32rem;
  }

  .recharge-list:nth-child(3n) {
    margin-right: 0;
  }
</style>
