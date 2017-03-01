<template>
  <div>
    <mt-header fixed title="任务">
      <mt-button slot="right">日历</mt-button>
    </mt-header>
    <div class="page-wrap safer-mission-page-wrap">
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
            <li class="cell">
              <div class="title">
                巡查任务
              </div>
              <div class="list-wrap">
                <ul class="list">
                  <li class="item" v-for="item in xunchaList">
                    <router-link :to="'/xuncha_info/' + item.id">
                      <div class="info">
                        执行人：{{item.executor}}
                        <br>
                        值班时间：{{item.time}}
                      </div>
                      <div class="state" :class="{'succ':item.state==1,'blue':item.state==2,'warm':item.state==3}">
                        状态：{{item.stateName}}
                        反馈：{{item.feedback||'无'}}
                      </div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="cell">
              <div class="title">
                值班任务
              </div>
              <div class="list-wrap">
                <ul class="list">
                  <li class="item" v-for="item in zhibanList">
                    <router-link :to="'/zhiban_info/' + item.id">
                      <div class="info">
                        执行人：{{item.executor}}
                        <br>
                        值班时间：{{item.time}}
                      </div>
                      <div class="state" :class="{'succ':item.state==1,'blue':item.state==2,'warm':item.state==3}">
                        状态：{{item.stateName}}
                        反馈：{{item.feedback||'无'}}
                      </div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <!--<li class="cell">-->
            <!--<div class="title">-->
            <!--任务-->
            <!--</div>-->
            <!--</li>-->
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
  .safer-mission-page-wrap {
    .mission-table {
      width: 100%;
      padding: 0;
      margin: 10px 0 0 0;
      list-style: none;
      .cell {
        position: relative;
        border-bottom: 1px solid #ddd;
        .title {
          padding-left: 5px;
          width: 100%;
          height: 30px;
          line-height: 30px;
          font-size: 18px;
          background: #aaa;
          color: #fff;
        }
        .list-wrap {
          .list {
            padding: 0;
            margin: 0;
            .item > a {
              display: flex;
              padding: 0 15px 10px 15px;
              border-bottom: 1px solid #ccc;
              .info {
                flex: 1;
              }
              .state {
                flex: 0 0 100px;
                /*margin-top: 10px;*/
                &.succ {
                  color: #259b24;
                }
                &.blue {
                  color: #5677fc;
                }
                &.warm {
                  color: #ff9800;
                }
              }
            }
          }
        }
      }
    }
  }


</style>

<script>
  var xuncha = [
    {
      id: 1,
      executor: '杨队长',
      time: '17:00',
      state: 1,
      feedback: ''
    },
    {
      id: 2,
      executor: '杨队长',
      time: '17:00',
      state: 1,
      feedback: 'qweq'
    },
    {
      id: 3,
      executor: '杨队长',
      time: '18:00',
      state: 2,
      feedback: ''
    },
    {
      id: 4,
      executor: '杨队长',
      time: '17:00',
      state: 3,
      feedback: 'dada'
    },
    {
      id: 5,
      executor: '杨队长',
      time: '17:00',
      state: 3,
      feedback: ''
    }
  ];
  var zhiban = [
    {
      id: 1,
      executor: '杨队长',
      time: '18:00-22:00',
      state: 1,
      feedback: 'asda'
    },
    {
      id: 2,
      executor: '杨队长',
      time: '17:00-23:00',
      state: 2,
      feedback: ''
    },
    {
      id: 3,
      executor: '杨队长',
      time: '17:00-22:30',
      state: 3,
      feedback: ''
    }
  ];
  export default {
    data() {
      return {
        selected: '1',
        initData: {
          state: [
            {text: '进行中', state: 1},
            {text: '待确认', state: 2},
            {text: '未上传', state: 3}
          ]
        },
        xunchaList: [],
        zhibanList: []
      }
    },
    created(){
      this.getData();
    },
    methods: {
      getData(){
        this.xunchaList = xuncha;
        this.zhibanList = zhiban;
        this.translateData(this.xunchaList);
        this.translateData(this.zhibanList);
      },
      translateData(data){
        data.forEach(item => {
          item.stateName = this.initData.state[item.state - 1].text;
        });
      }
    },
    components: {}
  }
</script>
