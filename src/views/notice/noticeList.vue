<template>
    <div>
        <mt-header class="header-wrap" fixed title="通知公告">
            <router-link to="/enter" slot="left">
                <mt-button class="header-item" icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="page-wrap">
            <mt-cell v-for="item in notices" :title="item.title" :label="'来源：' + item.from" :value="item.time" :to="'/notice/' + item.id" is-link></mt-cell>
        </div>
    </div>
</template>

<script src="./notice.js"></script>

<style lang="less" scoped>

</style>