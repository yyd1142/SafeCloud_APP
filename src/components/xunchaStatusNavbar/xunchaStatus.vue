<template>
    <div>
        <nav class="status-bav-wrap">
            <div class="item">
                <span class="name">黄队长</span><br>
                <span class="date">1月18日17:00-1月18日17:30</span>
            </div>
            <div class="status-image">
                <span>巡查中</span>
                <i class="icon iconfont icon-prompt"></i>
            </div>
        </nav>
    </div>
</template>

<style lang="less" scope>
    .status-bav-wrap {
        width: 100%;
        position: fixed;
        top: 40px;
        height: 50px;
        background-color: #7CCE2D;
        z-index: 10;
        .item {
            width: auto;
            color: #ffffff;
            float: left;
            height: 50px;
            line-height: 22px;
            padding-left: 14px;
            .name {
                font-size: 14px;
            }
            .date {
                font-size: 12px;
            }
        }
    }
    
    .status-image {
        width: 100px;
        height: 50px;
        float: right;
        background-color: #80D92A;
        color: #fff;
        line-height: 50px;
        text-align: center;
        span {
            font-size: 18px;
        }
        i {
            font-size: 20px;
        }
    }
</style>

<script>
    export default {
        data() {
            return {

            };
        },
        methods: {

        },
        mounted() {

        }
    };

</script>