<template>
    <div>
       <mt-cell v-for="n in 4" :title="'news ' + n" />
    </div>
</template>

<style>
   
</style>

<script>
    export default {
        data() {
            return {
                list: [],
                loading: false,
                allLoaded: false,
                wrapperHeight: 0
            };
        },
        methods: {
           
        },
        mounted() {
           
        }
    };

</script>