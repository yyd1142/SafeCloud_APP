<template>
    <div>
        <mt-header class="header-wrap" fixed title="1-14值班日志">
            <mt-button class="header-item" icon="back" slot="left"  @click.native="back()"></mt-button>
        </mt-header>
        <div class="page-wrap">
            <div class="zhiban-wrap">
                <ul class="log-table-view">
                    <li class="log-table-cell" v-for="item in 4">
                        23:51   刘物业、郭物业下班，王保安上班。
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    // import { Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';

    export default {
        data() {
            return {

            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            }
        },
        components: {

        }
    }

</script>

<style lang="less" src="./zhiban.less" scoped></style>