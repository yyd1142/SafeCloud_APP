<template>
  <div>
    <mt-header fixed title="任务">
      <mt-button slot="right">日历</mt-button>
    </mt-header>
    <div class="page-wrap">
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
          <ul class="mission-table-view">
            <li class="mission-table-cell" v-for="item in 8">
                <span>进行中</span>
                <div class="mission-content">
                  日期：1-01 至 1-15<br>
                  距离下次巡查开始：1天0小时24分
                </div>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'重要事项 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 4" :title="'重要事项 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <mt-cell v-for="n in 4" :title="'重要事项 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <mt-cell v-for="n in 4" :title="'重要事项 ' + n" />
        </mt-tab-container-item>
    </div>
  </div>
</template>

<script src="./mission.js"></script>
<style lang="less" scoped>
  .mission-table-view{
    width: 100%;
    padding: 0;
    margin: 10px 0 0 0;
    list-style: none;
  }
  .mission-table-cell{
    width: 100%;
    position: relative;
    height: 80px;
    border-bottom: 1px solid #ddd;
  span{
    position: absolute;
    width: 100px;
    text-align: center;
    right: 0;
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #4caf50;
    color: #4caf50;
    border-radius: 4px;
    top: 0;
  }
  }
  .mission-content{
    width: 100%;
    height: 80px;
    line-height: 24px;
    padding: 10px;
  }
</style>