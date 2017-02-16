<template>
  <div>
    <mt-header fixed title="新建巡查任务">
      <router-link to="/xuncha_list" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="page-wrap add-xuncha-wrap">
      <div class="form-wrap">
        <popup-picker title="选择建筑" :values="selData.buildList" :formValue="formData.build"
                      v-on:get="pickBuild"></popup-picker>
        <div class="item" v-if="formData.storeys.length!==0" @click="popupVisible=true">
          <div class="item-title"></div>
          <div class="item-value" >
            <span v-for="(item,index) in formData.storeys">{{item}}{{index<(formData.storeys.length-1)?"、":""}}</span>
          </div>
        </div>
        <popup-picker title="选择执行人" :values="selData.executorList" :formValue="formData.executor"
                      v-on:get="pickExecutor"></popup-picker>
        <!--Sticky Footer-->
        <mt-popup class="popup" v-model="popupVisible" position="right">
          <div class="body-wrap">
            <mt-checklist
              class="body-main"
              v-model="formData.storeys"
              :title="formData.build"
              :options="selData.buildStoreys"
              :value="selData.buildStoreys"
              align="right">
            </mt-checklist>
          </div>
          <div class="footer-wrap">
            <mt-button class="btn" type="primary" @click="popupVisible=false">确认</mt-button>
          </div>
        </mt-popup>
      </div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .add-xuncha-wrap {
    .form-wrap {
      .item {
        display: flex;
        padding:0 10px;
        min-height:30px;
        .item-title{
          flex:0 0 105px;
          width:105px;
        }
        .item-value{
          flex:1;
        }
      }
      .popup {
        position: fixed;
        width: 85%;
        height: 85%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        overflow: auto;
        //Sticky Footer
        .body-wrap {
          min-height: 100%;
          .body-main {
            padding-bottom: 74px;
          }
          .mint-checklist-title {
            font-size: 18px;
            text-align: center;
          }
        }
        .footer-wrap {
          margin: -64px auto 0 auto;
          .btn {
            margin-left: 50%;
            transform: translate(-50%, 0);
          }
        }
      }
    }
  }
</style>

<script>
  var build = [
    {
      name: '科技园',
      storeys: [
        '-2层',
        '-1层',
        '1层',
        '2层',
        '3层'
      ]
    },
    {
      name: '海岸城',
      storeys: [
        '-2层',
        '-1层',
        '1层',
        '2层',
        '3层',
        '4层',
        '5层',
        '5层',
        '5层',
        '5层',
        '5层',
        '5层',
        '5层',
        '5层',
        '5层',
        '5层',
        '5层',
        '5层',
        '5层'
      ]
    }
  ];
  import PopupPicker from '../../components/PopupPicker/PopupPicker.vue';
  export default{
    data() {
      return {
        popupVisible: false,
        selData: {
          buildList: [
            {
              flex: 1,
              values: [],
            }
          ],
          buildStoreys: [],
          executorList: [
            {
              flex: 1,
              values: ['杨队长','林队长'],
            }
          ],
        },
        formData: {
          build: "请选择",
          storeys: [],
          executor:'请选择'
        }
      }
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData(){
        build.forEach(data => {
          this.selData.buildList[0].values.push(data.name);
        });
      },
      pickBuild(val){
        this.formData.build = val;
        build.forEach(data => {
          if (data.name === val) {
            this.selData.buildStoreys = data.storeys;
          }
        });
        this.popupVisible = true;
      },
      pickExecutor(val){
        this.formData.executor = val;
      }
    },
    components: {
      PopupPicker
    }
  }
</script>


