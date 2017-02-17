<template>
  <div>
    <mt-header fixed title="添加设备">
      <div @click="pageTurning(2)" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <div class="page-wrap add-xuncha-device-wrap">
      <div class="main-wrap">
        <mt-cell v-for="cell in deviceList" :title="cell.name">
          <div class="input-number">
            <span class="btn" @click="countMinus(cell)">-</span>
            <input class="input" type="text" v-model="cell.count">
            <span class="btn" @click="countPlus(cell)">+</span>
          </div>
        </mt-cell>
      </div>
      <div class="btn-wrap">
        <mt-button class="btn" type="primary" size="large" @click="pageTurning(2)">确定</mt-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .add-xuncha-device-wrap {
    .main-wrap {
      .input-number {
        .btn {
          font-size: 24px;
          font-weight: 700;
          vertical-align: bottom;
        }
        .input {
          width: 30px;
          border: 0;
          text-align: center;
          font-size: 18px;
        }
      }
    }
    .btn-wrap {
      .btn {
        position: absolute;
        bottom: 0;
      }
    }
  }
</style>

<script>
  export default{
    data() {
      return {
        deviceList: []
      }
    },
    props: ['allData', 'activeDevice'],
    mounted() {
      this.getData();
    },
    methods: {
      getData(){
        this.allData.detail.forEach(data => {
          if (data.name === this.activeDevice) {
            this.deviceList = data.device;
          }
        });
      },
      pushData(){
        this.allData.detail.forEach(data => {
          if (data.name === this.activeDevice) {
            let count = 0;
            this.deviceList.forEach(device => {
              count += device.count;
            });
            data.deviceCount = count;
            data.device = this.deviceList;
          }
        });
      },
      pageTurning(page){
        this.pushData();
        this.$emit('turning', page);
      },
      countMinus(cell){
        if (cell.count > 0) {
          cell.count--;
        }
      },
      countPlus(cell){
        cell.count++;
      }
    },
    components: {}
  }
</script>


