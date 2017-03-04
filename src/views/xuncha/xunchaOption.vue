<template>
    <div>
        <mt-header class="header-wrap" fixed title="巡查">
            <mt-button class="header-item" icon="back" slot="left" @click="back">返回</mt-button>
            <mt-button class="header-item" slot="right">往期结果</mt-button>
        </mt-header>
        <div class="page-wrap">
            <xuncha-status></xuncha-status>
            <ul class="xcop-table-views">
                <li class="xcop-table-cell yali-table-cell">
                    <div class="xcop-wrap">
                        <i class="icon iconfont icon-prompt xcop-icon yali-icon"></i>
                        <span class="item">压力指示装置</span>
                        <mt-switch class="xc-switch" v-model="isYali"></mt-switch>
                         <span class="yh-fuhe-item great">符合</span>
                         <!--<span class="yh-fuhe-item font-red">不符合</span>-->
                    </div>
                    <div class="xcop-wrap">
                        <i class="icon iconfont icon-prompt xcop-icon yali-icon"></i>
                        <span class="item">请在右侧输入压力数值</span>
                        <input class="xcop-input" type="number" placeholder="请输入数值">
                    </div>
                </li>
                <li class="xcop-table-cell" v-for="(item, index) in xcopDatas">
                    <div class="xcop-wrap">
                        <i class="icon iconfont" :class="item.icon" @click="open(item, index)"></i>
                        <span class="item" v-text="item.text"></span>
                        <mt-switch class="xc-switch" v-model="item.value"></mt-switch>
                         <span class="yh-fuhe-item great" v-if="item.value">符合</span>
                         <span class="yh-fuhe-item font-red" v-else>不符合</span>
                    </div>
                    <transition name="fade">
                        <div class="xcop-item" v-if="item.show">
                            <textarea class="xcop-textarea" placeholder="请输入隐患描述..."></textarea>
                            <ul class="xcop-photo-view">
                                <li class="xcop-photo-cell" v-for="(obj, index) in item.url">
                                    <div class="xcop-photo-item">
                                        <img src="/static/1.jpg" />
                                    </div>
                                </li>
                                <li class="xcop-photo-cell" @click="upload(index)">
                                    <div class="xcop-photo-item">
                                        <img src="/static/plus.png" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </transition>
                </li>
            </ul>
            <mt-button type="primary" size="large" class="btn-primary bottom-btn">确认</mt-button>
        </div>
    </div>
</template>

<script>
    import xunchaStatus from '../../components/xunchaStatusNavbar/xunchaStatus.vue';
    export default {
        data() {
            return {
                isYali: true,
                xcopDatas: [
                    {
                        value: true,
                        text: '基本配置',
                        show: false,
                        icon: 'icon-xiangxiajiantou xcop-icon',
                        url: []
                    }, {
                        value: true,
                        text: '配置方式',
                        show: false,
                        icon: 'icon-xiangxiajiantou xcop-icon',
                        url: []
                    }, {
                        value: true,
                        text: '环境状况',
                        show: false,
                        icon: 'icon-xiangxiajiantou xcop-icon',
                        url: []
                    }, {
                        value: true,
                        text: '防护措施',
                        show: false,
                        icon: 'icon-xiangxiajiantou xcop-icon',
                        url: []
                    }, {
                        value: true,
                        text: '铭牌标志',
                        show: false,
                        icon: 'icon-xiangxiajiantou xcop-icon',
                        url: []
                    }, {
                        value: true,
                        text: '保险装置',
                        show: false,
                        icon: 'icon-xiangxiajiantou xcop-icon',
                        url: []
                    }, {
                        value: true,
                        text: '灭火器筒体外观',
                        show: false,
                        icon: 'icon-xiangxiajiantou xcop-icon',
                        url: []
                    }, {
                        value: true,
                        text: '喷射软管',
                        show: false,
                        icon: 'icon-xiangxiajiantou xcop-icon',
                        url: []
                    }, {
                        value: true,
                        text: '其他零部件',
                        show: false,
                        icon: 'icon-xiangxiajiantou xcop-icon',
                        url: []
                    }, {
                        value: false,
                        text: '使用状态',
                        show: true,
                        icon: 'icon-xiangshangjiantou xcop-icon-ed',
                        url: []
                    }]
            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            },
            open(item, index) {
                if (item.show) {
                    this.xcopDatas[index].icon = 'icon-xiangxiajiantou xcop-icon';
                    this.xcopDatas[index].show = false;
                } else {
                    this.xcopDatas[index].icon = 'icon-xiangshangjiantou xcop-icon-ed';
                    this.xcopDatas[index].show = true;
                }

            },
            upload(index) {
                this.xcopDatas[index].url = [1,2,3,4];
            }
        },
        components: {
            xunchaStatus
        }
    }

</script>

<style lang="less" src="./xuncha.less" scoped></style>