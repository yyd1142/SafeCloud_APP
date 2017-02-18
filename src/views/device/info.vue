<template>
    <div>
        <mt-header fixed title="设施详情">
            <router-link to="/device" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="page-wrap">
            <div class="device-info-wrap">
                <mt-cell-swipe title="所属消控室: xxx"></mt-cell-swipe>
                <mt-cell-swipe title="所在建筑: xxx"></mt-cell-swipe>
                <mt-cell-swipe title="所连主机: xxx"></mt-cell-swipe>
                <mt-cell-swipe title="设施系统类型: xxx"></mt-cell-swipe>
                <mt-cell-swipe title="部件类型: xxx"></mt-cell-swipe>
                <mt-cell-swipe title="部件地址码: xxx"></mt-cell-swipe>
                <mt-cell-swipe title="安装楼层: xxx"></mt-cell-swipe>
            </div>
            <div class="device-info-wrap">
                <mt-cell-swipe title="生产企业: xxx"></mt-cell-swipe>
                <mt-cell-swipe title="部件型号: xxx"></mt-cell-swipe>
                <mt-cell-swipe title="设计单位: xxx"></mt-cell-swipe>
                <mt-cell-swipe title="施工单位: xxx"></mt-cell-swipe>
                <mt-cell-swipe title="维保单位: xxx"></mt-cell-swipe>
                <mt-cell-swipe title="检测单位: xxx"></mt-cell-swipe>
            </div>
        </div>
    </div>
</template>

<script>

</script>
<style lang="less" scoped>
    .device-info-wrap {
        width: 100%;
        margin-bottom: 15px;
    }
</style>