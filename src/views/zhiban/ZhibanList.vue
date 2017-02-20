<template>
  <div>
    <mt-header fixed title="值班任务列表">
      <router-link to="/enter?name=mission" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/add_zhiban" slot="right">
        新增
      </router-link>
    </mt-header>
    <div class="page-wrap zhiban-page-wrap">
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
      </div>
      <div class="list-wrap">
        <ul class="list">
          <li class="item" v-for="n in 3">
            <div class="info">
              消防控制室白班
              <br>
              执行人：杨队长
              <br>
              值班时间：8:00-12:00
            </div>
            <div class="state" :class="{'succ':n==1,'blue':n==2,'warm':n===3}">
              状态：进行中
              反馈：无
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .zhiban-page-wrap {
    .sel-wrap {
      display: flex;
      width: 100%;
      .sel {
        flex: 1;
        height: 30px;
        font-size: 14px;
        border-radius: 4px;
        color: #999;
      }
    }
    .list-wrap {
      .list{
        padding:0;
        margin:0;
        .item {
          display: flex;
          padding: 10px 15px;
          border-bottom: 1px solid #ccc;
          .info {
            flex: 1;
          }
          .state {
            flex: 0 0 100px;
            margin-top:10px;
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
</style>

<script>
  export default{
    data() {
      return {}
    },
    mounted() {

    },
    methods: {},
    components: {}
  }
</script>


