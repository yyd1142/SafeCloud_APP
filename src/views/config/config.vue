<template>
    <div>
      <mt-header class="header-wrap" fixed title="设置">
        <router-link to="/enter?name=person" slot="left">
          <mt-button class="header-item" icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="page-wrap config-page-wrap">
        <div class="config-wrap">
          <mt-cell title="修改密码"></mt-cell>
          <mt-cell title="意见反馈"></mt-cell>
          <mt-cell title="用户指南"></mt-cell>
          <mt-cell title="服务协议"></mt-cell>
          <mt-cell title="检测新版本"></mt-cell>
        </div>
        <div class="config-wrap">
          <mt-cell title="退出" class="exit"></mt-cell>
        </div>
      </div>
    </div>
</template>

<style lang="less" rel="stylesheet/less">
  .config-page-wrap{
    .config-wrap{
      margin-bottom:10px;
      box-shadow: 1px 1px 10px #ccc;
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


