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
    }
  ]
};

export default routers;
