<template>
  <div>
    <mt-header fixed title="检测任务列表">
      <router-link to="/enter?name=mission" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="page-wrap jiance-page-wrap">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">保养中</mt-tab-item>
        <mt-tab-item id="2">已超期</mt-tab-item>
        <mt-tab-item id="3">已完成</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="list-wrap">
            <ul class="list">
              <li class="item" v-for="n in 4">
                <div class="info">
                  检测建筑：万象城B座
                  <br>
                  截止日期：2017年1月31日至2017年2月4日
                </div>
                <span class="indicate">&gt;</span>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'测试 ' + n"/>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :title="'选项 ' + n"/>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .jiance-page-wrap {
    .list-wrap {
      .list {
        padding: 0;
        margin: 0;
        .item {
          display: flex;
          position:relative;
          padding: 10px 15px;
          border-bottom: 1px solid #ccc;
          .info {
            flex: 1;
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
  export default{
    data() {
      return {
        selected: "1"
      }
    },
    mounted() {

    },
    methods: {},
    components: {}
  }
</script>


