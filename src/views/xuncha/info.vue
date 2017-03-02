<template>
    <div>
        <mt-header fixed title="消防设施日常巡查">
            <mt-button icon="back" slot="left" @click="back()">任务</mt-button>
        </mt-header>
        <div class="page-wrap">
            <div class="xuncha-wrap">
                <div class="sao-icon sao-left">
                    <i class="icon iconfont icon-text sao-icon-view"></i>
                    <span>扫一扫</span>
                </div>
                <div class="do-xuncha" :class="todoItem.class" @click="todo()"><span v-html="todoItem.text"></span></div>
                <div class="do-to-timer" v-if="todoItem.isTodo">已用时01:09:17</div>
                <div class="sao-icon sao-right">
                    <i class="icon iconfont icon-text sao-icon-view"></i>
                    <span>贴一贴</span>
                </div>
            </div>
            <div class="xc-title">万象城B座1层</div>
            <mt-cell title="东门" :to="'/patrol_point_detail/' + item" is-link value="未检查" v-for="item in 4"></mt-cell>
            <div class="xc-title">万象城B座2层</div>
            <mt-cell title="东门" :to="'/patrol_point_detail/' + item" is-link value="未检查" v-for="item in 4"></mt-cell>
        </div>
    </div>
</template>

<script>
    // import { Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';

    export default {
        data() {
            return {
                active: 'tab-container1',
                todoItem: {
                    text: '开始<br>巡查', class: '', isTodo: false
                },
                datas: [
                    { icon: 'icon-prompt red' },
                    { icon: 'icon-success green' },
                    { icon: 'icon-success green' },
                    { icon: 'icon-success green' },
                    { icon: 'icon-success green' },
                    { icon: 'icon-prompt red' }]
            }
        },
        mounted() {

        },
        methods: {
            todo() {
                this.todoItem = {
                    text: '结束<br>巡查', class: 'to-do-item', isTodo: true
                }
            },
            back(){
                this.$router.go(-1);
            }
        },
        components: {

        }
    }

</script>

<style lang="less" src="./xuncha.less" scoped></style>