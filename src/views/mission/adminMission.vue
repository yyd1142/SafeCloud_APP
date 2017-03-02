<template>
  <div>
    <mt-header class="header-wrap" fixed title="任务">
      <mt-button class="header-item" slot="right">日历</mt-button>
    </mt-header>
    <div class="page-wrap admin-mission-page-wrap">
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
            <li class="cell" v-for="item in MissionListShow">
              <router-link :to="item.link">
                <div class="title">
                  {{item.name}}
                </div>
                <span class="badge">进行中：<span class="num">{{item.a}}</span></span>
                <span class="badge">待确认：<span class="num">{{item.b}}</span></span>
                <span class="badge">未上传：<span class="num">{{item.c}}</span></span>
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
  .admin-mission-page-wrap {
    .mission-table {
      width: 100%;
      padding: 0;
      margin: 10px 0 0 0;
      list-style: none;
      .cell {
        position: relative;
        height: 80px;
        padding: 10px;
        border-bottom: 1px solid #ddd;
        a {
          display: block;
        }
        .badge {
          display: inline-block;
          width: 90px;
          height: 35px;
          line-height: 35px;
          margin-right: 5px;
          border-radius: 4px;
          border: 1px solid #999;
          text-align: center;
          font-size: 12px;
          .num {
            color: #f00;
          }
        }
        .title {
          font-size: 18px;
          font-weight: 700;
          margin: 10px 0;
        }
        .des {

        }
        .progress {
          .mt-progress-content + div {
            flex: 0 0 50px;
            padding-left: 20px;
          }
        }
      }
    }
  }
</style>

<script>
  var mission = {
    zhiban: {
      a: 2,
      b: 3,
      c: 3
    },
    xuncha: {
      a: 2,
      b: 3,
      c: 4
    },
    jiancha: {
      a: 2,
      b: 3,
      c: 4
    },
    baoyang: {
      a: 2,
      b: 3,
      c: 4
    },
    weixiu: {
      a: 2,
      b: 9,
      c: 4
    },
    jiance: {
      a: 2,
      b: 3,
      c: 4
    }
  };
  import Api from '../../api';
  export default {
    data() {
      return {
        selected: '1',
        MissionListData: {},
        MissionListShow: {
          zhiban: {
            name: '值班任务',
            link: '/zhiban_list',
            a: '',
            b: '',
            c: ''
          },
          xuncha: {
            name: '巡查任务',
            link: '/xuncha_list',
            a: '',
            b: '',
            c: ''
          },
          jiancha: {
            name: '检查任务',
            link: '/jiancha_list',
            a: '',
            b: '',
            c: ''
          },
          baoyang: {
            name: '保养任务',
            link: '/baoyang_list',
            a: '',
            b: '',
            c: ''
          },
          weixiu: {
            name: '维修任务',
            link: '/weixiu_list',
            a: '',
            b: '',
            c: ''
          },
          jiance: {
            name: '检测任务',
            link: '/jiance_list',
            a: '',
            b: '',
            c: ''
          }
        }
      }
    },
    created(){
      this.getData();
    },
    methods: {
      getData(){
//        Api.adminMissionList({}).then(res => {
//          if (res.code === 0) {
        this.MissionListData = mission;
        let data = mission;
        let show = this.MissionListShow;
        for (let key in show) {
          show[key].a = data[key].a;
          show[key].b = data[key].b;
          show[key].c = data[key].c;
        }
//          }
//        });
      }
    },
    components: {}
  }
</script>
