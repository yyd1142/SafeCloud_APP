<template>
  <div>
    <mt-header class="header-wrap" fixed title="联系人详情">
      <router-link to="/enter?name=address" slot="left">
        <mt-button class="header-item" icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="page-wrap address-detail-wrap">
      <div class="detail-card">
        <mt-cell :title="addressDetail.name" :value="addressDetail.team"></mt-cell>
        <mt-cell :title="addressDetail.tel"></mt-cell>
        <mt-cell :title="addressDetail.team"></mt-cell>
        <div class="btn-wrap">
          <div class="btn">
            <i class="icon iconfont icon-shuffling-banner"></i>
          </div>
          <div class="btn">
            <i class="icon iconfont icon-phone"></i>
          </div>
        </div>
      </div>
      <div class="edit-wrap">
        <router-link :to="'/add_inside_contact/'+$route.params.pid">
          <mt-button type="default">编辑</mt-button>
        </router-link>
        <mt-button type="default">删除</mt-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .address-detail-wrap {
    position: relative;
    min-height: 400px;
    .detail-card {
      .btn-wrap {
        display: flex;
        border: 1px solid #ccc;
        .btn {
          flex: 1;
          padding: 20px 0;
          text-align: center;
          & + .btn {
            border-left: 1px solid #ccc;
          }
          .icon {
            font-size: 25px;
          }
        }
      }
    }
    .edit-wrap {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
    }
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
  export default{
    data() {
      return {
        addressDetail: {}
      }
    },
    mounted() {
      this.getAddressData();
    },
    methods: {
      getAddressData() {
        NAMES.forEach(teamData => {
          teamData.member.forEach(data => {
            if (data.id == this.$route.params.pid) {
              this.addressDetail = data;
              this.addressDetail.team = teamData.team;
            }
          })
        });
      }
    }
  }

</script>


