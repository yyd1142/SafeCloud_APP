<template>
    <div>
        <mt-header fixed title="设施设备日常巡查">
            <router-link to="/xuncha_list" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="page-wrap">
            <div class="xuncha-wrap">
                执行人：杨队长<br> 状 态：已结束<br> 开始时间：2017-1-18 09:09:09<br> 结束时间：2017-1-18 09:09:09
            </div>
            <div class="nav">
                <mt-button size="small" @click.native.prevent="active = 'tab-container1'">负1层</mt-button>
                <mt-button size="small" @click.native.prevent="active = 'tab-container2'">1层</mt-button>
                <mt-button size="small" @click.native.prevent="active = 'tab-container3'">2层</mt-button>
                <mt-button size="small" @click.native.prevent="active = 'tab-container4'">3层</mt-button>
                <mt-button size="small" @click.native.prevent="active = 'tab-container5'">4层</mt-button>
            </div>
            <div class="page-tab-container">
                <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
                    <mt-tab-container-item id="tab-container1">
                        <div class="xuncha-title">建筑灭火器</div>
                        <ul class="xuncha-table-views">
                            <li class="xuncha-table-cell" v-for="(item, index) in datas">
                                <router-link :to="'/xuncha_option/' + index">
                                    <i class="icon iconfont" :class="item.icon"></i>
                                    <span class="item">灭火器-001</span>
                                </router-link>
                            </li>
                        </ul>
                        <mt-button size="large" style="margin-top: 10px" type="primary">确认该报告</mt-button>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab-container2">
                        <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab-container3">
                        <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab-container4">
                        <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab-container5">
                        <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </div>
    </div>
</template>

<script>
    // import { Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';

    export default {
        data() {
            return {
                active: 'tab-container1',
                datas: [
                    { icon: 'icon-prompt red' },
                    { icon: 'icon-success green' },
                    { icon: 'icon-success green' },
                    { icon: 'icon-success green' },
                    { icon: 'icon-success green' },
                    { icon: 'icon-prompt red' }]
            }
        },
        methods: {

        },
        components: {

        }
    }

</script>

<style lang="less" src="./xuncha.less" scoped></style>