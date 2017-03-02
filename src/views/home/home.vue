<template>
  <div>
    <mt-header class="home-header-wrap" fixed title="安全云">
      <router-link to="/message" slot="right">
        <i class="icon iconfont icon-text home-message-icon"></i>
      </router-link>
    </mt-header>
    <div class="page-wrap" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <!--安全得分-->
      <div class="home-banner-wrap">
        <img src="/static/banner.png"/>
      </div>
      <!--<div class="fen-wrap">
        <router-link to="/score">
          <div class="fen-company" v-text="scoreItem.company"></div>
          <div class="fen-value" v-text="scoreItem.value"></div>
          <div class="fen-level" v-text="scoreItem.level"></div>
          <div class="fen-jb">击败了78%的同类型单位</div>
        </router-link>
      </div>-->
      <!--管理员功能区-->
      <ul class="actions-table-view" v-if="identity == 1">
        <li class="actions-table-cell" v-for="item in actions" @click="routerLink(item)">
          <i class="icon iconfont" :class="item.class"></i>
          <span v-text="item.text"></span>
        </li>
      </ul>
      <!--安全员功能区-->
      <ul class="actions-table-view" v-if="identity == 2">
        <li class="actions-table-cell" :class=" index <= 1 ? actionClass : '' " v-for="(item, index) in aq_actions" @click="routerLink(item)">
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
      <mt-tab-container v-model="selected" swipeable>
        <mt-tab-container-item id="1">
          <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
            <li v-for="item in newsDatas" class="page-infinite-listitem">
              <router-link :to="'/news_info/' + item">
                <img src="/static/image-square.png"/>
                <div class="news-title">中国消防协会召开六届二次理事会议</div>
                <div class="news-date">2019-01-01</div>
              </router-link>
            </li>
          </ul>
          <p v-if="loading" class="page-infinite-loading">
            <mt-spinner type="double-bounce"></mt-spinner>加载中...
          </p>
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
