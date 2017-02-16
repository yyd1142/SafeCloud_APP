<template>
    <div>
        <mt-header fixed title="消息详情">
            <router-link to="/message" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="page-wrap">
            <div class="main-msg">
                <h3>你有一个维修任务已完成</h3>
                <div class="content-msg"> 你有一个维修任务已完成<br>2017年1月3日派发给云盾维保公司的维修任务已反馈维修报告，请消防安全管理员确认。去看看</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {
            console.log(this.$route.params.pid);
        },
        methods: {

        }
    }

</script>

<style lang="less" scoped>
    .main-msg {
        width: 100%;
        padding: 15px;
        box-sizing: border-box;
        background-color: #ffffff;
        margin: 0 auto;
    }
    .content-msg {
        display: block;
        margin-bottom: 10px;       
    }
</style>