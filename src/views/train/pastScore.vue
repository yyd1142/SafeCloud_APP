<template>
    <div>
        <mt-header fixed title="往期成绩">
            <router-link to="/train" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="page-wrap">
            <mt-cell v-for="item in scores" :title="item.title" :value="item.value" is-link></mt-cell>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                scores: [{
                    id: 1,
                    title: '春季电器防火须知专项考试',
                    value: 90
                }, {
                    id: 2,
                    title: '夏季电器防火须知专项考试',
                    value: 99
                }, {
                    id: 3,
                    title: '春季电器防火须知专项考试',
                    value: 89
                }]
            }
        },
        methods: {

        }
    }

</script>

<style lang="less" scoped>

</style>