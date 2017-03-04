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
                        <div @click="switchOpen('yali', isYali)">
                            <xuncha-switch ref="switchChild" class="xc-switch" :value="isYali"></xuncha-switch>
                        </div>
                        <span class="yh-fuhe-item great" :class="isYali ? 'great' : 'font-red'" v-text="isYali ? '符合' : '不符合'"></span>
                    </div>
                    <div class="xcop-wrap">
                        <i class="icon iconfont icon-prompt xcop-icon yali-icon"></i>
                        <span class="item">请在右侧输入压力数值</span>
                        <input class="xcop-input" type="number" placeholder="请输入数值">
                    </div>
                </li>
                <li class="xcop-table-cell" v-for="(item, index) in xcopDatas">
                    <div class="xcop-wrap">
                        <i class="icon iconfont" :class="item.show ? 'icon-xiangshangjiantou xcop-icon-ed' : 'icon-xiangxiajiantou xcop-icon'" @click="open(item, index)"></i>
                        <span class="item" v-text="item.text"></span>
                        <div @click="switchOpen(index, item.value)">
                            <xuncha-switch ref="switchChild" class="xc-switch" :value="item.value"></xuncha-switch>
                        </div>
                        <span class="yh-fuhe-item great" :class="item.value ? 'great' : 'font-red'" v-text="item.value ? '符合' : '不符合'"></span>
                    </div>
                    <transition name="fade">
                        <div class="xcop-item" v-if="item.show">
                            <textarea class="xcop-textarea" placeholder="请输入隐患描述..."></textarea>
                            <div class="xcop-photo-view">
                                <div class="xcop-photo-cell" v-for="(obj, index) in item.url">
                                    <span class="xcop-photo-item">
                                        <img src="/static/1.jpg" />
                                    </span>
                                </div>
                                <div class="xcop-photo-cell" @click="upload(index)">
                                    <span class="xcop-photo-item">
                                        <img src="/static/plus.png" />
                                    </span>
                                </div>
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
    import xunchaSwitch from '../../components/xunchaSwitch/switch.vue';
    export default {
        data() {
            return {
                isYali: false,
                xcopDatas: [
                    {
                        value: true,
                        text: '基本配置',
                        show: false,
                        url: []
                    }, {
                        value: true,
                        text: '配置方式',
                        show: false,
                        url: []
                    }, {
                        value: true,
                        text: '环境状况',
                        show: false,
                        url: []
                    }, {
                        value: true,
                        text: '防护措施',
                        show: false,
                        url: []
                    }, {
                        value: true,
                        text: '铭牌标志',
                        show: false,
                        url: []
                    }, {
                        value: true,
                        text: '保险装置',
                        show: false,
                        url: []
                    }, {
                        value: true,
                        text: '灭火器筒体外观',
                        show: false,
                        url: []
                    }, {
                        value: true,
                        text: '喷射软管',
                        show: false,
                        url: []
                    }, {
                        value: true,
                        text: '其他零部件',
                        show: false,
                        url: []
                    }, {
                        value: false,
                        text: '使用状态',
                        show: true,
                        url: []
                    }]
            }
        },
        mounted() {

        },
        methods: {
            back() {
                this.$router.go(-1);
            },
            open(item, index) {
                if (item.show) {
                    this.xcopDatas[index].show = false;
                } else {
                    this.xcopDatas[index].show = true;
                }

            },
            switchOpen(index, value) {
                if (index != 'yali') {
                    this.xcopDatas[index].value = value ? false : true;
                } else {
                    this.isYali = this.isYali ? false : true;
                }
            },
            upload(index) {
                this.xcopDatas[index].url = [1, 2, 3];
            }
        },
        components: {
            xunchaSwitch,
            xunchaStatus
        }
    }

</script>

<style lang="less" src="./xuncha.less" scoped></style>