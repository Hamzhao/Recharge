import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import telFare from '../components/fareCenter/telFare.vue'
import flowFare from '../components/fareCenter/flowFare.vue'
import fare from '../components/fareCenter/fareCenter.vue'
import record from '../components/rechargeOperation/rechargeRecord.vue'
import explain from '../components/rechargeOperation/rechargeExplain.vue'
import videoVip from '../components/Vip/videoVip.vue'
Vue.use(Router)
Vue.use(Resource)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'fareCenter',
      component: fare,
      children:[
        {
          path: '',
          redirect:'/recharge/telFare'
        },
        {
          path: '/recharge/telFare',
          name: 'telFare',
          component: telFare
        },
        {
          path: '/recharge/flowFare',
          name: 'flowFare',
          component: flowFare
        }
      ]
    },
    {
      path:'/videoVip',
      name: 'videoVip',
      component:videoVip
    },
    {
      path: '/explain/rechargeRecord',
      name: 'rechargeRecord',
      component:record
    },
    {
      path: '/explain/rechargeExplain',
      name: 'rechargeExplain',
      component:explain
    }
  ]
})
