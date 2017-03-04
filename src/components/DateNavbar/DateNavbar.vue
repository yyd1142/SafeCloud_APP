<template>
  <div class="date-navbar">
    <mt-navbar v-model="selected">
      <mt-tab-item :id="index+1+''" v-for="(item,index) in dateList">
        <div class="day">{{item.day}}</div>
        <div class="date">{{item.date}}</div>
      </mt-tab-item>
    </mt-navbar>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .date-navbar {
    box-shadow: 0 2px 6px 0 rgba(212,212,212,0.50);
    .mint-tab-item {
      padding-top: 5px;
      padding-bottom: 3px;
      &.is-selected {
        .day, .date {
          color: #0398FF;
        }
      }
      .day {
        line-height: 17px;
        font-size: 12px;
        color: #5E5E5E;
      }
      .date {
        line-height: 20px;
        font-size: 14px;
        font-weight: 400;
        color: #313336;
      }
    }
  }
</style>

<script>
  export default{
    data() {
      return {
        selected: '3',
        dateList: [
          {
            value: '',
            day: '',
            date: ''
          }
        ]
      }
    },
    watch: {
      selected: function (val) {
        this.selValue(val);
        this.getDate(this.dateList[val - 1].value);
        this.selected = '3';
      }
    },
    mounted() {
      this.getDate();
    },
    methods: {
      getDate(_date){
        let dateList = [];
        let selDate = null;
        if (_date) {
          selDate = _date;
        } else {
          selDate = new Date();
        }
        let selDateDate = selDate.getDate();
        for (let i = -2; i < 3; i++) {
          let date = new Date(selDate);
          date.setDate(selDateDate + i);
          dateList.push(date);
        }
        this.dateList = dateList.map((item, key) => {
          return this.translateDate(item);
        });
      },
      translateDate(_date){
        let day = _date.getDay();
        let today = new Date();
        if (_date.getFullYear() === today.getFullYear() && _date.getMonth() === today.getMonth() && _date.getDate() === today.getDate()) {
          day = '今天';
        } else {
          switch (day) {
            case 1:
              day = '周一';
              break;
            case 2:
              day = '周二';
              break;
            case 3:
              day = '周三';
              break;
            case 4:
              day = '周四';
              break;
            case 5:
              day = '周五';
              break;
            case 6:
              day = '周六';
              break;
            case 0:
              day = '周日';
              break;
          }
        }
        let date = `${_date.getMonth() + 1}月${_date.getDate()}日`;
        return {
          value: _date,
          day: day,
          date: date
        };

      },
      selValue(val){
        this.$emit('sel', val);
      }
    },
    components: {}
  }
</script>


