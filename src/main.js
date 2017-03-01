import Vue from 'vue';
import VueRouter from 'vue-router';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import Routers from './router';
import App from './App.vue';
import VeeValidate, { Validator } from 'vee-validate';
import messages from './language/zh_CN';

Validator.updateDictionary({
  zh_CN: {
    messages
  }
});

const config = {
  errorBagName: 'errors', // change if property conflicts.
  delay: 0,
  locale: 'zh_CN',
  messages: null,
  strict: true
};

// const isMobile = {
//   messages: {
//     en: (field, args) => '必须是11位手机号码',
//   },
//   validate: (value, args) => {
//     return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
//   }
// }
// Validator.extend('mobile', isMobile);

Vue.use(VeeValidate, config);
Vue.use(VueRouter);
Vue.use(MintUI);


//定义路由
const router = new VueRouter(Routers);

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
