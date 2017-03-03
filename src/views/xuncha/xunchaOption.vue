<template>
    <div>
        <mt-header class="header-wrap" fixed title="巡查">
            <mt-button class="header-item" icon="back" slot="left" @click="back">返回</mt-button>
            <mt-button class="header-item" slot="right">往期结果</mt-button>
        </mt-header>
        <div class="page-wrap">
            <div class="xuncha-wrap">
                执行人：杨队长<br> 状 态：已结束<br> 开始时间：2017-1-18 09:09:09<br> 结束时间：2017-1-18 09:09:09
            </div>
            <ul class="xcop-table-views">
                <li class="xcop-table-cell" v-for="(item, index) in xcopDatas">
                    <div class="xcop-wrap">
                        <i class="icon iconfont icon-xiangxiajiantou xcop-icon" @click="open(item, index)"></i>
                         <span class="item" v-text="item.text"></span>
                         <span v-if="index != 0"><mt-switch class="xc-switch" v-model="item.value"></mt-switch></span>
                        <span v-else><input class="xcop-input" type="number" placeholder="请输入数值"></span>
                    </div>
                    <transition name="fade">
                        <div class="xcop-item" v-if="item.show">灭火器类型、规格、灭火级别和数量符合配置要求；</div>
                    </transition>
                </li>
            </ul>
            <mt-cell title="全部符合">
                <mt-switch></mt-switch>
            </mt-cell>
            <mt-field label="隐患描述" placeholder="请输入隐患描述" type="textarea" rows="4"></mt-field>
            <ul class="hd-upload">
                <li class="hd-upload-cell" v-for="item in 3">
                    <img src="/static/image-square.png" />
                </li>
            </ul>
            <div class="page-button-group">
                <mt-button size="large" type="default">确认该隐患</mt-button>
                <mt-button size="large" type="primary" style="margin-top: 15px;">排除该隐患</mt-button>
                <mt-button size="large" type="danger" style="margin-top: 15px;">打回复查</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                xcopDatas: [
                    {
                        value: true,
                        text: '压力指示装置',
                        show: false
                    }, {
                        value: true,
                        text: '基本配置',
                        show: false
                    }, {
                        value: true,
                        text: '配置方式',
                        show: false
                    }, {
                        value: true,
                        text: '环境状况',
                        show: false
                    }, {
                        value: true,
                        text: '防护措施',
                        show: false
                    }, {
                        value: true,
                        text: '铭牌标志',
                        show: false
                    }, {
                        value: true,
                        text: '保险装置',
                        show: false
                    }, {
                        value: true,
                        text: '灭火器筒体外观',
                        show: false
                    }, {
                        value: true,
                        text: '喷射软管',
                        show: false
                    }, {
                        value: true,
                        text: '其他零部件',
                        show: false
                    }, {
                        value: false,
                        text: '使用状态',
                        show: false
                    }]
            }
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

            }
        },
        components: {

        }
    }

</script>

<style lang="less" src="./xuncha.less" scoped></style>