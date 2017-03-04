<template>
  <div>
    <mt-header class="home-header-wrap" fixed title="安全云">
      <router-link to="/message" slot="right">
        <i class="icon iconfont icon-xiaoxizhongxin home-message-icon"></i>
      </router-link>
    </mt-header>
    <div class="page-wrap" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <!--安全得分-->
      <div class="home-banner-wrap">
        <img src="/static/banner.png" />
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
      <div class="today-todo-wrap">
        <div class="main">
          <div class="today-xuncha" @click="routerLink({url: '/xuncha_info/1'})">
            <img class="today-image" src="/static/icons/home_xuncha.png" />
            <span class="today-font">今日巡查</span>
          </div>
          <div class="today-zhiban" @click="routerLink({url: '/safer_zhiban_info/' + zhibanId})">
            <img class="today-image" src="/static/icons/home_zhiban.png" />
            <span class="today-font">今日值班</span>
          </div>
        </div>
      </div>
      <ul class="actions-table-view" v-if="identity == 2">
        <li class="actions-table-cell" v-for="(item, index) in aq_actions" @click="routerLink(item)">
          <i class="icon iconfont" :class="item.class"></i>
          <span class="today-font" v-text="item.text"></span>
        </li>
      </ul>
      <ul class="news-table-view">
        <li class="news-table-cell" :class="item.selected" v-text="item.text" @click="tab(item, index)" v-for="(item, index) in newsTabs"></li>
      </ul>
      <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
        <li v-for="item in newsDatas" class="page-infinite-listitem">
          <router-link :to="'/news_info/' + item">
            <img src="/static/image-square.png" />
            <div class="news-title">中国消防协会召开六届二次理事会议</div>
            <div class="news-date">2019-01-01</div>
          </router-link>
        </li>
      </ul>
      <div class="page-infinite-loading" v-if="loading">
        <mt-spinner class="page-loader" type="double-bounce"></mt-spinner>加载更多
      </div>
    </div>
  </div>
</template>

<script src="./home.js"></script>
<style lang="less" src="./home.less" scoped></style>