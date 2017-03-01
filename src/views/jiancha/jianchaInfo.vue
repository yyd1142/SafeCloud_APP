<template>
    <div>
        <mt-header fixed title="任务详情">
            <mt-button slot="left" icon="back" @click.native="back()"></mt-button>
        </mt-header>
        <div class="page-wrap">
            <div class="jiancha-wrap">
                检查人：德德<br>开始：2017-01-09<br>结束：2017-02-02
            </div>
            <form class="jiancha-form-wrap">
                <textarea class="jiancha-text" placeholder="请输入内容"></textarea>
            </form>
        </div>
    </div>
</template>

<style lang="less" rel="stylesheet/less" scoped>
    .jiancha-form-wrap {
        width: 100%;
        box-sizing: border-box;
        .jiancha-text{
            width: 100%;
        }
    }
</style>

<script>
    export default {
        data() {
            return {}
        },
        mounted() {

        },
        methods: {
            back() {
                this.$router.go(-1);
            }
        },
        components: {}
    }

</script>