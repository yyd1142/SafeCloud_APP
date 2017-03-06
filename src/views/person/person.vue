<template>
  <div>
    <mt-header class="header-wrap" fixed title="我的"></mt-header>
    <div class="page-wrap person-page-wrap">
      <div class="data">
        <mt-cell to="/person_data" is-link>
          <img class="pic" slot="icon" src="./logo.png" width="60" height="60">
          <div class="content">
            <div class="main">杨子康（消防安全员）</div>
            <div class="desc">猫空科技有限公司</div>
          </div>
        </mt-cell>
      </div>
      <div class="cell-wrap">
        <mt-cell class="cell" title="消息" to="/message" is-link>
          <span slot="icon" class="icon iconfont icon-xiaoxizhongxin"></span>
        </mt-cell>
        <mt-cell class="cell" title="设置" icon="more" to="/config" is-link>
          <span slot="icon" class="icon iconfont icon-prompt"></span>
        </mt-cell>
      </div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  @import "../../config.less";

  .person-page-wrap {
    .data {
      .mint-cell-wrapper{
        padding: @cellPadding;
        height:80px;
        .mint-cell-title{
          flex:0 0 72px;
          .pic{
            width:60px;
            height:60px;
          }
        }
        .mint-cell-value{
          .content{
            .main{
              margin-bottom: 5px;
              font-size:14px;
              font-weight: 600;
            }
            .desc{
              font-size:12px;
            }
          }
        }
      }
    }
    .cell-wrap {
      margin-top: 14px;
      .cell {
        background-color: @bgWhite;
        .mint-cell-wrapper {
          padding: @cellPadding;
          .mint-cell-title {
            line-height: 22px;
            font-size: 16px;
            letter-spacing: 1px;
            .icon {
              position: relative;
              top:4px;
              font-size:22px;
            }
          }
        }
      }
    }

  }
</style>

<script>
  export default{
    data(){
      return {}
    },
    created(){

    },
    methods: {},
    components: {}
  }
</script>
