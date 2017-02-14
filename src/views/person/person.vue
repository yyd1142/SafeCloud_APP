<template>
  <div>
    <mt-header fixed title="我的"></mt-header>
    <div class="page-wrap person-page-wrap">
      <div class="data">
        <mt-cell title="杨子康" value="猫空科技公司" is-link to="/person_data">
          <img slot="icon" src="./logo.png" width="24" height="24">
        </mt-cell>
      </div>
      <mt-cell title="消息" icon="more" class="cell" to="/message"></mt-cell>
      <mt-cell title="设置" icon="more" class="cell" to="/config"></mt-cell>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .person-page-wrap {
    .data {
      .mint-cell {
        min-height: 60px;
      }
    }
    .cell {
      margin-top: 10px;
      background-color: #eee;
    }
  }
</style>
<script></script>
