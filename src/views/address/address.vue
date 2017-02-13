<template>
  <div>
    <mt-header fixed title="通讯录">
      <router-link to="/add_inside_contact" slot="right">
        <mt-button>新增 +</mt-button>
      </router-link>
      <router-link to="/add_department" slot="left">
        <mt-button>部门</mt-button>
      </router-link>
    </mt-header>
    <!--<mt-search v-model="searchValue"></mt-search>-->
    <div class="page-wrap address-wrap">
      <mt-navbar v-model="addressClass" class="navbar-wrap" fixed>
        <mt-tab-item id="1">内部</mt-tab-item>
        <mt-tab-item id="2">外部</mt-tab-item>
      </mt-navbar>
      <div class="address-list">
        <mt-index-list :show-indicator="false">
          <mt-index-section v-for="item in addressList" :index="item.team">
            <mt-cell v-for="cell in item.member" :title="cell.name" :value="cell.tel" :to="'/address_detail/'+cell.id"
                     is-link>
            </mt-cell>
          </mt-index-section>
        </mt-index-list>
      </div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .address-wrap {
    .navbar-wrap {
      top: 40px;
    }
    .address-list {
      margin-top: 46px;
      .mint-cell-title {
        flex: 0 0 90px;
      }
      .mint-cell-value {
        flex: 1;
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

  .test-wrap {
    width: 100%;
    margin-top: -20px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ddd;
    padding: 0 10px;
  }

  .test-item {
    width: auto;
    text-align: left;
    margin-right: auto;
  }

</style>

<script>
  //var NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane'];
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
        addressList: [],
        addressClass: "1",
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
      this.addressList = NAMES;
    },
    methods: {
      tell(item){
        console.log(item);
      }
    }
  };

</script>

