<template>
    <div>
        <mt-header fixed title="教育培训">
            <router-link to="/enter" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <router-link to="/past_score" slot="right">
                <mt-button>往期成绩</mt-button>
            </router-link>
        </mt-header>
        <div class="page-wrap">
            <mt-cell v-for="item in trains" :title="item.title" :label="'来源：' + item.from" :value="item.time" :to="'/exam/' + item.id"
                is-link>
                </mt-cell>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                trains: [{
                    id: 1,
                    title: '春季电器防火须知专项考试',
                    from: '无锡省消防大队',
                    time: '2017-01-01'
                }, {
                    id: 2,
                    title: '夏季电器防火须知专项考试',
                    from: '无锡省消防大队',
                    time: '2017-09-01'
                }, {
                    id: 3,
                    title: '春季电器防火须知专项考试',
                    from: '无锡省消防大队',
                    time: '2017-01-01'
                }]
            }
        },
        methods: {

        }
    }

</script>

<style lang="less" scoped>

</style>