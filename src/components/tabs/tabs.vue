<template>
  <div>
    <!--视区-->
    <mt-tab-container v-model="selected">

      <mt-tab-container-item :id="tabsList[0].id">
        <v-home></v-home>
      </mt-tab-container-item>

      <mt-tab-container-item :id="tabsList[1].id">
        <v-mission></v-mission>
      </mt-tab-container-item>

      <mt-tab-container-item :id="tabsList[2].id">
        <v-notice></v-notice>
      </mt-tab-container-item>

      <mt-tab-container-item :id="tabsList[3].id">
        <v-person></v-person>
      </mt-tab-container-item>

    </mt-tab-container>

    <!--tabs-->
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item v-for="tab in tabsList" :id="tab.id">
          <span class="tab-icon-font"><i class="icon iconfont" :class="tab.class"></i></span>
          {{tab.name}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script src="./tabs.js"></script>

<style lang="less" scoped>
  .tab-icon-font {
    width: 100%;
    display: block;
    margin-bottom: 5px;
    text-align: center;
    i {
      font-size: 25px;
    }
  }
</style>
