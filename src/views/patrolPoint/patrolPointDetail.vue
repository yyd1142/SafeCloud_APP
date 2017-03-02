<template>
    <div>
        <mt-header fixed title="万象城B座1层">
            <mt-button icon="back" slot="left" @click="back()">任务</mt-button>
        </mt-header>
        <div class="page-wrap">
            <div class="patrol-qiandao">
                <div class="qiandao-icon"><i class="icon iconfont icon-text"></i>到达巡更点后，请拍照签到</div>
                <ul class="photo-table-view">
                    <li class="photo-table-cell" v-for="item in 4">
                        <img src="/static/image-square.png" />
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

        }
    }

</script>

<style lang="less" src="./index.less" scoped></style>