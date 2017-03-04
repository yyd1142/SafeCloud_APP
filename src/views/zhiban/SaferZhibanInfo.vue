<template>
  <div>
    <mt-header class="header-wrap" fixed :title="zhibanInfo.name">
      <mt-button class="header-item" icon="back" slot="left" @click.native="back()"></mt-button>
    </mt-header>
    <div class="page-wrap safer-zhiban-info" v-show="page==='base'">
      <div class="status-wrap" :class="{'hasDesc':status>1}">
        <div class="btn" :class="{'notYet':status===0,'start':status===1,'on':status===2,'end':status===3}"
             @click="changeStatus">
          <p class="logo" v-if="status===3"><i class="icon iconfont icon-success"></i></p>
          <div class="text"
               v-html="status===0?('未到<br>时间'):(status===1?('开始<br>值班'):(status===2?'结束<br>值班':'已完成'))"></div>
        </div>
        <div class="desc" v-show="status>1">
          <count-timer text="已用时" start="0" ref="CountTimer"></count-timer>
        </div>
      </div>
      <div class="info-wrap">
        <mt-cell title="日期" :value="zhibanInfo.time"></mt-cell>
        <mt-cell title="值班人" :value="zhibanInfo.personName"></mt-cell>
        <div class="desc">
          <p class="title">任务描述</p>
          <p class="content">{{zhibanInfo.desc||'无'}}</p>
        </div>
      </div>
      <div class="record-wrap" v-if="status>1">
        <!--<p class="record" v-for="item in zhibanRecord">{{item.text}}</p>-->
        <div class="record">
          <i class="sign btn-primary"></i>
          <div class="text">23:03 黄红灰下班</div>
        </div>
        <div class="record">
          <i class="sign btn-red"></i>
          <div class="text">19:33 黄红灰提交了一个安全隐患</div>
        </div>
      </div>
      <div class="footer-wrap" v-if="status===2">
        <mt-button class="btn" size="large" @click="page='check'">隐患查报</mt-button>
      </div>
    </div>
    <check-hide-danger @ctrl-page="page='base'" v-show="page==='check'"></check-hide-danger>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  @import "../../config.less";

  .safer-zhiban-info {
    > div {
      background: #fff;
    }
    .status-wrap {
      position: relative;
      height: 120px;
      padding-top: 20px;
      background: #F8FBFD;
      box-shadow: @baseShadow;
      &.hasDesc {
        height: 150px;
      }
      .btn {
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translate(-50%, 0);
        box-sizing: border-box;
        width: 80px;
        height: 80px;
        padding: 18px 23px;
        border-radius: 50%;
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        .text {
          width: 34px;
          height: 44px;
          line-height: 22px;
        }
        &.notYet {
          background: @bgDisabled;
          color: #fff;
        }
        &.start {
          background: @bgBlue;
          color: #fff;
        }
        &.on {
          background: #E2F4FF;
          border: 1px solid @borderBlue;
          color: @textBlue;
        }
        &.end {
          background: #E2F4FF;
          border: 1px solid @borderBlue;
          color: @textBlue;
          font-size: 12px;
          .logo {
            margin: 0;
            .icon{
              font-size:22px;
            }
          }
          .text {
            position: relative;
            left:-2px;
            margin-top:3px;
            min-width: 37px;
            text-align: center;
            line-height: 17px;
          }
        }
      }
      .desc {
        position: absolute;
        bottom: 18px;
        left: 50%;
        transform: translate(-50%, 0);
        min-width: 200px;
        line-height: 17px;
        font-size: 12px;
        text-align: center;
        color: @textBlue;
      }
    }
    .info-wrap {
      margin-top: 14px;
      .border-btm(@borderGray);
      font-size: 14px;
      .mint-cell-wrapper {
        padding: @cellPadding;
        font-size: 14px;
        .mint-cell-value {
          color: @textLB;
        }
      }
      .desc {
        padding: @cellPadding;
        line-height: 20px;
        background: @bgGray;
        &:after {
          display: table;
          content: "";
        }
        .title {
          margin: 0 0 2px 0;
          padding-top: 7px;
        }
        .content {
          margin: 0;
          min-height: 80px;
          color: @textGray;
        }
      }
    }
    .record-wrap {
      min-height: 300px;
      padding: 25px 14px 25px 31px;
      font-size: 12px;
      .record {
        position: relative;
        margin-bottom: 31px;
        .sign {
          position: absolute;
          top: 2px;
          left: -17px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .text{
          vertical-align: baseline;
        }
      }
    }
    .footer-wrap {
      position: fixed;
      width: 100%;
      bottom: 0;
      .btn {
        background: #f44336;
        color: #fff;
      }
    }
  }
</style>

<script>
  let zhibanInfo = {
    name: '消控室A',
    time: '1月15日 9:00-17:00',
    person: [
      {
        id: 1,
        name: '杨队长'
      },
      {
        id: 2,
        name: '王保安'
      }
    ],
    desc: '',
    startTime: 0
  };
  let zhibanRecord = [];
  import CountTimer from '../../components/CountTimer/CountTimer.vue';
  import CheckHideDanger from './CheckHideDanger.vue';
  export default{
    data() {
      return {
        page: 'base',
        status: 0,
        zhibanInfo: {},
        zhibanRecord: []
      }
    },
    created() {
      this.getData();
    },
    watch: {
      status: function (val) {
        if (val === 2) {
          this.$refs.CountTimer.startTimer();
        } else if (val === 3) {
          this.$refs.CountTimer.clearTimer();
        }
      },
    },
    methods: {
      getData(){
        this.getZhibanInfo();
        this.getZhibanRecord();
      },
      getZhibanInfo(){
        this.zhibanInfo = zhibanInfo;
        let person = this.zhibanInfo.person.map(item => {
          return item.name;
        });
        this.zhibanInfo.personName = person.join("、");
      },
      getZhibanRecord(){
        this.zhibanRecord = zhibanRecord;
      },
      changeStatus(){
        if (this.status !== 3) {
          this.status++;
        }
      },
      back() {
        this.$router.push("/enter?name=mission");
        this.$refs.CountTimer.clearTimer();
      }
    },
    components: {
      CountTimer,
      CheckHideDanger
    }
  }
</script>


