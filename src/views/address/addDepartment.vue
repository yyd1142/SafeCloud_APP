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
    <div class="page-wrap add-ins-contact">
      <div class="form-wrap">
        <mt-field class="item" label="部门名称" required v-model="formData.teamName"></mt-field>
        <div class="sel-wrap">
          <span class="label">部门管理员</span>
          <select class="sel" v-model="formData.manager">
            <option v-for="(item,index) in teamManager" :value="item" :disabled="index===0">{{item}}</option>
          </select>
        </div>
        <mt-field class="item" label="人数限制" v-model="formData.limitNumber" type="number"></mt-field>
        <div class="sel-wrap">
          <span class="label">权限限制</span>
          <select class="sel" v-model="formData.power">
            <option v-for="(item,index) in teamPower" :value="item.type" :disabled="index===0">{{item.name}}</option>
          </select>
        </div>
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
        display: flex;
        padding: 10px 10px;
        .label {
          flex: 0 0 105px;
          width: 105px;
          height: 35px;
          line-height: 35px;
        }
        .sel {
          flex: 1;
          height: 35px;
          border-radius: 10px;
          font-size: 14px;
        }
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
  var manager = ['Tom', 'Rose', 'Candy','Tim','Tom', 'Rose', 'Candy','Tim'];

  export default{
    data() {
      return {
        teamManager: [],
        teamPower: [
          {
            type: -1,
            name: '请选择'
          },
          {
            type: 1,
            name: '管理员'
          },
          {
            type: 2,
            name: '安全员'
          }
        ],
        formData: {
          teamName: '',
          manager: '请选择',
          limitNumber: '',
          power: -1
        },
        formValid: false
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
        this.teamManager = manager;
        this.teamManager.unshift('请选择');
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
      }
    },
    components: {}
  }
</script>


