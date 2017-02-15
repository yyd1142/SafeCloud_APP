<template>
  <div>
    <mt-header fixed title="任务">
      <mt-button slot="right">日历</mt-button>
    </mt-header>
    <div class="page-wrap mission-page-wrap">
      <!--TAB-->
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">周一</mt-tab-item>
        <mt-tab-item id="2">周二</mt-tab-item>
        <mt-tab-item id="3">周三</mt-tab-item>
        <mt-tab-item id="4">周四</mt-tab-item>
        <mt-tab-item id="5">周五</mt-tab-item>
        <mt-tab-item id="6">周六</mt-tab-item>
        <mt-tab-item id="7">周日</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <ul class="mission-table">
            <li class="cell" v-for="item in 8" >
              <router-link
              :to="item===1?'/xuncha_list':(item===2?'/zhiban_list':(item===3?'/jiancha_list':(item===4?'/weixiu_list':(item===5?'/baoyang_list':'/jiance_list'))))">
                <span class="badge">进行中</span>
                <div class="title">
                  {{item===1?"巡查任务":(item===2?"值班任务":(item===3?"检查任务":(item===4?"维修任务":(item===5?"保养任务":"检测任务"))))}}
                </div>
                <div class="des">
                  5名安全员正在2个消控室值班
                </div>
                <mt-progress class="progress" :value="60">
                  <div slot="end">60%</div>
                </mt-progress>
              </router-link>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'重要事项 ' + n"/>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 4" :title="'重要事项 ' + n"/>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <mt-cell v-for="n in 4" :title="'重要事项 ' + n"/>
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <mt-cell v-for="n in 4" :title="'重要事项 ' + n"/>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less" scoped>
  .mission-page-wrap {
    .mission-table {
      width: 100%;
      padding: 0;
      margin: 10px 0 0 0;
      list-style: none;
      .cell {
        position: relative;
        height: 80px;
        padding:10px;
        border-bottom: 1px solid #ddd;
        .badge {
          position: absolute;
          width: 100px;
          height: 30px;
          line-height: 30px;
          top: 10px;
          right: 10px;
          border-radius: 4px;
          border: 1px solid #4caf50;
          text-align: center;
          font-size: 12px;
          color: #4caf50;
        }
        .title {
          font-size:18px;
          font-weight: 700;
          margin: 10px 0;
        }
        .des{

        }
        .progress{
          .mt-progress-content +div{
            flex:0 0 50px;
            padding-left:20px;
          }
        }
      }
    }
  }


</style>

<script>

  export default {
    data() {
      return {
        selected: '1'
      }
    },
    methods: {},
    components: {
    }
  }
</script>
