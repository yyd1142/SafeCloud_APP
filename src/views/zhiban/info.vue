<template>
    <div>
        <mt-header fixed title="任务详情">
            <router-link to="/zhiban_list" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="page-wrap">
            <div class="xuncha-wrap">
                日 期：1-01 至 1-15<br>值班人：杨队长、杨保安、郭保安
            </div>
            <div class="zhiban-wrap">
                <div class="zhiban-title">值班安排：</div>
                <table class="v-table-view">
                    <thead>
                        <tr>
                            <th>8:00-16:00</th>
                            <th>8:00-16:00</th>
                            <th>8:00-16:00</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>杨队长</td>
                            <td>杨队长</td>
                            <td>杨队长</td>
                        </tr>
                    </tbody>
                </table>
                <div class="zhiban-title">值班日志列表</div>
                <mt-cell :title="item.title" v-for="item in logs" :to="'/zhiban_log/' + item.id" is-link>
                </mt-cell>
            </div>
        </div>
    </div>
</template>

<script>
    // import { Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';

    export default {
        data() {
            return {
                logs: [{
                    id: 1, title: '1-14值班日志'
                }, {
                    id: 2, title: '1-15值班日志'
                }, {
                    id: 3, title: '1-16值班日志'
                }]
            }
        },
        methods: {

        },
        components: {

        }
    }

</script>

<style lang="less" src="./zhiban.less" scoped></style>