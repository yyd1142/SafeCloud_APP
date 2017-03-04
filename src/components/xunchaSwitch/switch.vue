<template>
    <div>
        <div class="switch-wrap" :class="value ? 'switch-true' : 'switch-false'">
            <i class="switch-item" :class="value ? 'right' : 'left'"></i>
        </div>
    </div>
</template>

<style lang="less" scope>
    .switch-wrap {
        width: 50px;
        height: 30px;
        border-radius: 53px;
        .switch-item {
            background: #FFFFFF;
            box-shadow: 0px 2px 4px 0px rgba(83, 83, 83, 0.50);
            width: 26px;
            height: 26px;
            border-radius: 50%;
        }
        .left {
            float: left;
            margin: 2px 0 0 2px;
        }
        .right {
            float: right;
            margin: 2px 2px 0 0;
        }
    }
    
    .switch-true {
        background-color: #00E460;
    }
    
    .switch-false {
        background-color: #FF7F5B;
    }
</style>

<script>
    export default {
        props: ['value'],
        data() {
            return {

            };
        },
        methods: {
            
        },
        mounted() {

        }
    };

</script>