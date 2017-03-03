<template>
    <div>
        <mt-header class="header-wrap" fixed title="新闻通知">
            <router-link to="/enter" slot="left">
                <mt-button class="header-item" icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="page-wrap">
            <div class="news-wrap">
                <div class="title">中国消防协会召开六届二次理事会议</div>
                <div class="news-content">
                    中国消防协会召开六届二次理事会议 2016年12月21日，中国消防协会六届二次理事会在北京召开。会长陈伟明、副会长王铁民、谢模乾、杨建民、李引擎、陈飞、朱力平、尹俊士、张荣昌、许兆亭、冷俐以及理事90余人出席了会议。曹忙根代理秘书长主持了会议。
                    陈伟明会长受六届理事会委托，代表中国消防协会作了《六届二次理事会工作报告》。王铁民副会长受六届理事会委托，代表中国消防协会作了《2016年财务工作报告》。谢模乾副会长传达了中共中央、国务院社团改革的有关文件精神。杨建民副会长传达了中国科协“九大”会议的主要精神。
                </div>
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

        },
        methods: {

        }
    }

</script>

<style lang="less" scoped>
    .news-wrap {
        width: 100%;
        background-color: #ffffff;
        padding: 15px 10px;
        box-sizing: border-box;
        .title {
            text-align: center;
            font-size: 20px;
            margin-bottom: 15px;
        }
        .news-content {
            line-height: 24px;
        }
    }
</style>