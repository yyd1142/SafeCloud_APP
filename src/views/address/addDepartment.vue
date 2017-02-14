<template>
  <div>
    <mt-header fixed title="新增部门">
      <router-link to="/enter?name=address" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/edit_department" slot="right">
        <mt-button type="default">编辑</mt-button>
      </router-link>
    </mt-header>
    <div class="page-wrap add-department">
      <div class="form-wrap">
        <mt-field class="item" label="部门名称" required v-model="formData.teamName"></mt-field>
        <div class="sel-wrap" @click="ctlManagerPopup(true)">
          <mt-cell title="部门管理员" :value="formData.manager" is-link></mt-cell>
        </div>
        <mt-field class="item" label="人数限制" v-model="formData.limitNumber" type="number"></mt-field>
        <div class="sel-wrap" @click="ctlPowerPopup(true)">
          <mt-cell title="权限限制" :value="formData.power" is-link></mt-cell>
        </div>
      </div>
      <div class="popup-wrap">
        <mt-popup v-model="managerPopupShow" position="bottom">
          <div class="popup-btn">
            <span class="btn" @click="ctlManagerPopup(false)">取消</span>
            <span class="btn btn-yes" @click="pickManager">确定</span>
          </div>
          <mt-picker :slots="managerList" @change="managerValuesChange"></mt-picker>
        </mt-popup>
        <mt-popup v-model="powerPopupShow" position="bottom">
          <div class="popup-btn">
            <span class="btn" @click="ctlPowerPopup(false)">取消</span>
            <span class="btn btn-yes" @click="pickPower">确定</span>
          </div>
          <mt-picker :slots="powerList" @change="powerValuesChange"></mt-picker>
        </mt-popup>
      </div>
      <div class="submit">
        <mt-button type="primary" :disabled="!formValid" @click="submitForm">确认</mt-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .add-department {
    position: relative;
    min-height: 400px;
    .form-wrap {
      width: 100%;
      .item {
        width: 100%;
      }
      .sel-wrap {
        .mint-cell-title {
          flex: none;
          width: 105px;
          .mint-cell-text {
            vertical-align: baseline;
          }
        }
      }
    }
    .popup-wrap {
      .popup-btn {
        .btn {
          display: inline-block;
          padding: 15px;
        }
        .btn-yes {
          float: right;
          color: #0089dc;
        }
      }
      .mint-popup {
        width: 100%;
      }
    }
    .submit {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
</style>

<script>
  var NAMES = [
    {
      team: '保安处1队', member: [
      {
        id: 1,
        name: '阿凡达',
        tel: '153 2325 2354'
      },
      {
        id: 2,
        name: '阿里山',
        tel: '153 2325 2354'
      }
    ]
    },
    {
      team: '保安处2队', member: [
      {
        id: 3,
        name: '陈锐',
        tel: '153 2325 2354'
      },
      {
        id: 4,
        name: '曹师傅',
        tel: '153 2325 2354'
      }
    ]
    },
    {
      team: '志愿消防队', member: [
      {
        id: 5,
        name: '付师傅',
        tel: '153 2325 2354'
      },
      {
        id: 6,
        name: '霍元甲',
        tel: '153 2325 2354'
      },
      {
        id: 7,
        name: '韩寒',
        tel: '153 2325 2354'
      },
      {
        id: 8,
        name: '范经理',
        tel: '153 2325 2354'
      }
    ]
    },
    {
      team: '消防控制室', member: [
      {
        id: 9,
        name: '付师傅',
        tel: '153 2325 2354'
      },
      {
        id: 10,
        name: '霍元甲',
        tel: '153 2325 2354'
      },
      {
        id: 11,
        name: '韩寒',
        tel: '153 2325 2354'
      },
      {
        id: 12,
        name: '范经理',
        tel: '153 2325 2354'
      }
    ]
    }
  ];
  var manager = ['Tom', 'Rose', 'Candy', 'Tim', 'Tom', 'Rose', 'Candy', 'Tim'];

  export default{
    data() {
      return {
        formValid: false,
        managerPopupShow: false,
        powerPopupShow: false,
        currentManager: '',
        currentPower: '',
        managerList: [
          {
            flex: 1,
            values: [],
          }
        ],
        powerList: [
          {
            flex: 1,
            values: ['管理员', '安全员'],
          }
        ],
        formData: {
          teamName: '',
          manager: '请选择',
          limitNumber: '',
          power: '请选择'
        }
      }
    },
    mounted() {
      this.getData();
    },
    watch: {
      formData: {
        handler() {
          this.validForm();
        },
        deep: true
      }
    },
    methods: {
      getData() {
        this.managerList[0].values = manager;
      },
      validForm() {
        let teamName = this.formData.teamName;
        let manager = this.formData.manager;
        let limitNumber = this.formData.limitNumber;
        let power = this.formData.power;
        if (teamName && limitNumber && manager != '请选择' && power != -1) {
          this.formValid = true;
        } else {
          this.formValid = false;
        }
      },
      submitForm(){
        if (this.formValid) {
          console.log('提交新增联系人数据');
          this.$router.push('/enter?name=address');
        }
      },
      ctlManagerPopup(bool){
        this.managerPopupShow = bool;
      },
      ctlPowerPopup(bool){
        this.powerPopupShow = bool;
      },
      managerValuesChange(picker, val){
        this.currentManager = val[0];
      },
      powerValuesChange(picker, val){
        this.currentPower = val[0];
      },
      pickManager(){
        this.formData.manager = this.currentManager;
        this.managerPopupShow = false;
      },
      pickPower(){
        this.formData.power = this.currentPower;
        this.powerPopupShow = false;
      }
    },
    components: {}
  }
</script>


