import Vue from 'vue';
import VueRouter from 'vue-router';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import Routers from './router';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(MintUI);


//定义路由
const router = new VueRouter(Routers);

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
