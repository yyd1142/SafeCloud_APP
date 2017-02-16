<template>
    <div>
        <mt-header fixed title="消息列表">
            <router-link to="/enter" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="page-wrap">
            <mt-cell v-for="item in systemMessages" :title="item.title" :value="item.time" :to="'/message/' + item.id" is-link></mt-cell>
        </div>
    </div>
</template>

<script src="./message.js"></script>

<style lang="less" scoped>

</style>