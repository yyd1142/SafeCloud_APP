import enter from './views/enter/enter.vue';
import score from './views/score/score.vue';
import message from './views/message/message.vue';
import xuncha from './views/xuncha/xuncha.vue';
import xunchaInfo from './views/xuncha/info.vue';
import xunchaList from './views/xuncha/XunchaList.vue';
import addXunchaPage from './views/xuncha/AddXunchaPage.vue';
import addXunchaBase from './views/xuncha/AddXunchaBase.vue';
import addXunchaDetail from './views/xuncha/AddXunchaDetail.vue';
import addXunchaDevice from './views/xuncha/AddXunchaDevice.vue';
import zhiban from './views/zhiban/zhiban.vue';
import zhibanList from './views/zhiban/ZhibanList.vue';
import addZhiban from './views/zhiban/addZhiban.vue';
import jianchaList from './views/jiancha/JianchaList.vue';
import weixiuList from 'src/views/weixiu/WeixiuList.vue';
import baoyangList from 'src/views/baoyang/BaoyangList.vue';
import jianceList from 'src/views/jiance/JianceList.vue';
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
import trainList from 'views/train/train.vue';
import pastScore from 'views/train/pastScore.vue';
import exam from 'views/train/exam.vue';
import startExam from 'views/train/startExam.vue';
import hiddenDangerList from 'views/hiddenDanger/hiddenDangerList.vue';
import hiddenDangerDetail from 'views/hiddenDanger/info.vue';

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
      path: '/xuncha_list',
      component: xunchaList
    },
    {
      path: '/add_xuncha_page',
      component: addXunchaPage
    },
    {
      path: '/add_xuncha_base',
      component: addXunchaBase
    },
    {
      path: '/add_xuncha_detail',
      component: addXunchaDetail
    },
    {
      path: '/add_xuncha_device',
      component: addXunchaDevice
    },
    {
      path: '/zhiban',
      component: zhiban
    },
    {
      path: '/zhiban_list',
      component: zhibanList
    },
    {
      path: '/add_zhiban',
      component: addZhiban
    },
    {
      path: '/jiancha_list',
      component: jianchaList
    },
    {
      path: '/weixiu_list',
      component: weixiuList
    },
    {
      path: '/baoyang_list',
      component: baoyangList
    },
    {
      path: '/jiance_list',
      component: jianceList
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
    },
    {
      path: '/train',
      component: trainList
    },
    {
      path: '/past_score',
      component: pastScore
    },
    {
      path: '/exam/:pid',
      component: exam
    },
    {
      path: '/start_exam',
      component: startExam
    },
    {
      path: '/hidden_danger',
      component: hiddenDangerList
    },
    {
      path: '/hidden_danger/:pid',
      component: hiddenDangerDetail
    }
  ]
};

export default routers;
