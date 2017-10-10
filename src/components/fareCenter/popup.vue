<template>
  <div v-if="status">
    <div class="bg"></div>
    <div class="popup" v-if="selectVal">
      <div class="title">支付</div>
      <div class="payContent">
        <div class="payMsg">
          <div class="prodList">
            <span class="prodName">商品名称</span>
            <span class="prodContent">{{selectTxt}}</span>
          </div>
          <div class="prodList">
            <span class="prodName">商品价格</span>
            <span class="prodContent">{{selectVal}}元</span>
          </div>
          <div class="prodList">
            <span class="prodName">优惠券</span>
            <span class="prodContent">{{discount>0?-discount:discount}}元<img src="../../assets/img/rightTurn.png" alt="icon"></span>
          </div>
          <div class="prodList">
            <span class="prodName">需支付</span>
            <span class="prodContent">{{selectVal - discount}}元</span>
          </div>
        </div>
        <div class="payType">
          <div class="payTypeList" v-for="(item,index) in payType" @click="checkEvent(index)">
            <span class="type-icon">
              <img :src="item.icon" alt="icon-wechat">
            </span>
            <span class="type-name">{{item.name}}</span>
            <span class="type-describtion">{{item.desc}}</span>
            <span class="checkBox">
              <img v-if="item.status == '0'" src="../../assets/img/no-tick.png" alt="icon">
              <img v-else src="../../assets/img/tick.png" alt="icon">
            </span>
            <input class="typeIpt" type="radio" name="Type" value="item.name">
          </div>
        </div>
        <div class="pay-btn">
          <button class="cancle" @click="cancleOrder()">取消</button>
          <button class="toPay" @click="toPay()">立即支付</button>
        </div>
      </div>
    </div>
    <div class="popup" v-else>
      <div class="title">订单支付失败，请稍后重试</div>
      <div>
        <button class="error" @click="cancleOrder()">我知道了</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        checkIcon: '',
        aliChecked: false,
        wcChecked: true,
        wechat: true,
        alipay: false,
        selectVal: '',
        selectTxt: '',
        selectPay: '微信',
        status: '',
        discount: 3,
        payStatus: true,
        payType:''
      }
    },
    methods: {
      checkEvent: function (idx) {
        console.log(this.payType[idx])
        for(var i=0;i<this.payType.length;i++){
        	this.payType[i].status = 0;
        }
        this.payType[idx].status = 1;
      },
      cancleOrder: function () {
        this.status = false
      },
      toPay: function () {
        this.$root.bus.$emit('toPay', this.payStatus)
        this.status = false
      }
    },
    created() {
      let _this = this;
      this.$root.bus.$on('status', function (val) {
        _this.status = val;
      })
      this.$root.bus.$on('selectVal', function (val) {
        _this.selectVal = val;
      })
      this.$root.bus.$on('selectTxt', function (val) {
        _this.selectTxt = val;
      })
      this.$http.get("/api/payType").then((res) => {
    		var data = res.body.data
    		this.payType = data
    	})
    }
  }
</script>

<style scoped>
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .popup {
    position: fixed;
    left: .8%;
    bottom: 0;
    width: 98.4%;
    background: #ffffff;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
  }

  .title {
    padding: .427rem 0 .373rem;
    color: #000;
    font-size: .44rem;
    text-align: center;
    border-bottom: 1px solid #bfc3c7;
  }

  .payContent {
    padding: 0 .427rem 0 .387rem;
  }

  .payMsg {
    padding: 0 0 .4rem;
    border-bottom: 1px solid #bfc3c7;
  }

  .payType {
    border-bottom: 1px solid #bfc3c7;
  }

  .payTypeList {
    padding: 0.267rem 0;
    border-bottom: 2px solid #bfc3c7;
  }

  .payTypeList:last-child {
    border-bottom: none;
  }

  .prodList {
    margin-top: .4rem;
    font-size: .413rem;
  }

  .prodName {
    color: rgba(0, 0, 0, 0.45);
  }

  .prodContent {
    float: right;
    height: .413rem;
    color: #ff9c5f;
  }

  .prodContent img {
    width: 0.213rem;
    margin-left: 0.133rem;
  }

  .type-icon {
    display: inline-block;
    width: 10.059%;
    margin-right: 3.254%;
  }

  .type-icon img,
  .checkBox img {
    width: 100%;
  }

  .type-name {
    display: inline-block;
    line-height: .907rem;
    margin-right: 5.917%;
    color: rgba(0, 0, 0, 0.9);
    font-size: 0.413rem;
    vertical-align: top;
  }

  .type-describtion {
    display: inline-block;
    width: 48%;
    line-height: .907rem;
    color: rgba(0, 0, 0, 0.3);
    font-size: 0.32rem;
    vertical-align: top;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .checkBox {
    display: inline-block;
    width: 5.621%;
    line-height: .907rem;
    float: right;
  }

  .checkBox img {
    vertical-align: middle;
  }

  .typeIpt {
    visibility: hidden;
  }

  .pay-btn {
    padding: .747rem 0 .56rem;
  }

  button {
    width: 44.675%;
    height: 1.053rem;
    font-size: .413rem;
    border-radius: .5rem;
  }

  .cancle {
    margin-left: 2.219%;
    color: #2e76fc;
    background: #ffffff;
    border: 1px solid #bfc3c7;
  }

  .error {
    display: block;
    margin: .747rem auto .56rem;
    color: #2e76fc;
    background: #ffffff;
    border: 1px solid #bfc3c7;
  }

  .toPay {
    float: right;
    margin-right: 2.219%;
    color: #ffffff;
    background: #2e76fc;
    border: 1px solid #1db272;
  }
</style>
