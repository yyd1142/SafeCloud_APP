<template>
  <div>
    <mt-header class="header-wrap" fixed title="任务">
      <mt-button class="header-item" slot="right">日历</mt-button>
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
              <div class="type">
                巡查任务
              </div>
              <div class="list-wrap">
                <ul class="list">
                  <li class="item" v-for="item in xunchaList">
                    <router-link :to="'/xuncha_info/' + item.id">
                      <div class="content">
                        <div class="title">
                          {{item.title}}
                        </div>
                        <div class="desc">
                          开始时间：{{item.time}}
                        </div>
                      </div>
                      <div class="state"
                           :class="{'default':item.state==1||item.state==4,'warm':item.state==2,'on':item.state==3}">
                        {{item.stateName}}
                      </div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="cell">
              <div class="type">
                值班任务
              </div>
              <div class="list-wrap">
                <ul class="list">
                  <li class="item" v-for="item in zhibanList">
                    <router-link :to="'/safer_zhiban_info/' + item.id">
                      <div class="content">
                        <div class="title">
                          {{item.title}}
                        </div>
                        <div class="desc">
                          开始时间：{{item.time}}
                        </div>
                      </div>
                      <div class="state" :class="{'default':item.state==1||item.state==3,'on':item.state==2}">
                        {{item.stateName}}
                      </div>
                    </router-link>
                  </li>
                </ul>
              </div>
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
  .safer-mission-page-wrap {
    .mission-table {
      width: 100%;
      padding: 0;
      margin: 10px 0 0 0;
      list-style: none;
      .cell {
        position: relative;
        border-bottom: 1px solid #ddd;
        .type {
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
            .item {
              & > a {
                display: flex;
                padding: 0 15px 10px 15px;
                border-bottom: 1px solid #ccc;
                .content {
                  flex: 1;
                  .title {
                    line-height:20px;
                    font-size: 14px;
                    color: #232323;
                  }
                  .desc {
                    line-height:17px;
                    font-size: 12px;
                    color: #A0A0A0;
                  }
                }
                .state {
                  flex: 0 0 50px;
                  font-size: 12px;
                  text-align: right;
                  &.default {
                    color: #333;
                  }
                  &.on {
                    color: #259b24;
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
  }


</style>

<script>
  var xuncha = [
    {
      id: 1,
      title: '设施设备日常巡查',
      executor: '杨队长',
      time: '17:00',
      state: 1,
      feedback: ''
    },
    {
      id: 2,
      title: '设施设备日常巡查',
      executor: '杨队长',
      time: '17:00',
      state: 1,
      feedback: 'qweq'
    },
    {
      id: 3,
      title: '设施设备日常巡查',
      executor: '杨队长',
      time: '18:00',
      state: 2,
      feedback: ''
    },
    {
      id: 4,
      title: '设施设备日常巡查',
      executor: '杨队长',
      time: '17:00',
      state: 3,
      feedback: 'dada'
    },
    {
      id: 5,
      title: '设施设备日常巡查',
      executor: '杨队长',
      time: '17:00',
      state: 3,
      feedback: ''
    }
  ];
  var zhiban = [
    {
      id: 1,
      title: '消防控制室白班',
      executor: '杨队长',
      time: '18:00-22:00',
      state: 1,
      feedback: 'asda'
    },
    {
      id: 2,
      title: '消防控制室白班',
      executor: '杨队长',
      time: '17:00-23:00',
      state: 2,
      feedback: ''
    },
    {
      id: 3,
      title: '消防控制室白班',
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
          state: {
            xuncha: [
              {text: '未开始', state: 1},
              {text: '待上传', state: 2},
              {text: '巡查中', state: 3},
              {text: '已完成', state: 4},
            ],
            zhiban: [
              {text: '未开始', state: 1},
              {text: '值班中', state: 2},
              {text: '已完成', state: 3}
            ]
          }
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
        this.translateData(this.xunchaList, 'xuncha');
        this.translateData(this.zhibanList, 'zhiban');
      },
      translateData(data, type){
        data.forEach(item => {
          item.stateName = this.initData.state[type][item.state - 1].text;
        });
      }
    },
    components: {}
  }
</script>
