import Api from 'api';
import { Progress, Navbar, TabItem, TabContainer, TabContainerItem, Toast } from 'mint-ui';
import newsList from './newsList.vue';
var _isNotData = false;
var i = 1;
export default {
    props: ['identity'],
    data() {
        return {
            selected: '1',
            swipeable: true,
            actionClass: 'action-item',
            actions: [
                { class: 'icon-text', text: '任务概况', url: '/enter?name=mission' },
                { class: 'icon-text', text: '通知公告', url: '/notice' },
                { class: 'icon-text', text: '安全活动', url: '/' },
                { class: 'icon-text', text: '基本信息', url: '/basic_info' },
                { class: 'icon-text', text: '教育培训', url: '/train' },
                { class: 'icon-text', text: '隐患库', url: '/hidden_danger' },
                { class: 'icon-text', text: '视频监控', url: '/' },
                { class: 'icon-text', text: '电气监测', url: '/' },
                { class: 'icon-text', text: '设施设备', url: '/device' }],
            aq_actions: [{ class: 'icon-text', text: '今日巡查', url: '/' },
            { class: 'icon-text', text: '今日值班', url: '/' },
            { class: 'icon-text', text: '通知公告', url: '/notice' },
            { class: 'icon-text', text: '教育培训', url: '/train' },
            { class: 'icon-text', text: '基本信息', url: '/basic_info' }],
            newsDatas: [1, 2],
            scoreItem: {
                company: '华润新鸿基房地产（无锡）有限公司(万象城)', value: 90, level: '优秀'
            },
            loading: false,
            allLoaded: false,
            wrapperHeight: 0
        }
    },
    mounted() {
        this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    },
    methods: {
        safeScore() {
            let self = this;
            let params = {
                m: 'list',
                page: page
            };
            // Api.getSafeScore(params).then(result => {
            //     if (!result) return false
            //     if (result.code == 0) {
            //         self.scoreItem = result.response;
            //     }
            // })
        },
        //新闻列表
        newsList(page) {
            let self = this;
            let params = {
                m: 'list',
                page: page
            };
            // Api.getNewList(params).then(result => {
            //     if (!result) return false
            //     if (result.code == 0) {
            //         if (result.response.datas.length == 0) {
            //             Toast({
            //                 message: '暂无更多数据',
            //                 position: 'middle',
            //                 duration: 2500
            //             });
            //             _isNotData = true;
            //             self.loading = false;
            //         } else {
            //             self.newsDatas = self.newsDatas.concat(result.response.datas);
            //         }
            //     }
            // })
        },
        tab(id) {
            console.log(id);
        },
        loadMore() {
            if (!_isNotData) {
                i = i + 1; //页数
                this.loading = true;
                // this.newsList(i);
                setTimeout(() => {
                    Toast({
                        message: '暂无更多数据',
                        position: 'middle',
                        duration: 2500
                    });
                    _isNotData = true;
                    this.loading = false;
                }, 2500);
            }
        },
        routerLink(item) {
            let self = this;
            this.$router.push(item.url);
        }
    },
    components: {
        'news-list': newsList,
        'mt-progress': Progress,
        'mt-navbar': Navbar,
        'mt-tab-item': TabItem,
        'mt-tab-container': TabContainer,
        'mt-tab-container-item': TabContainerItem
    }
}


