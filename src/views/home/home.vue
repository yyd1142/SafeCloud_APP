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
            <div class="total-fen-wrap">
              <span class="total-name">安全得分</span>
              <div class="total-value"><span>90</span>优秀</div>
            </div>
            <div class="fen-item">
              建筑物火灾风险得分
              <mt-progress :value="20" :bar-height="5">
                <div slot="end">28/30</div>
              </mt-progress>
              建筑物火灾风险得分
              <mt-progress :value="20" :bar-height="5">
                <div slot="end">28/30</div>
              </mt-progress>
              建筑物火灾风险得分
              <mt-progress :value="20" :bar-height="5">
                <div slot="end">28/30</div>
              </mt-progress>
            </div>
          </router-link>
        </div>
        <!--今日巡查-->
        <div class="today-wrap">
          <div class="today-xuncha">
            <router-link to="/xuncha">
              <i class="icon iconfont icon-text"></i>
              <span>今日巡查</span>
            </router-link>
          </div>
          <div class="today-zhiban">
            <router-link to="/zhiban">
              <i class="icon iconfont icon-browse"></i>
              <span>今日值班</span>
            </router-link>
          </div>
        </div>
        <!--功能-->
        <ul class="actions-table-view">
          <li class="actions-table-cell" v-for="item in 6">
            <i class="icon iconfont icon-text"></i>
            <span>视频监控</span>
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
