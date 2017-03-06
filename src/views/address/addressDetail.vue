<template>
  <div>
    <mt-header class="header-wrap" fixed title="联系人详情">
      <router-link to="/enter?name=address" slot="left">
        <mt-button class="header-item" icon="back">返回</mt-button>
      </router-link>
      <router-link :to="'/add_inside_contact/'+$route.params.pid" slot="right">
        <mt-button class="header-item">编辑</mt-button>
      </router-link>
    </mt-header>
    <div class="page-wrap address-detail-wrap">
      <div class="card-wrap">
        <div class="avatar">
          <img src="./logo.png">
        </div>
        <div class="name">{{contactDetail.name}}</div>
        <div class="phone">{{contactDetail.phone}}</div>
        <div class="btn-wrap">
          <div class="btn fl">
            <i class="icon iconfont icon-xiaoxizhongxin"></i>
          </div>
          <div class="btn fr">
            <i class="icon iconfont icon-phone"></i>
          </div>
        </div>
      </div>
      <div class="info-wrap">
        <mt-cell :title="contactDetail.cpy">
          <span slot="icon" class="icon iconfont icon-cart"></span>
        </mt-cell>
        <mt-cell :title="contactDetail.team">
          <span slot="icon" class="icon iconfont icon-browse"></span>
        </mt-cell>
      </div>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  @import "../../config.less";

  .address-detail-wrap {
    position: relative;
    min-height: 400px;
    .card-wrap {
      position: absolute;
      left: 50%;
      top: 32px;
      transform: translate(-50%, 0);
      width: 112px;
      text-align: center;
      .avatar {
        width: 84px;
        height: 84px;
        margin: 0 14px 8px;
        border-radius: 50%;
        > img {
          width: 100%;
        }
      }
      .name {
        font-size: 26px;
        line-height: 37px;
      }
      .phone {
        font-size: 16px;
        line-height: 22px;
      }
      .btn-wrap {
        margin-top: 18px;
        .btn {
          width: 38px;
          height: 38px;
          padding: 10px;
          border-radius: 50%;
          background: @borderBlue;
          .icon {
            font-size: 18px;
            color: #fff;
          }
        }
      }
    }
    .info-wrap {
      margin-top: 282px;
      .mint-cell {
        min-height: 45px;
        .mint-cell-wrapper {
          padding: @cellPadding;
          .icon {
            display: inline-block;
            width: 50px;
            font-size: 22px;
            color: @bgBlue;
            &.icon-cart{
              position: relative;
              top:5px;
            }
          }
          .mint-cell-text {
            line-height: 27px;
          }
        }
      }
    }
  }
</style>

<script>
  let nameDetail = {
    name: '黄队长',
    phone: '18825220050',
    cpy: '猫空科技有限公司',
    team: '保卫处一队'
  };
  export default{
    data() {
      return {
        contactId: this.$route.params.pid,
        contactDetail: {}
      }
    },
    mounted() {
      this.getContactData();
    },
    methods: {
      getContactData() {
        this.contactDetail = nameDetail;
      }
    }
  }

</script>


