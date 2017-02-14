<template>
  <div>
    <mt-header fixed :title="$route.params.pid?'编辑联系人':'新增联系人'">
      <router-link to="/enter?name=address" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="page-wrap add-ins-contact">
      <div class="form-wrap">
        <mt-field class="item" label="姓名" v-model="formData.name"></mt-field>
        <mt-field class="item" label="公司" v-model="formData.cpy"></mt-field>
        <mt-field class="item" label="电话" v-model="formData.tel" type="tel"></mt-field>
        <div class="sel-wrap" @click="ctlPopup(true)">
          <mt-cell title="部门" :value="formData.team" is-link></mt-cell>
        </div>
      </div>
      <div class="popup-wrap">
        <mt-popup v-model="popupShow" position="bottom">
          <div class="popup-btn">
            <span class="btn" @click="ctlPopup(false)">取消</span>
            <span class="btn btn-yes" @click="pickTeam">确定</span>
          </div>
          <mt-picker :slots="contactTeams" @change="onValuesChange"></mt-picker>
        </mt-popup>
      </div>
      <div class="submit">
        <mt-button type="primary" :disabled="!formValid" @click="submitForm">确认</mt-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .add-ins-contact {
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


  export default{
    data() {
      return {
        formValid: false,
        popupShow: false,
        currentTeam: '',
        contactTeams: [
          {
            flex: 1,
            values: [],
          }
        ],
        formData: {
          name: '',
          cpy: '',
          tel: '',
          team: '请选择'
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
//        this.contactTeams.push('请选择');
        NAMES.forEach(data => {
          this.contactTeams[0].values.push(data.team);
          data.member.forEach(member => {
            if (member.id == this.$route.params.pid) {
              this.formData.name = member.name;
              this.formData.tel = member.tel;
              this.formData.team = data.team;
            }
          });
        });
      },
      validForm() {
        let name = this.formData.name;
        let cpy = this.formData.cpy;
        let tel = this.formData.tel;
        let team = this.formData.team;
        if (name && tel && team != '请选择') {
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
      ctlPopup(bool){
        this.popupShow = bool;
      },
      onValuesChange(picker, val){
        this.currentTeam = val[0];
      },
      pickTeam(){
        this.formData.team = this.currentTeam;
        this.popupShow = false
      }
    },
    components: {}
  }
</script>


