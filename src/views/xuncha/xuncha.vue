<template>
    <div>
        <mt-header fixed title="今日巡查">
            <router-link to="/enter" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="page-wrap">
            <div class="xuncha-wrap">
                日期：1月15日<br>
                巡查建筑：海岸城西座<br>
                巡查周期：2小时（1小时34分后开始下次巡查
            </div>
            <div class="nav">
                <div class="xunchalouceng">巡查楼层: </div>
                <mt-button size="small" @click.native.prevent="active = 'tab-container1'">1层</mt-button>
                <mt-button size="small" @click.native.prevent="active = 'tab-container2'">2层</mt-button>
                <mt-button size="small" @click.native.prevent="active = 'tab-container3'">3层</mt-button>
            </div>
            <div class="page-tab-container">
                <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
                    <mt-tab-container-item id="tab-container1">
                        <mt-cell v-for="n in 10" title="东北角安全出口" to="/xuncha_info" is-link>
                            <span>
                                <span class="xuncha-status">√</span>
                                <span style="color: green">巡查</span>
                            </span>
                        </mt-cell>
                        <!--<mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>-->
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab-container2">
                        <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab-container3">
                        <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </div>
    </div>
</template>

<script src="./xuncha.js"></script>

<style lang="less" src="./xuncha.less" scoded></style>