import { Tabbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';
import vHome from '../../views/home/home.vue';
import vMission from '../../views/mission/mission.vue';
import vAddress from '../../views/address/address.vue';
import vPerson from '../../views/person/person.vue';

export default {
  data() {
    return {
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
    'v-mission': vMission,
    'v-address': vAddress,
    'v-person': vPerson,
    'mt-tab-container': TabContainer,
    'mt-tab-container-item': TabContainerItem,
    'mt-tabbar': Tabbar,
    'mt-tabbar-item': TabItem
  }
}
