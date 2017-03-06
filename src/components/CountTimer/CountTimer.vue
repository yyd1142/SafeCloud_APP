<template>
  <div>
    {{text||共用时}}{{timing.text}}
  </div>
</template>

<style lang="less" rel="stylesheet/less">
</style>

<script>
  export default{
    data() {
      return {
        timer: null,
        startTime: null,
        timing: {
          second: 0,
          minute: 0,
          hour: 0,
          text: ''
        },
      }
    },
    props: ['text', 'start'],
    created() {

    },
    computed: {
//      startTime: function () {
//        return this.start;
//      }
    },
    methods: {
      startTimer(){
        this.getTime();
        this.reckonByTime();
      },
      getTime(){
        if (this.start == 0) {
          this.startTime = new Date();
        } else {
          this.startTime = new Date("2017/03/02 10:50:00");
//          this.startTime = this.start;
        }
      },
      reckonByTime(){
        let startTime = this.startTime;
        let nowTime = new Date();
        let timing = nowTime - startTime;
        this.timing.second = Math.floor((timing / 1000) % 60);
        this.timing.minute = Math.floor((timing / 1000 / 60) % 60);
        this.timing.hour = Math.floor(timing / 1000 / 60 / 60);
        this.filterTime();
//        let i = 0;
        this.timer = setInterval(() => {
          this.timing.second++;
          this.filterTime();
//          console.log(i++);
//          if (this.status !== 2) {
//            this.clearTimer();
//          }
        }, 1000);

      },
      filterTime(){
        let s = this.timing.second;
        let m = this.timing.minute;
        let h = this.timing.hour;
        if (s % 60 === 0 && s !== 0) {
          s = 0;
          m++;
        }
        if (m % 60 === 0 && m !== 0) {
          m = 0;
          h++;
        }
        this.timing.text = `${h}小时${m}分${s}秒`;
        this.timing.second = s;
        this.timing.minute = m;
        this.timing.hour = h;
      },
      clearTimer(){
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    components: {}
  }
</script>


