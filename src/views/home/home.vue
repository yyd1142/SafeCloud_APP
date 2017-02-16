<template>
  <div>
    <mt-header fixed title="安全云">
        <router-link to="/message" slot="right">
            <mt-button>消息</mt-button>
        </router-link>
    </mt-header>
    <div class="page-wrap">
        <!--安全得分-->
        <div class="fen-wrap">
          <router-link to="/score">
            <div class="fen-company">华润新鸿基房地产（无锡）有限公司(万象城)</div>
            <div class="fen-value">90</div>
            <div class="fen-level">优秀</div>
            <div class="fen-jb">击败了78%的同类型单位</div>
          </router-link>
        </div>
        <!--功能-->
        <ul class="actions-table-view">
          <li class="actions-table-cell" v-for="item in actions" @click="routerLink(item)">
             <i class="icon iconfont" :class="item.class"></i>
              <span v-text="item.text"></span>
          </li>
        </ul>
        <!--TAB-->
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">新闻通知</mt-tab-item>
          <mt-tab-item id="2">安全知识</mt-tab-item>
          <mt-tab-item id="3">法律法规</mt-tab-item>
          <mt-tab-item id="4">经典案例</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <mt-cell v-for="n in 10" :title="'新闻通知 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <mt-cell v-for="n in 4" :title="'安全知识 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <mt-cell v-for="n in 6" :title="'法律法规 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="4">
            <mt-cell v-for="n in 6" :title="'经典案例 ' + n" />
          </mt-tab-container-item>
        </mt-tab-container>
    </div>
  </div>
</template>

<script src="./home.js"></script>
<style lang="less" src="./home.less" scoped></style>
