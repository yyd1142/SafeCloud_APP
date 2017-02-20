<template>
    <div>
        <mt-header fixed title="添加设施">
            <router-link to="/device" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="page-wrap">
            <div class="device-info-wrap">
                <mt-field label="所属消控室" placeholder="请输入所属消控室"></mt-field>
                <mt-field label="所在建筑" placeholder="请输入所在建筑"></mt-field>
                <mt-field label="所连主机" placeholder="请输入所连主机"></mt-field>
                <mt-field label="设施系统类型" placeholder="请输入设施系统类型"></mt-field>
                <mt-field label="部件类型" placeholder="请输入部件类型"></mt-field>
                <mt-field label="部件地址码" placeholder="请输入部件地址码"></mt-field>
                <mt-field label="安装楼层" placeholder="请输入安装楼层"></mt-field>
            </div>
            <div class="device-info-wrap">
                <mt-field label="生产企业" placeholder="请输入生产企业"></mt-field>
                <mt-field label="部件型号" placeholder="请输入部件型号"></mt-field>
                <mt-field label="设计单位" placeholder="请输入设计单位"></mt-field>
                <mt-field label="施工单位" placeholder="请输入施工单位"></mt-field>
                <mt-field label="维保单位" placeholder="请输入维保单位"></mt-field>
                <mt-field label="检测单位" placeholder="请输入检测单位"></mt-field>
            </div>
            <mt-button size="large" type="primary">确认</mt-button>
        </div>
    </div>
</template>

<script>

</script>
<style lang="less" scoped>
    .device-info-wrap{
        width: 100%;
        margin-bottom: 15px;
    }
</style>