<template>
  <div>
    <mt-header class="header-wrap" fixed title="任务">
      <mt-button class="header-item" slot="right">日历</mt-button>
    </mt-header>
    <div class="page-wrap safer-mission-page-wrap">
      <date-navbar :selected="selected" @sel="getSel"></date-navbar>
      <mt-tab-container class="container" v-model="selected">
        <mt-tab-container-item id="3">
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
                      <div class="state">
                        <mt-badge class="badge" size="small">28</mt-badge>
                        <span class="text"
                              :class="{'default':item.state==1||item.state==4,'warm':item.state==2,'on':item.state==3}">
                          {{item.stateName}}
                        </span>
                        <i class="icon iconfont icon-xiangyoujiantou"></i>
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
                      <div class="state">
                        <!--<mt-badge class="badge" size="small">28</mt-badge>-->
                        <span class="text"
                              :class="{'on':item.state==2}">
                          {{item.stateName}}
                        </span>
                        <i class="icon iconfont icon-xiangyoujiantou"></i>
                      </div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <mt-cell v-for="n in 5" :title="'重要事项 ' + n"/>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less" scoped>
  @import "../../config.less";

  .safer-mission-page-wrap {
    .container {
      margin-top: 14px;
      .border-top(@borderGray);
      .mission-table {
        width: 100%;
        padding: 0;
        list-style: none;
        .cell {
          position: relative;
          border-bottom: 1px solid #ddd;
          .type {
            padding-left: 14px;
            width: 100%;
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            background: @bgGray;
            color: @textBlue;
          }
          .list-wrap {
            background: @bgWhite;
            .list {
              padding: 0;
              margin: 0;
              .item {
                & > a {
                  display: flex;
                  box-sizing: border-box;
                  height: 50px;
                  padding: 6px 25px 6px 14px;
                  border-bottom: 1px solid #ccc;
                  .content {
                    flex: 1;
                    .title {
                      line-height: 20px;
                      font-size: 14px;
                    }
                    .desc {
                      line-height: 17px;
                      font-size: 12px;
                      color: @textGray;
                    }
                  }
                  .state {
                    position: relative;
                    flex: 0 0 70px;
                    width: 70px;
                    margin-top: 10px;
                    font-size: 12px;
                    text-align: right;
                    .icon {
                      position: absolute;
                      top: 1px;
                      right: -16px;
                      font-size: 12px;
                      font-weight: 700;
                      color: @textGray;
                    }
                    .badge {
                      background: @redColor;
                    }
                    .text {
                      line-height: 17px;
                      &.default {
                      }
                      &.on {
                        color: @successColor;
                      }
                      &.warm {
                        color: @warningColor;
                      }
                    }

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
  import DateNavbar from '../../components/DateNavbar/DateNavbar.vue';
  export default {
    data() {
      return {
        selected: '3',
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
      },
      getSel(val){
        this.selected = val;
      }
    },
    components: {
      DateNavbar
    }
  }
</script>
