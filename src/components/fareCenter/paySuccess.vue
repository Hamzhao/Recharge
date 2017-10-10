<template>
  <div class="resCtn" v-if="!payStatus">
    <div class="resHead">
      <span class="icon">
        <img src="../../assets/img/paySuccess.png" alt="icon">
      </span>
      <p>支付成功</p>
    </div>
    <div class="resCtx">
      <div class="ctx-list">
        <span class="l">订单编号</span>
        <span class="r">100020170915190536</span>
      </div>
      <div class="ctx-list">
        <span class="l">手机号码</span>
        <span class="r">{{inputVal}}</span>
      </div>
      <div class="ctx-list">
        <span class="l">商品名称</span>
        <span class="r">{{proName}}</span>
      </div>
      <div class="ctx-list">
        <span class="l">下单时间</span>
        <span class="r">{{time}}</span>
      </div>
      <div class="ctx-list">
        <span class="l">支付方式</span>
        <span class="r">{{payType}}</span>
      </div>
      <div class="ctx-list">
        <span class="l">支付金额</span>
        <span class="r price">{{price - discount}}</span>
      </div>
    </div>
    <div class="returnBack">
      <button @click="returnBack()">返回</button>
    </div>
  </div>
</template>

<script>
  export default {
    props:['inputVal'],
    data () {
      return {
        payStatus: false,
        proName: '移动全国30M',
        payType: '微信支付',
        time: '',
        price: '100',
        discount: '3'
      }
    },
    mounted() {
      var date = new Date();
      var seperator1 = "-";
      var seperator2 = ":";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
      this.time = currentdate;
    },
    methods: {
      returnBack: function () {
        this.$root.bus.$emit('payRes', this.payStatus)
        this.$root.bus.$emit('statu', 400)
        this.$root.bus.$emit('val', '')
        this.$root.bus.$emit('inputIcon', './static/img/user.png')
      }
    }
  }
</script>

<style scoped>
  .resCtn {
    background: #fff;
  }

  .resHead {
    padding: 0.88rem 0 0.933rem;
    border-bottom: 1px solid #bfc3c7;
  }

  .resHead .icon {
    display: block;
    width: 14%;
    margin: 0 auto 0.387rem;
  }

  .resHead .icon img {
    width: 100%;
  }

  .resHead p {
    color: #666;
    font-size: 0.44rem;
    text-align: center;
  }

  .ctx-list {
    padding: 0.373rem 5.333% 0.52rem 4.933%;
    border-bottom: 1px solid #bfc3c7;
  }

  .ctx-list .l {
    color: rgba(0, 0, 0, 0.45);
    font-size: 0.32rem;
  }

  .ctx-list .r {
    float: right;
    color: rgba(0, 0, 0, 0.9);
    font-size: 0.387rem;
  }

  .ctx-list .price {
    color: #ff9c5f;
  }

  .returnBack {
    padding: 0.72rem 0 2.28rem;
    text-align: center;
  }

  .returnBack button {
    width: 89.867%;
    height: 1.013rem;
    color: #fff;
    font-size: 0.413rem;
    background: #2e76fc;
    border: 1px solid #2e76fc;
    border-radius: 0.493rem;
  }
</style>
