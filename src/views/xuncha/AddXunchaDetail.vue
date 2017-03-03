<template>
  <div>
    <mt-header class="header-wrap" fixed title="新建巡查任务">
      <div @click="pageTurning(1)" slot="left">
        <mt-button class="header-item" icon="back"></mt-button>
      </div>
    </mt-header>
    <div class="page-wrap add-xuncha-detail-wrap">
      <div class="main-wrap">
        <div class="item" v-for="cell in allData.detail" @click="goDevicePage(cell.name)">
          <mt-cell :title="cell.name" :value="'已添加'+cell.deviceCount+'个设备'"></mt-cell>
        </div>
      </div>
      <div class="btn-wrap">
        <mt-button class="btn" plain type="primary" size="large" @click="postData">创建单次任务</mt-button>
        <mt-button class="btn" plain type="primary" size="large" @click="postData">创建循环任务</mt-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .add-xuncha-detail-wrap {
    .main-wrap {
    }
    .btn-wrap {
      .btn {
        position: absolute;
        bottom: 45px;
        & + .btn {
          bottom: 2px;
        }
      }
    }
  }
</style>

<script>
  export default{
    data() {
      return {
        activeDevice: ''
      }
    },
    props: ['allData'],
    mounted() {

    },
    methods: {
      pageTurning(page){
        this.$emit('turning', [page, this.activeDevice]);
      },
      goDevicePage(name){
        this.activeDevice = name;
        this.pageTurning(3);
      },
      postData(){
        console.log(this.allData);
        this.$router.push('/xuncha_list');
      }
    },
    components: {}
  }
</script>


