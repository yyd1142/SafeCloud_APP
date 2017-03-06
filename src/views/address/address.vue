<template>
  <div>
    <mt-header class="header-wrap" fixed title="通讯录">
      <!--<router-link to="/add_inside_contact" slot="right">-->
      <!--<mt-button class="header-item">新增 +</mt-button>-->
      <!--</router-link>-->
      <!--<router-link to="/add_department" slot="left">-->
      <!--<mt-button class="header-item">部门</mt-button>-->
      <!--</router-link>-->
    </mt-header>
    <div class="page-wrap address-wrap">
      <mt-navbar class="navbar-wrap" v-model="addressClass" fixed>
        <mt-tab-item id="1">内部</mt-tab-item>
        <mt-tab-item id="2">外部</mt-tab-item>
      </mt-navbar>
      <mt-search class="search-wrap" v-model="searchValue"></mt-search>
      <div class="address-list">
        <mt-tab-container v-model="addressClass">
          <mt-tab-container-item id="1">
            <mt-index-list :show-indicator="false">
              <mt-index-section v-for="item in addressList.inside" :index="item.team">
                <mt-cell v-for="cell in item.member" :title="cell.name" :value="cell.tel"
                         :to="'/address_detail/'+cell.id">
                </mt-cell>
              </mt-index-section>
            </mt-index-list>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <mt-index-list :show-indicator="false">
              <mt-index-section v-for="item in addressList.outside" :index="item.team">
                <mt-cell v-for="cell in item.member" :title="cell.name" :value="cell.tel"
                         :to="'/address_detail/'+cell.id">
                </mt-cell>
              </mt-index-section>
            </mt-index-list>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  @import "../../config.less";

  .address-wrap {
    .search-wrap{
      margin-top:40px;
      height:auto;
      .mint-searchbar{
        z-index: 0;
      }
    }
    .navbar-wrap {
      top: 40px;
      .mint-tab-item {
        padding: 10px 0;
        height: 20px;
        font-size: 14px;
        &.is-selected {
          position: relative;
          border-bottom: 0;
          color: @textBlue;
          .mint-tab-item-label:after {
            content: "";
            position: absolute;
            width: 29px;
            bottom: 7px;
            left: 50%;
            transform: translate(-50%, 0);
            border-bottom: 2px solid @textBlue;
          }
        }
        .mint-tab-item-label {
          line-height: 20px;
        }
      }
    }
    .address-list {
      .mint-indexsection {
        .mint-indexsection-index {
          padding: 4px 0 3px 14px;
          height: 17px;
          line-height: 17px;
          font-size: 12px;
        }
        .mint-cell {
          .mint-cell-wrapper {
            padding: 0 14px;
            font-size: 14px;
            .mint-cell-title {}
            .mint-cell-value {
              color: #232323;
            }
          }
        }
      }

      .mint-indexlist-nav {
        display: none;
      }
      .mint-cell-allow-right {
        display: none;
      }
    }
  }

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

</style>

<script>
  var NAMES = [
    {
      team: '保安处1队', member: [
      {
        id: 1,
        name: '阿凡达',
        tel: '153 2325 2354'
      },
      {
        id: 2,
        name: '阿里山',
        tel: '153 2325 2354'
      }
    ]
    },
    {
      team: '保安处2队', member: [
      {
        id: 3,
        name: '陈锐',
        tel: '153 2325 2354'
      },
      {
        id: 4,
        name: '曹师傅',
        tel: '153 2325 2354'
      }
    ]
    },
    {
      team: '志愿消防队', member: [
      {
        id: 5,
        name: '付师傅',
        tel: '153 2325 2354'
      },
      {
        id: 6,
        name: '霍元甲',
        tel: '153 2325 2354'
      },
      {
        id: 7,
        name: '韩寒',
        tel: '153 2325 2354'
      },
      {
        id: 8,
        name: '范经理',
        tel: '153 2325 2354'
      }
    ]
    },
    {
      team: '消防控制室', member: [
      {
        id: 9,
        name: '付师傅',
        tel: '153 2325 2354'
      },
      {
        id: 10,
        name: '霍元甲',
        tel: '153 2325 2354'
      },
      {
        id: 11,
        name: '韩寒',
        tel: '153 2325 2354'
      },
      {
        id: 12,
        name: '范经理',
        tel: '153 2325 2354'
      }
    ]
    }
  ];

  export default {
    data() {
      return {
        addressClass: "1",
        addressList: {
          inside: [],
          outsize: []
        },
        searchValue: ""
      };
    },
    created() {
      //'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
      //    let cells = NAMES.filter(name => name[0] === initial);
      //    this.alphabet.push({
      //        initial,
      //        cells
      //    });
      //});
      this.getData();
    },
    methods: {
      getData(){
        this.addressList.inside = NAMES;
      }
    }
  };

</script>

