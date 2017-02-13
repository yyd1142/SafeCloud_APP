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
        <select class="sel" v-model="formData.team">
          <option v-for="(item,index) in contactTeams" :value="item" :disabled="index===0">{{item}}</option>
        </select>
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
      /*text-align: center;*/
      .item {
        width: 100%;
      }
      .sel {
        width: 100%;
        height: 35px;
        border-radius: 10px;
        font-size: 14px;
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
        contactTeams: [],
        formData: {
          name: '',
          cpy: '',
          tel: '',
          team: '请选择'
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
        this.contactTeams.push('请选择');
        NAMES.forEach(data => {
          this.contactTeams.push(data.team);
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
      }
    },
    components: {}
  }
</script>


