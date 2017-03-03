<template>
    <div>
        <mt-header class="header-wrap" fixed title="万象城B座1层">
            <mt-button class="header-item" icon="back" slot="left" @click="back()">任务</mt-button>
        </mt-header>
        <div class="page-wrap">
            <xuncha-status></xuncha-status>
            <div class="patrol-qiandao">
                <div class="qiandao-icon"><i class="icon iconfont icon-wxbdingwei"></i>到达巡更点后，请拍照签到</div>
                <ul class="photo-table-view">
                    <!--<li class="photo-table-cell" v-for="item in 3">
                        <img src="/static/image-square.png" />
                    </li>-->
                    <li class="photo-table-cell">
                        <div class="photo-plus-btn">
                            <span class="plus">
                                <i class="icon iconfont icon-zhaoxiangji"></i>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="patorl-table-wrap">
                <mt-cell class="patorl-mt-cell" :to="'/xuncha_option/' + item " is-link v-for="(item, index) in 3">
                    <div class="patorl-table-cell">
                        <i class="icon iconfont icon-success success"></i>
                        <span class="patorl-name">水泵-001</span>
                        <span class="patorl-status">未整改</span>
                    </div>
                </mt-cell>
            </div>
            <div class="patorl-table-wrap">
                <mt-cell class="patorl-mt-cell" is-link v-for="(item, index) in 3">
                    <div class="patorl-table-cell">
                        <i class="icon iconfont icon-prompt danger"></i>
                        <span class="patorl-name">水泵-001</span>
                        <span class="patorl-status">未整改</span>
                    </div>
                </mt-cell>
            </div>
            <div class="patorl-table-wrap">
                <mt-cell class="patorl-mt-cell" is-link v-for="(item, index) in 3">
                    <div class="patorl-table-cell">
                        <i class="icon iconfont icon-prompt warning"></i>
                        <span class="patorl-name">水泵-001</span>
                        <span class="patorl-status">未整改</span>
                    </div>
                </mt-cell>
            </div>
        </div>
        <mt-button type="primary" size="large" class="btn-primary bottom-btn">确认</mt-button>
    </div>
</template>

<script>
    import xunchaStatus from '../../components/xunchaStatusNavbar/xunchaStatus.vue';

    export default {
        data() {
            return {

            }
        },
        mounted() {

        },
        methods: {
            back() {
                this.$router.go(-1);
            }
        },
        components: {
            xunchaStatus
        }
    }

</script>

<style lang="less" src="./index.less" scoped></style>