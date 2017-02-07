<template>
    <div>
        <mt-header fixed title="消息列表">
            <router-link to="/enter" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="page-wrap">
            <!--TAB-->
            <mt-navbar v-model="selected">
            <mt-tab-item id="1">系统消息</mt-tab-item>
            <mt-tab-item id="2">重要事项</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell v-for="n in 10" :title="'系统消息 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :title="'重要事项 ' + n" />
            </mt-tab-container-item>
        </div>
    </div>
</template>

<script src="./message.js"></script>

<style lang="less" scoded>

</style>