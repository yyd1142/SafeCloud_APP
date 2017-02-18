<template>
    <div>
        <mt-header fixed title="设施设备">
            <router-link to="/enter" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <router-link to="/device_add" slot="right">
                <mt-button>添加设备</mt-button>
            </router-link>
        </mt-header>
        <div class="page-wrap device-sel-wrap">
            <div class="sel-wrap">
                <select class="sel">
                    <option value="万象城A栋">万象城A栋</option>
                    <option value="万象城B栋">万象城B栋</option>
                </select>
                <select class="sel">
                    <option value="消防控制室A">消防控制室A</option>
                    <option value="消防控制室B">消防控制室B</option>
                    <option value="消防控制室C">消防控制室C</option>
                </select>
                <select class="sel">
                    <option value="隐患" disabled selected>隐患</option>
                    <option value="有隐患">有隐患</option>
                    <option value="无隐患">无隐患</option>
                </select>
                <mt-button size="small">筛选</mt-button>
            </div>
            <ul class="device-table-view">
                <li class="device-table-cell" v-for="(item, index) in 3">
                    <router-link :to="'/device/' + index">
                        <span class="code">消防电梯G-23型-N231202</span>
                        <span class="address">海岸城西座-负1层-消防电梯</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

</script>
<style lang="less" scoped>
    .device-sel-wrap {
        .sel-wrap {
            display: flex;
            .sel {
                flex: 1;
                height: 30px;
                font-size: 14px;
                border-radius: 4px;
                color: #999;
            }
        }
    }
    
    .device-table-view {
        list-style: none;
        display: block;
        margin: 10px 0;
        width: 100%;
        background-color: #ffffff;
        box-sizing: border-box;
        padding: 0 10px;
        .device-table-cell:last-child{
            border-bottom: none !important;
        }
        .device-table-cell {
            width: 100%;
            margin: 0 auto;
            line-height: 24px;
            padding: 10px 0;
            border-bottom: 1px solid #ccc;
            .code {
                width: 100%;
                padding: 0;
                display: block;
            }
            .address {
                width: 100%;
                display: block;
            }
        }
    }
</style>