<template>
  <div>
    <mt-header class="header-wrap" fixed title="检查任务项目">
      <router-link to="/jiancha_list" slot="left">
        <mt-button class="header-item" icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="page-wrap jiancha-page-wrap">
      <div class="list-wrap">
        <ul class="list">
          <li class="item" v-for="n in 5">
            <router-link :to="'/jiancha_info/' + n">
              <div class="content">
                <div class="title">
                  火灾隐患的整改情况以及防范措施的落实情况
                </div>
                <div class="info">
                 结论：合格/不合格<br> 备注：1月发现两个隐患，正在整改中
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  
</style>

<script>
  export default {
    data() {
      return {}
    },
    mounted() {

    },
    methods: {},
    components: {}
  }

</script>