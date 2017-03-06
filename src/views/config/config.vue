<template>
  <div>
    <mt-header class="header-wrap" fixed title="设置">
      <router-link to="/enter?name=person" slot="left">
        <mt-button class="header-item" icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="page-wrap config-page-wrap">
      <div class="cell-wrap">
        <mt-cell title="修改密码"></mt-cell>
        <mt-cell title="意见反馈"></mt-cell>
        <mt-cell title="用户指南"></mt-cell>
        <mt-cell title="服务协议"></mt-cell>
        <mt-cell title="检测新版本"></mt-cell>
      </div>
      <div class="exit-wrap">
        <mt-cell class="exit" title="退出"></mt-cell>
      </div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  @import "../../config.less";

  .config-page-wrap {
    .mint-cell {
      min-height: 44px;
      height: 44px;
      font-size: 14px;
      .mint-cell-wrapper {
        font-size: 14px;
      }
    }
    .cell-wrap {
      margin-bottom: 15px;
      box-shadow: @baseShadow;
      .mint-cell-wrapper {
        padding: @cellPadding;
      }
    }
    .exit-wrap {
      text-align: center;
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


