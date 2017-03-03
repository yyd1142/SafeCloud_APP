<template>
    <div>
        <mt-header class="header-wrap" fixed title="通知公告">
            <router-link to="/notice" slot="left">
                <mt-button class="header-item" icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="page-wrap">
            <div class="main">
                <h3>关于无锡市智慧消防第二次招标公告</h3>
                <span class="content">
                    1、招标条件	
    本招标项目泰伯大道（锡张高速-区界）道路工程(项目名称)已由无锡市人民政府新区管理委员会经济发展局	(项目审批、核准或备案机关名称)以关于泰伯大道（锡张高速-区界）道路工程项目建议书（立项）的批复 锡新管经发[2014]333号(批文名称及编号)批准建设，项目业主为无锡吴文化博览园建设发展有限公司，建设资金来自自筹(资金来源)，项目出资比例为国有资金100.00%、私有资金0.00%、外国政府及组织投资0.00%、境外私人投资0.00%，招标人为无锡吴文化博览园建设发展有限公司，招标代理机构为江苏恒泰建设工程咨询有限公司。项目已具备招标条件，现对该项目的施工进行公开招标。本项目为网上电子投标。 <br>
2、项目概况与招标范围
     建设地点： 泰伯大道（锡张高速-区界）
     工程规模：  主要内容包括：⑴、鸿山路：挑臂信号灯4套，立柱信号灯4套，行人信号灯（一杆双灯）4套，750万像素电子警察5套，200万像素电视监控1套；⑵、振新路：挑臂信号灯2套，立柱信号灯2套，行人信号灯（一杆双灯）3套，行人信号灯（一杆单灯）2套，750万像素电子警察3套，200万像素电视监控1套；⑶飞凤路：挑臂信号灯4套，行人信号灯（一杆双灯）3套，行人信号灯（一杆单灯）2套，750万像素电子警察3套，200万像素电视监控1套。 
                </span>
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
    .main {
        width: 100%;
        padding: 15px;
        box-sizing: border-box;
        background-color: #ffffff;
        margin: 0 auto;
    }
    
    .content {
        display: block;
        margin-bottom: 10px;
    }
</style>