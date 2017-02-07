<template>
    <div>
        <mt-header fixed title="巡查">
            <router-link to="/xuncha" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="page-wrap">
            <div class="xuncha-wrap">
                巡查建筑：海岸城西座<br>
                巡查楼层：负1层<br>
                巡查项目：东北角安全出口
            </div>
        </div>
    </div>
</template>

<script>
// import { Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';

export default {
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    components: {
       
    }
}
</script>

<style lang="less" src="./xuncha.less" scoded></style>