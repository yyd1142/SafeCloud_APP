<template>
  <div>
    <mt-header fixed title="个人资料">
      <router-link to="/enter?name=person" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="page-wrap person-data-wrap">
      <div class="data-wrap">
        <mt-cell title="头像">
          <span class="avatar">
            <img src="./logo.png" width="30" height="30">
          </span>
        </mt-cell>
        <mt-cell title="姓名" value="杨子康"></mt-cell>
        <mt-cell title="电话" value="13000000000"></mt-cell>
        <mt-cell title="性别" value="男"></mt-cell>
        <mt-cell title="地区" value="湖南长沙"></mt-cell>
        <mt-cell title="生日" value="1991-7-28"></mt-cell>
      </div>
      <div class="data-wrap">
        <mt-cell title="公司名称" value="猫空科技有限公司"></mt-cell>
        <mt-cell title="所在部门" value="产品部"></mt-cell>
        <mt-cell title="职位" value="产品经理"></mt-cell>
        <mt-cell title="消防角色" value="消防安全管理员"></mt-cell>
      </div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .person-data-wrap {
    .data-wrap{
      margin-bottom:10px;
      box-shadow: 1px 1px 10px #ccc;
      .avatar {
        padding:5px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
    }

  }
</style>

<script>
  export default{
    data() {
      return {}
    },
    mounted() {

    },
    methods: {},
    components: {}
  }
</script>


