<template>
  <div>
    <!--视区-->
    <mt-tab-container v-model="selected">

      <mt-tab-container-item :id="tabsList[0].id">
        <v-home :identity="identity"></v-home>
      </mt-tab-container-item>

      <mt-tab-container-item :id="tabsList[1].id">
        <admin-mission v-if="identity===1"></admin-mission>
        <safer-mission v-if="identity!==1"></safer-mission>
      </mt-tab-container-item>

      <mt-tab-container-item :id="tabsList[2].id">
        <v-address></v-address>
      </mt-tab-container-item>

      <mt-tab-container-item :id="tabsList[3].id">
        <v-person></v-person>
      </mt-tab-container-item>

    </mt-tab-container>

    <!--tabs-->
    <mt-tabbar class="tab-wrap" fixed v-model="selected">
      <mt-tab-item v-for="tab in tabsList" :id="tab.id">
        <span class="tab-icon-font"><i class="icon iconfont" :class="tab.class"></i></span>
        <span class="tab-name-font">{{tab.name}}</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<style lang="less" rel="stylesheet/less" scoped>
  .tab-icon-font {
    width: 100%;
    display: block;
    margin-bottom: 2px;
    text-align: center;
    i {
      font-size: 24px;
    }
  }
  .tab-name-font{
    font-size: 10px;
  }
</style>

<script>
  import {Tabbar, TabItem, TabContainer, TabContainerItem} from 'mint-ui';
  import vHome from '../../views/home/home.vue';
  import AdminMission from '../../views/mission/adminMission.vue';
  import SaferMission from '../../views/mission/saferMission.vue';
  import vAddress from '../../views/address/address.vue';
  import vPerson from '../../views/person/person.vue';

  export default {
    data() {
      return {
        identity: 2,
        selected: this.$route.query.name || 'home',
        swipeable: true,
        tabsList: [
          {
            name: '首页',
            class: 'icon-home',
            id: 'home'
          },
          {
            name: '任务',
            class: 'icon-Viewlist',
            id: 'mission'
          },
          {
            name: '通讯录',
            class: 'icon-shuffling-banner',
            id: 'address'
          },
          {
            name: '我的',
            class: 'icon-account-filling',
            id: 'person'
          }
        ]
      }
    },
    components: {
      'v-home': vHome,
      'admin-mission': AdminMission,
      'safer-mission': SaferMission,
      'v-address': vAddress,
      'v-person': vPerson,
      'mt-tab-container': TabContainer,
      'mt-tab-container-item': TabContainerItem,
      'mt-tabbar': Tabbar,
      'mt-tabbar-item': TabItem
    }
  }
</script>
