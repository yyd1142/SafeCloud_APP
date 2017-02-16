<template>
    <div>
        <mt-header fixed title="隐患库">
            <router-link to="/enter" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="page-wrap">
            <!--TAB-->
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">未处理</mt-tab-item>
                <mt-tab-item id="2">处理中</mt-tab-item>
                <mt-tab-item id="3">已处理</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected" swipeable>
                <mt-tab-container-item id="1">
                    <mt-cell v-for="item in datas" :title="item.title" :label="'来源：' + item.from" :value="item.time" :to="'/hidden_danger/' + item.id" is-link></mt-cell>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <mt-cell v-for="item in datas" :title="item.title" :label="'来源：' + item.from" :value="item.time" :to="'/hidden_danger/' + item.id" is-link></mt-cell>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <mt-cell v-for="item in datas" :title="item.title" :label="'来源：' + item.from" :value="item.time" :to="'/hidden_danger/' + item.id" is-link></mt-cell>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script src="./hiddenDanger.js"></script>
<style lang="less" scoped></style>