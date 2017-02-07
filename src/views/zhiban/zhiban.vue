<template>
    <div>
        <mt-header fixed title="今日值班">
            <router-link to="/enter" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="page-wrap">
            <div class="xuncha-wrap">
                日期：1-01 至 1-15<br>
                值班人：杨队长、杨保安、郭保安、王保安
            </div>
            <div class="v-table-wrap">
                <div class="zhiban-anpai">值班安排：</div>
                <table class="v-table-view">
                    <thead>
                        <tr>
                            <th>09:09:09</th>
                            <th>12:00:11</th>
                            <th>15:00:11</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in 3">
                            <td>王师傅</td>
                            <td>德师傅</td>
                            <td>龙师傅</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="v-table-wrap">
                <div class="zhiban-anpai">值班报告：</div>
                <textarea placeholder="请输入值班报告"></textarea>
                <mt-button size="large" type="primary">保存</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import { Field } from 'mint-ui';

export default {
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    components: {
       'mt-field': Field
    }
}
</script>

<style lang="less" src="./zhiban.less" scoded></style>