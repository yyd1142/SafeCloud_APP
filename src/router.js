import enter from './views/enter/enter.vue';
import message from './views/message/message.vue';
import xuncha from './views/xuncha/xuncha.vue';
import xunchaInfo from './views/xuncha/info.vue';
import zhiban from './views/zhiban/zhiban.vue';
import score from './views/score/score.vue';
import evaluation from './views/notice/evaluation.vue';

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
        }
    ]
}

export default routers;