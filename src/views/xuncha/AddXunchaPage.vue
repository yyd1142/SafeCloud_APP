<template>
  <div>
    <!--<add-xuncha-base v-if="currentPage===1" :allData="formData" v-on:turning="getPage"-->
                     <!--v-on:get="getData"></add-xuncha-base>-->
    <add-xuncha-base v-if="currentPage===1" :allData="formData" v-on:turning="getPage"></add-xuncha-base>
    <add-xuncha-detail v-if="currentPage===2" :allData="formData" v-on:turning="getPage"></add-xuncha-detail>
    <add-xuncha-device v-if="currentPage===3" :allData="formData" :activeDevice="activeDevice"
                       v-on:turning="getPage"></add-xuncha-device>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
</style>

<script>
  var xuncha = {
    build: "",
    storeys: [],
    executor: '',
    date: '',
    count: '',
    detail: [
      {
        name: '建筑灭火器',
        deviceCount: 0,
        device: [
          {
            name: '灭火器箱',
            count: 0
          },
          {
            name: '灭火器',
            count: 0
          }
        ]
      },
      {
        name: '火灾自动报警系统',
        deviceCount: 0,
        device: [
          {
            name: '点型感烟火灾探测器',
            count: 0
          },
          {
            name: '点型感温火灾探测器',
            count: 0
          },
          {
            name: '线型光束感烟火灾探测器',
            count: 0
          }
        ]
      }
    ]
  };

  import AddXunchaBase from './AddXunchaBase.vue';
  import AddXunchaDetail from './AddXunchaDetail.vue';
  import AddXunchaDevice from './AddXunchaDevice.vue';
  export default{
    data() {
      return {
        currentPage: 1,
        activeDevice: '',
        formData: {}
      }
    },
    mounted() {
      this.formData=xuncha;
    },
    methods: {
      getPage(val){
        if (!val.length) {
          this.currentPage = val;
        } else {
          this.currentPage = val[0];
          this.activeDevice = val[1];
        }
      }
//      getData(val){
//        this.formData = val;
//      }
    },
    components: {
      AddXunchaBase,
      AddXunchaDetail,
      AddXunchaDevice
    }
  }
</script>


