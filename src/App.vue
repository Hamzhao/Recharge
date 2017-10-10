<template>
  <div id="app">
    <router-view></router-view>
    <!--<v-fare v-show="fareStatus"></v-fare>-->
    <!--<v-record v-show="recordStatus"></v-record>-->
  </div>
</template>

<script>
  import fare from './components/fareCenter/fareCenter.vue'
  import fRecord from './components/rechargeOperation/rechargeRecord.vue'
  export default {
    name: 'app',
    data () {
      return{
        fareStatus:true,
        recordStatus:false
      }
    },
    methods:{},
    created() {},
    components:{
      'v-fare':fare,
      'v-record':fRecord
    }
  }
</script>

<style>

</style>
