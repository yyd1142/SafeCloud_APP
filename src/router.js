import enter from './views/enter/enter.vue';
import message from './views/message/message.vue';
import xuncha from './views/xuncha/xuncha.vue';
import xunchaInfo from './views/xuncha/info.vue';
import zhiban from './views/zhiban/zhiban.vue';
import score from './views/score/score.vue';
import evaluation from 'views/address/evaluation.vue';
import addressDetail from 'views/address/addressDetail.vue';
import addInsideContact from 'views/address/addInsideContact.vue';
import addOutsideContact from 'views/address/addOutsideContact.vue';
import addDepartment from 'views/address/addDepartment.vue';
import editDepartment from 'views/address/editDepartment.vue';
import personData from 'views/person/personData.vue';
import config from 'views/config/config.vue';
import messageDetail from 'views/message/info.vue';
import noticeList from 'views/notice/noticeList.vue';
import noticeDetail from 'views/notice/info.vue';
import basicInformation from 'views/basicInfomation/basicInformation.vue'

const routers = {
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/enter'
    },
    {
      path: '/enter',
      component: enter
    },
    {
      path: '/message',
      component: message
    },
    {
      path: '/message/:pid',
      component: messageDetail
    },
    {
      path: '/xuncha',
      component: xuncha
    },
    {
      path: '/xuncha_info',
      component: xunchaInfo
    },
    {
      path: '/zhiban',
      component: zhiban
    },
    {
      path: '/score',
      component: score
    },
    {
      path: '/evaluation',
      component: evaluation
    },
    {
      path: '/address_detail/:pid',
      component: addressDetail
    },
    {
      path: '/add_inside_contact',
      component: addInsideContact
    },
    {
      path: '/add_inside_contact/:pid',
      component: addInsideContact
    },
    {
      path: '/add_outside_contact',
      component: addOutsideContact
    },
    {
      path: '/add_department',
      component: addDepartment
    },
    {
      path: '/edit_department',
      component: editDepartment
    },
    {
      path: '/person_data',
      component: personData
    },
    {
      path: '/config',
      component: config
    },
    {
      path: '/notice',
      component: noticeList
    },
    {
      path: '/notice/:pid',
      component: noticeDetail
    },
    {
      path: '/basic_info',
      component: basicInformation
    }
  ]
};

export default routers;
