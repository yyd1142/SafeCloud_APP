<template>
    <div>
        <mt-header class="header-wrap" fixed title="通知公告">
            <router-link to="/enter" slot="left">
                <mt-button class="header-item" icon="back">首页</mt-button>
            </router-link>
        </mt-header>
        <div class="page-wrap">
            <ul class="notice-table-view">
                <li class="notice-table-cell" v-for="item in notices">
                    <router-link :to="'/notice/' + item.id">
                        <div class="title"><i class="not-read-item" v-if="!item.isRead"></i>{{item.title}}</div>
                        <div class="from" v-text="item.from"></div>
                        <div class="time" v-text="item.time"></div>
                    </router-link>
                </li>
            </ul>
            <!--<mt-cell v-for="item in notices" :title="item.title" :label="'来源：' + item.from" :value="item.time" :to="'/notice/' + item.id"></mt-cell>-->
        </div>
    </div>
</template>

<script src="./notice.js"></script>

<style lang="less" scoped>
    @import "../../config.less";
    .notice-table-view {
        width: 100%;
        margin: 0 auto;
        .notice-table-cell {
            width: 100%;
            height: 50px;
            background-color: #fff;
            border-bottom: 1px solid #d8d8d8;
            padding: 6px 14px 0 14px;
            box-sizing: border-box;
            position: relative;
            a {
                width: 100%;
                height: 100%;
                .not-read-item {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: @blueColor;
                    display: inline-block;
                    margin-right: 6px;
                }
                .title {
                    width: 100%;
                    font-size: 14px;
                    color: #232323;
                    padding-right: 120px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .from {
                    width: 100%;
                    font-size: 12px;
                    color: #A0A0A0;
                    margin-top: 8px;
                }
                .time {
                    width: auto;
                    position: absolute;
                    right: 14px;
                    color: #606060;
                    font-size: 12px;
                    top: 6px;
                }
            }
        }
    }
</style>