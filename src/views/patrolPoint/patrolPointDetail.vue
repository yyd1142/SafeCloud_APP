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
                        <img src="/static/image-square.png"/>
                    </li>
                </ul>
            </div>
            <ul class="patrol-table-view">
                <li class="patorl-table-cell">
                    <i class="icon iconfont icon-success green"></i>
                    <span>水泵-001</span>
                    
                </li>
            </ul>
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
           back(){
                this.$router.go(-1);
            }
        },
        components: {

        }
    }

</script>

<style lang="less" src="./index.less" scoped></style>