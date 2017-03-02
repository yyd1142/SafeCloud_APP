<template>
  <div>
    <mt-header class="header-wrap" fixed title="检查任务列表">
      <router-link to="/enter?name=mission" slot="left">
        <mt-button class="header-item" icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="page-wrap jiancha-page-wrap">
      <div class="list-wrap">
        <ul class="list">
          <li class="item" v-for="n in 5">
            <router-link :to="'/jiancha_projects/' + n">
              <div class="content">
                <div class="title">
                  一般性防火检查
                </div>
                <div class="info">
                  设施设备日常巡查
                  <br> 执行人：杨队长
                  <br> 状态：已超期
                </div>
              </div>
              <div class="state">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
              <span class="indicate">&gt;</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .jiancha-wrap {
    width: 100%;
    background-color: #ffffff;
    padding: 10px 15px;
    box-sizing: border-box;
    line-height: 24px;
  }
  
  .jiancha-page-wrap {
    .list-wrap {
      .list {
        padding: 0;
        margin: 0;
        .item {
          display: flex;
          position: relative;
          padding: 10px 15px;
          border-bottom: 1px solid #ccc;
          .content {
            flex: 1;
            .title {
              margin-bottom: 10px;
              font-size: 18px;
              font-weight: 600;
            }
            .info {
              font-size: 14px;
            }
          }
          .state {
            flex: 0 0 100px;
            .circle {
              float: left;
              width: 15px;
              height: 15px;
              margin-left: 10px;
              border-radius: 50%;
              background: orange;
            }
          }
          .indicate {
            position: absolute;
            top: 50%;
            right: 10px;
            margin-top: -9px;
            font-size: 18px;
            font-weight: 600;
          }
        }
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {}
    },
    mounted() {

    },
    methods: {},
    components: {}
  }

</script>