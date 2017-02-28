<template>
  <div>
    <mt-header fixed title="巡查任务列表">
      <router-link to="/enter?name=mission" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/add_xuncha_page" slot="right">
        新增
      </router-link>
    </mt-header>
    <div class="page-wrap xuncha-page-wrap">
      <div class="sel-wrap">
        <select class="sel">
          <option value="万象城A栋">万象城A栋</option>
          <option value="万象城B栋">万象城B栋</option>
        </select>
        <select class="sel">
          <option value="消防控制室A">消防控制室A</option>
          <option value="消防控制室B">消防控制室B</option>
          <option value="消防控制室C">消防控制室C</option>
        </select>
        <select class="sel">
          <option value="隐患" disabled selected>隐患</option>
          <option value="有隐患">有隐患</option>
          <option value="无隐患">无隐患</option>
        </select>
      </div>
      <div class="list-wrap" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" @bottom-status-change="handleBtmChange"
                     ref="loadmore">
          <ul class="list">
            <li class="item" v-for="item in xunchaList">
              <router-link :to="'/xuncha_info/' + item.id">
                <div class="info">
                  设施设备日常巡查
                  <br>
                  执行人：{{item.executor}}
                  <br>
                  值班时间：{{item.time}}
                </div>
                <div class="state" :class="{'succ':item.state==1,'blue':item.state==2,'warm':item.state==3}">
                  状态：{{item.stateName}}
                  反馈：{{item.feedBack||'无'}}
                </div>
              </router-link>
            </li>
          </ul>
          <!--<div slot="bottom" class="mint-loadmore-bottom">-->
          <!--<span v-show="bottomStatus !== 'loading'" :class="{ 'rotate':bottomStatus === 'drop' }">↑</span>-->
          <!--<span v-show="bottomStatus === 'loading'">Loading...</span>-->
          <!--</div>-->
        </mt-loadmore>
      </div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .xuncha-page-wrap {
    .sel-wrap {
      display: flex;
      .sel {
        flex: 1;
        height: 30px;
        font-size: 14px;
        border-radius: 4px;
        color: #999;
      }
    }
    .list-wrap {
      .list {
        padding: 0;
        margin: 0;
        .item > a {
          display: flex;
          padding: 10px 15px;
          border-bottom: 1px solid #ccc;
          .info {
            flex: 1;
          }
          .state {
            flex: 0 0 100px;
            margin-top: 10px;
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
      .no-more-data {
        margin-top: 16px;
        text-align: center;
        color: #999;
      }
    }
  }
</style>

<script>
  var xunchaList = [
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
  import {Toast} from 'mint-ui';
  export default{
    data() {
      return {
        bottomStatus: '',
        allLoaded: false,
        wrapperHeight: 0,
        initData: {
          state: [
            {text: '进行中', state: 1},
            {text: '待确认', state: 2},
            {text: '未上传', state: 3}
          ]
        },
        xunchaList: []
      }
    },
    created(){
      this.getData(3);
    },
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top - 100;
    },
    methods: {
      getData(count){
        let listLength = this.xunchaList.length;
        for (let i = listLength; i < (listLength + count); i++) {
          if (xunchaList[i]) {
            this.xunchaList.push(xunchaList[i]);
          }
        }
//        this.xunchaList = xunchaList;
        this.translateData(this.xunchaList);
      },
      translateData(data){
        data.forEach(item => {
          item.stateName = this.initData.state[item.state - 1].text;
        });
      },
      handleBtmChange(sta){
        this.bottomStatus = sta;
      },
      loadBottom(){
        if (this.xunchaList.length >= xunchaList.length) {
          this.allLoaded = true;
          Toast({
            message: '没有更多数据了',
            position: 'bottom',
            duration: 5000
          });
        } else {
          this.getData(3);
          this.$refs.loadmore.onBottomLoaded();
        }
      }
    },
    components: {}
  }
</script>


