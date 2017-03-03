<template>
  <div>
    <mt-header class="header-wrap" fixed title="巡查任务列表">
      <router-link to="/enter?name=mission" slot="left">
        <mt-button class="header-item" icon="back"></mt-button>
      </router-link>
      <router-link to="/add_xuncha_page" slot="right">
        新增
      </router-link>
    </mt-header>
    <div class="page-wrap xuncha-page-wrap">
      <div class="sel-wrap">
        <select class="sel" v-model="formData.build">
          <option value="" disabled>-- 建筑 --</option>
          <option :value="item.value" v-for="item in selData.build">{{item.text}}</option>
        </select>
        <select class="sel" v-model="formData.XKS">
          <option value="" disabled>-- 消控室 --</option>
          <option :value="item.value" v-for="item in selData.XKS">{{item.text}}</option>
        </select>
        <select class="sel" v-model="formData.hideDanger">
          <option value="" disabled>-- 隐患 --</option>
          <option :value="item.value" v-for="item in selData.hideDanger">{{item.text}}</option>
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
  let xunchaList = [
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
  let build = [
    {text: '万象城A栋', value: '万象城A栋'},
    {text: '东方科技大厦', value: '东方科技大厦'},
  ];
  let XKS = [
    {text: '消防控制室A', value: '消防控制室A'},
    {text: '消防控制室B', value: '消防控制室B'},
    {text: '消防控制室C', value: '消防控制室C'}
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
            {text: '进行中', value: 1},
            {text: '待确认', value: 2},
            {text: '未上传', value: 3}
          ]
        },
        selData: {
          build: [],
          XKS: [],
          hideDanger: [
            {text: '有隐患', value: 1},
            {text: '无隐患', value: 2},
          ]
        },
        formData: {
          build: "",
          XKS: "",
          hideDanger: ""
        },
        xunchaList: []
      }
    },
    created(){
      this.getData();
    },
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top - 100;
    },
    watch: {
      formData: {}
    },
    methods: {
      getData(){
        this.getListData(3);
        this.getSelData();
      },
      getListData(count){
        let listLength = this.xunchaList.length;
        for (let i = listLength; i < (listLength + count); i++) {
          if (xunchaList[i]) {
            this.xunchaList.push(xunchaList[i]);
          }
        }
        this.translateData(this.xunchaList);
      },
      getSelData(){
        this.selData.build = build;
        this.selData.XKS = XKS;
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
            duration: 3000
          });
        } else {
          this.getListData(3);
          this.$refs.loadmore.onBottomLoaded();
        }
      }
    },
    components: {}
  }
</script>


