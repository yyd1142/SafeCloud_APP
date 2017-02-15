import api from 'api';
import { Progress, Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';

export default {
    data() {
        return {
            selected: '1',
            actions: [{ class: 'icon-text', text: '任务概况' },
            { class: 'icon-text', text: '通知公告', url: '/notice' },
            { class: 'icon-text', text: '安全活动', url: '/' },
            { class: 'icon-text', text: '基本信息', url: '/basic_info' },
            { class: 'icon-text', text: '教育培训', url: '/' },
            { class: 'icon-text', text: '隐患库', url: '/' },
            { class: 'icon-text', text: '视频监控', url: '/' },
            { class: 'icon-text', text: '电气监测', url: '/' },
            { class: 'icon-text', text: '设施设备', url: '/' }]
        }
    },
    methods: {

    },
    components: {
        'mt-progress': Progress,
        'mt-navbar': Navbar,
        'mt-tab-item': TabItem,
        'mt-tab-container': TabContainer,
        'mt-tab-container-item': TabContainerItem
    }
}


