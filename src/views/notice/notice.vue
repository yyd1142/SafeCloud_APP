<template>
    <div>
      <mt-header fixed title="通讯录"></mt-header>
      <div class="page-wrap">
        <mt-index-list>
          <mt-index-section v-for="item in alphabet" :index="item.initial">
            <mt-cell v-for="cell in item.cells" :title="cell"></mt-cell>
          </mt-index-section>
        </mt-index-list>
        <!--<mt-swipe :auto="4000">
          <mt-swipe-item class="slide1">1</mt-swipe-item>
          <mt-swipe-item class="slide2">2</mt-swipe-item>
          <mt-swipe-item class="slide3">3</mt-swipe-item>
        </mt-swipe>
        <div class="test-wrap">
          <router-link to="/evaluation">
            <mt-button type="danger" size="small">知识评测</mt-button>
          </router-link>
          <span class="test-item">冬季电器防火须知专项考试</span>
        </div>
        <mt-cell title="安全规定" value="消防监督检查规定（公安部第120号令）" v-for="item in 8"></mt-cell>-->
      </div>
    </div>
</template>

<script src="./notice.js"></script>
<style lang="less">
  .mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }
  .mint-swipe-item {
    line-height: 200px;
  }
  .slide1 {
    background-color: #0089dc;
    color: #fff;
  }
  .slide2 {
    background-color: #ffd705;
    color: #000;
  }
  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
  }
  .test-wrap{
    width: 100%;
    margin-top: -20px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ddd;
    padding: 0 10px;
  }
  .test-item{
    width: auto;
    text-align: left;
    margin-right: auto;
  }
</style>
