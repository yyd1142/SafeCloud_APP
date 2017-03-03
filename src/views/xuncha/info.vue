<template>
    <div>
        <mt-header class="header-wrap" fixed title="消防设施日常巡查">
            <mt-button class="header-item" icon="back" slot="left" @click="back()">任务</mt-button>
        </mt-header>
        <div class="page-wrap">
            <div class="xuncha-wrap">
                <transition name="fade">
                    <div class="sao-icon sao-left" v-if="todoItem.isTodo">
                        <i class="icon iconfont icon-saoyisao sao-icon-view"></i>
                        <span>扫一扫</span>
                    </div>
                </transition>
                <div class="do-xuncha background-blue" :class="todoItem.class" @click="todo()"><span v-html="todoItem.text"></span></div>
                <transition name="fade">
                    <div class="do-to-timer" v-if="todoItem.isTodo">已用时01:09:17</div>
                </transition>
                <transition name="fade">
                    <div class="sao-icon sao-right" v-if="todoItem.isTodo">
                        <i class="icon iconfont icon-erweima sao-icon-view"></i>
                        <span>贴一贴</span>
                    </div>
                </transition>
            </div>
            <div class="xc-title">万象城B座1层</div>
            <ul class="xc-table-view">
                <li class="xc-table-cell" v-for="item in 4">
                    <router-link :to="'/patrol_point_detail/' + item">
                        <span class="title">东门</span>
                        <i class="icon iconfont icon-xiangyoujiantou font-blue"></i>
                        <span class="value font-blue">未检查</span>
                    </router-link>
                </li>
            </ul>
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
            back() {
                this.$router.go(-1);
            }
        },
        components: {

        }
    }

</script>

<style lang="less" src="./xuncha.less" scoped></style>