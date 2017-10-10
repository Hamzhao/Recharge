<template>
  <div>
    <v-header :headTxt="headTxt"></v-header>
    <section v-if="!payStatus">
      <div class="showImg">
        <img src="../../assets/img/pic1.png" alt="showImg">
      </div>
      <div class="tab-ctn">
        <router-link tag="span" to="/recharge/telFare" class="telFare">
          <a>话费充值</a>
        </router-link>
        <router-link tag="span" to="/recharge/flowFare" class="flowFare fr">
          <a>流量充值</a>
        </router-link>
      </div>
      <div class="recharge-ctn">
        <div class="telInput">
          <input class="telNum" type="tel" placeholder="请输入手机号码" v-model="inputVal" @keyup="inputEvent">
          <span class="contacts" @click="imgEvent">
          	<img v-show="inputIcon" src="../../assets/img/user.png" alt="userIcon">
          	<img v-show="!inputIcon" src="../../assets/img/icon-close.png" alt="userIcon">
          </span>
        </div>
        <div :class="reg?'msg':'msg red'">{{regMsg}}</div>
        <router-view :statu="status"></router-view>
      </div>
      <div class="more-recharge">
        <p>更多充值</p>
        <div class="more-lists">
          <router-link tag="span" to="/videoVip">
            <div class="more-list">
              <span class="more-icon"><img src="../../assets/img/videoVip.png" alt="icon-videoVip"></span>
              <span class="more-name">影视会员</span>
            </div>
          </router-link>
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
    <section v-else>
      <v-paySuccess :inputVal="inputVal"></v-paySuccess>
    </section>
    <v-footer></v-footer>
    <v-popup></v-popup>
  </div>
</template>

<script>
  import payS from './paySuccess.vue'
  import head from '../header/header.vue'
  import popup from './popup.vue'
  import foot from '../footer/footer.vue'
  export default {
    data () {
      return {
        headTxt: '充值中心',
        inputIcon: true,
        inputVal: '',
        reg: true,
        regMsg: '',
        status: '400',
        payStatus: ''
      }
    },
    methods: {
      inputEvent: function () {
        var reg = /^1[3|4|5|7|8][0-9]{9}$/;
        if (!this.inputVal) {
          this.inputIcon = true
          this.regMsg = ''
        } else {
          this.inputIcon = false
        }
        if (!reg.test(this.inputVal)) {
          if (!this.inputVal || this.inputVal.length == 0) {
            this.regMsg = ''
            this.reg = false;
            return;
          }
          this.regMsg = '请输入正确的手机号码'
          this.reg = false;
        } else {
          this.reg = true;
          this.regMsg = '中国移动';
          this.status = '200'
        }
      },
      imgEvent: function () {
        if (!this.inputVal) {
          alert("打开联系人！")
        } else {
          this.inputVal = ''
          this.regMsg = '';
          this.status = '400'
        }
      },
      record: function () {

      }
    },
    created() {
      let _this = this;
      this.$root.bus.$on('payRes', function (val) {
        _this.payStatus = val;
      })
      this.$root.bus.$on('toPay', function (val) {
        _this.payStatus = val;
      })
      this.$root.bus.$on('statu', function (val) {
        _this.status = val;
      })
      this.$root.bus.$on('val', function (val) {
        _this.inputVal = val;
      })
      this.$root.bus.$on('inputIcon', function (val) {
        _this.inputIcon = val;
      })
    },
    components: {
      'v-paySuccess': payS,
      'v-footer': foot,
      'v-header': head,
      'v-popup': popup
    }
  }
</script>

<style scoped>
  section {
    background: #f1f2f3;
  }
</style>
