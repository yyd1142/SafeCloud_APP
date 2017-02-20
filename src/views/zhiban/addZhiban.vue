<template>
  <div>
    <mt-header fixed title="新增值班任务">
      <router-link to="/zhiban_list" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="page-wrap add_zhiban_wrap">
      <popup-picker title="设置日期" :values="selData.dateList" :formValue="formData.date"
                    v-on:get="pickDate"></popup-picker>
      <mt-radio class="radio" title="循环周期" :options="selData.cycleList" v-model="formData.cycle"></mt-radio>
      <popup-picker title="值班室" :values="selData.room" :formValue="formData.room"
                    v-on:get="(val) => {formData.room=val}"></popup-picker>
      <div class="title">排班</div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .add_zhiban_wrap {
    .radio {
      display: flex;
      padding: 0 10px;
      background: #fff;
      .mint-radiolist-title {
        width: 105px;
        margin: 0;
        line-height: 48px;
        font-size: 16px;
        color: inherit;
      }
      .mint-cell {
        flex: 1;
        margin-left: 0;
        .mint-cell-wrapper {
          padding: 0;
          .mint-radiolist-label {
            padding-left: 0;
          }
        }

      }
    }
    .title{
      font-size:20px;
      text-align: center;
      margin:15px 0;
    }
  }
</style>

<script>
  import PopupPicker from '../../components/PopupPicker/PopupPicker.vue';
  export default{
    data() {
      return {
        selData: {
          dateList: [
            {
              flex: 1,
              values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
              textAlign: 'right'
            }, {
              divider: true,
              content: '-'
            }, {
              flex: 1,
              values: ['2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06'],
              textAlign: 'left'
            }
          ],
          cycleList: ['日', '周', '月'],
          room: [
            {
              flex: 1,
              values: ['海岸城西座消防监控室', '海岸城东座消防控制室'],
            }
          ]
        },
        formData: {
          date: "请选择",
          cycle: "",
          room: '请选择'
        }
      }
    },
    mounted() {

    },
    methods: {
      pickDate(val){
        this.formData.date = val;
      }
    },
    components: {
      PopupPicker
    }
  }
</script>


