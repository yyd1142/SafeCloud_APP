<template>
    <div>
        <mt-header fixed title="隐患详情">
            <router-link to="/hidden_danger" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="page-wrap">
            <div class="hd-info">
                <span>提交时间：2016-01-01</span>
                <span>提交人：杨队长</span>
                <span>联系电话：15367916508</span>
                <span>万象城B栋3层</span>
            </div>
            <div class="hd-filed">
                <mt-field placeholder="请输入隐患名称" v-model="form.hdName"></mt-field>
                <mt-field placeholder="请输入隐患名称" v-model="form.hdDesc" type="textarea"></mt-field>
                <ul class="hd-upload">
                    <li class="hd-upload-cell" v-for="item in 3">
                        <img src="/static/image-square.png" />
                    </li>
                </ul>
            </div>
            <div class="page-button-group">
                <mt-button size="large" type="default">新建维修任务</mt-button>
                <mt-button size="large" type="primary" style="margin-top: 15px;">新建保养任务</mt-button>
                <mt-button size="large" type="danger" style="margin-top: 15px;">排除该隐患</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    hdName: '三楼消防栓破损',
                    hdDesc: '1、制动系统老化\n2、紧急报警系统失灵\n3、监控系统无法储存视频'
                }
            }
        },
        methods: {

        }
    }

</script>
<style lang="less" scoped>
    .hd-info {
        width: 100%;
        background-color: #ffffff;
        padding: 10px 15px 10px 15px;
        line-height: 24px;
        box-sizing: border-box;
        span {
            display: block;
        }
    }
    
    .hd-filed {
        width: 100%;
        background-color: #fff;
        padding: 10px 20px;
        box-sizing: border-box;
        margin: 15px 0;
    }
    
    .hd-upload {
        width: 100%;
        list-style: none;
        padding: 0;
        margin: 15px 0 0 0;
        display: block;
    }
    
    .hd-upload-cell {
        width: 33%;
        height: 33vw;
        display: inline-block;
        box-sizing: border-box;
        padding: 5px;
        img {
            width: 100%;
            height: 100%;
            display: block;
        }
    }
</style>