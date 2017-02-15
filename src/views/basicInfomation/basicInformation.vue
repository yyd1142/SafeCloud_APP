<template>
    <div>
        <mt-header fixed title="基本信息">
            <router-link to="/enter" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="page-wrap">
            <mt-cell is-link>
                <span class="content">
                    <i class="icon iconfont icon-text basic-icon"></i>
                    <span class="title">单位信息</span>
                </span>
            </mt-cell>
            <mt-cell is-link>
                <span class="content">
                    <i class="icon iconfont icon-text basic-icon"></i>
                    <span class="title">建筑信息</span>
                </span>
            </mt-cell>
        </div>
    </div>
</template>

<script>

</script>

<style lang="less" scoded>
    .basic-icon {
        margin: 6px 6px 0 10px;
        float: left;
        font-size: 30px;
    }
    
    .content {
        width: 100%;
        float: left;
        display: block;
        position: absolute;
        left: 0;
        height: 40px;
    }
    
    .title {
        float: left;
        display: block;
        width: 100px;
        margin: 12px 0 0 0;
        color: #333;
    }
</style>