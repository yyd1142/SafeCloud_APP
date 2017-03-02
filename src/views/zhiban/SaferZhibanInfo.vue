<template>
  <div>
    <mt-header fixed :title="zhibanInfo.name">
      <mt-button icon="back" slot="left" @click.native="back()"></mt-button>
    </mt-header>
    <div class="page-wrap safer-zhiban-info">
      <div class="status-wrap">
        <div class="btn" :class="{'start':status===1,'on':status===2,'end':status===3}" @click="changeStatus">
          <p class="logo" v-if="status===3"><i class="icon iconfont icon-account-filling"></i></p>
          <span v-html="status===1?('开始<br>值班'):(status===2?'结束<br>值班':'已完成')"></span>
        </div>
        <div class="desc" v-if="status!==1">
          本次值班共用时{{timing.text}}
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
      <div class="record-wrap">
        <p class="record" v-for="item in zhibanRecord">{{item.text}}</p>
      </div>
      <div class="footer-wrap" v-if="status===2">
        <mt-button class="btn" size="large">隐患查报</mt-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .safer-zhiban-info {
    > div {
      background: #fff;
    }
    .status-wrap {
      position: relative;
      height: 150px;
      padding-top: 20px;
      .btn {
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translate(-50%, 0);
        box-sizing: border-box;
        width: 90px;
        height: 90px;
        padding-top: 23px;
        border-radius: 50%;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        &.start {
          top: 50%;
          transform: translate(-50%, -50%);
          background: #0089dc;
          color: #fff;
        }
        &.on {
          background: #fff;
          border: 1px solid #0089dc;
          color: #0089dc;
        }
        &.end {
          background: #fff;
          border: 1px solid #0089dc;
          color: #0089dc;
          font-size: 16px;
          .logo {
            margin: 0;
          }
        }
      }
      .desc {
        position: absolute;
        bottom: 25px;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
    .info-wrap {
      margin-top: 10px;
      .desc {
        padding-left: 10px;
        &:after {
          display: table;
          content: "";
        }
      }
    }
    .record-wrap {
      margin-top: 10px;
      min-height: 300px;
    }
    .footer-wrap {
      position: fixed;
      width: 100%;
      bottom: 0;
      .btn {
        background: #f44336;
        color:#fff;
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
    desc: ''
  };
  let zhibanRecord = [];
  export default{
    data() {
      return {
        status: 1,
        timing: {
          minute: 0,
          hour: 0,
          text: ''
        },
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
          this.reckonByTime();
        }
      }
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
        this.zhibanInfo.personName = person.join(",");
      },
      getZhibanRecord(){
        this.zhibanRecord = zhibanRecord;
      },
      changeStatus(){
        if (this.status === 3) {
          this.status = 1;
//          return;
        } else {
          this.status++;
        }
      },
      reckonByTime(){
        this.timing.minute = 0;
        this.filterTime();
        let timer = setInterval(() => {
          this.timing.minute++;
          this.filterTime();
          if (this.status !== 2) {
            clearInterval(timer);
            timer = null;
          }
        }, 600);
      },
      filterTime(){
        let m = this.timing.minute;
        let h = this.timing.hour;
        if (m % 60 === 0 && m !== 0) {
          m = 0;
          h++;
        }
        this.timing.text = `${h}时${m}分`;
        this.timing.minute = m;
        this.timing.hour = h;
      },
      back() {
        this.$router.go(-1);
      }
    },
    components: {}
  }
</script>


