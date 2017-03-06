<template>
  <div>
    <mt-header class="header-wrap" fixed title="个人资料">
      <router-link to="/enter?name=person" slot="left">
        <mt-button class="header-item" icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="page-wrap person-data-wrap">
      <div class="data-wrap">
        <mt-cell title="头像">
          <span class="avatar">
            <img src="./logo.png">
          </span>
        </mt-cell>
        <mt-cell title="姓名" :value="personData.name"></mt-cell>
        <mt-cell title="电话" :value="personData.phone"></mt-cell>
        <mt-cell title="性别" :value="personData.gender===1?'男':'女'"></mt-cell>
        <mt-cell title="地区" :value="personData.area"></mt-cell>
        <mt-cell title="生日" :value="personData.birth"></mt-cell>
      </div>
      <div class="data-wrap">
        <mt-cell title="公司名称" :value="personData.cpy"></mt-cell>
        <mt-cell title="所在部门" :value="personData.bumen"></mt-cell>
        <mt-cell title="职位" :value="personData.zhiwei"></mt-cell>
        <mt-cell title="消防角色" :value="personData.juese"></mt-cell>
      </div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  @import "../../config.less";

  .person-data-wrap {
    .data-wrap {
      margin-bottom: 10px;
      box-shadow: @baseShadow;
      .mint-cell {
        min-height: 44px;
        .mint-cell-wrapper {
          padding: @cellPadding;
          .mint-cell-title {
            color: @textBase;
          }
          .mint-cell-value {
            font-size: 14px;
            color: @textBase;
            .avatar {
              padding: 10px 0;
              width: 60px;
              height: 60px;
              > img {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
</style>

<script>
  let personData = {
    head: './logo.png',
    name: '杨子康',
    phone: '13000000000',
    gender: 1,
    area: '湖南长沙',
    birth: '1991-7-28',
    cpy: '猫空科技有限公司',
    bumen: '产品部',
    zhiwei: '产品经理',
    juese: '消防安全管理员'
  };
  export default{
    data(){
      return {
        personData: {}
      }
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData(){
        this.personData = personData;
      }
    },
    components: {}
  }
</script>


