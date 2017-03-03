<template>
  <div>
    <mt-header class="header-wrap" fixed title="隐患查报">
      <mt-button class="header-item" icon="back" slot="left" @click.native="back()"></mt-button>
    </mt-header>
    <div class="page-wrap check-hide-danger">
      <div class="info-wrap">
        <mt-cell title="设备" value="暂无"></mt-cell>
        <mt-cell title="位置">
          <span class="cell-btn" @click="popupShow=true">筛选</span>
        </mt-cell>
        <div v-if="formData.build">
          <mt-cell title="隐患建筑" :value="showBuild"></mt-cell>
          <mt-cell title="隐患楼层" :value="(formData.floor||'未选择')+'层'" v-if="formData.build"></mt-cell>
          <mt-field v-model="formData.address" label="隐患地址" placeholder="请输入隐患地址"></mt-field>
        </div>
      </div>
      <div class="popup-wrap">
        <mt-popup v-model="popupShow" position="right">
          <div class="body-wrap">
            <div class="radio-wrap">
              <p class="title">建筑隐患</p>
              <!--<mt-radio title="建筑隐患" v-model="formData.build" :options="options.build"></mt-radio>-->
              <mt-button class="radio" :class="{'checked':formData.build==item.value}"
                         @click.native="formData.build=item.value"
                         v-for="item in options.build" size="large"><span v-show="formData.build==item.value"></span>{{item.label}}
              </mt-button>
            </div>
            <div class="radio-wrap floor-radio-wrap">
              <p class="title">楼层隐患</p>
              <mt-button class="radio" :class="{'checked':formData.floor==item}"
                         @click.native="formData.floor=item" v-for="item in options.floor">
                <span v-show="formData.floor==item"></span>
                {{item}}层
              </mt-button>
            </div>
          </div>
          <div class="footer-wrap">
            <mt-button class="reset" @click="resetData">重置</mt-button>
            <mt-button class="confirm" @click="popupShow=false">确定</mt-button>
          </div>
        </mt-popup>
      </div>
      <div class="content-wrap">
        <!--<div class="title">-->
          <!--<mt-field v-model="formData.title" placeholder="请输入隐患标题"></mt-field>-->
        <!--</div>-->
        <div class="desc">
          <mt-field v-model="formData.desc" placeholder="请输入隐患描述" type="textarea"></mt-field>
        </div>
        <div class="photo-wrap">
          <div class="photo-list">
            <div class="photo" @click="photoPreview" v-for="item in photoList">
              <img src="./logo.png">
            </div>
            <div class="photo" v-if="photoList.length<8">
              <div class="btn" @click="sheetShow=true">+</div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-wrap">
        <mt-button class="btn" size="large" @click="postHideDanger">提交隐患</mt-button>
      </div>
      <photo-preview photoId="1" ref="photoPreview"></photo-preview>
      <mt-actionsheet v-model="sheetShow" :actions="actions" cancelText="取消"></mt-actionsheet>
    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  @import "../../app.less";

  .check-hide-danger {
    .info-wrap {
      .cell-btn {
        color: blue;
      }
    }
    .popup-wrap {
      position: relative;
      .mint-popup-right {
        width: 284px;
        height: 100%;
      }
      .body-wrap {
        overflow: scroll;
        padding: 34px 7px 100px;
        max-height: 700px;
        bottom: 100px;
        &:after {
          display: table;
          content: "";
        }
        .radio-wrap {
          margin-bottom: 10px;
          .radio {
            margin-bottom: 10px;
            &.checked {
              background: #fff;
              border: 1px solid #0089dc;
            }
          }
          .title {
            margin: 0 0 10px;
          }
          &.floor-radio-wrap {
            .radio {
              float: left;
              width: 50px;
              height: 30px;
              margin-right: 4px;
              font-size: 13px;
            }
          }
          & + .radio-wrap {
            margin-top: 20px;
            padding-top: 20px;
            .border-top(#D8D8D8);
          }
        }
      }
      .footer-wrap {
        display: flex;
        position: absolute;
        bottom: 0;
        width: 100%;
        .mint-button {
          flex: 1;
          width: 50%;
          &.reset {
            background: #fff;
            border: 1px solid #0089dc;
          }
          &.confirm {
            background: #0089dc;
            color: #fff;
          }
        }
      }

    }
    .content-wrap {
      margin-top: 10px;
      background:#fff;
      .desc {
        margin-bottom:28px;
        .mint-cell-value{
          textarea{
            min-height:100px;
          }
        }
      }
      .photo-wrap {
        padding: 0 10px 10px;
        background: #fff;
        .photo-list {
          display: flex;
          flex-wrap: wrap;
          .photo {
            flex: 0 0 25%;
            position: relative;
            min-height: 80px;
            margin-bottom: 10px;
            text-align: center;
            >img{
              width:90%;
            }
            .btn {
              position: absolute;
              left: 50%;
              transform: translate(-50%, 0);
              width: 80px;
              height: 80px;
              line-height: 80px;
              border: 1px dotted #999;
              border-radius: 4px;
              color: #999;
            }
          }
        }
      }
    }
    .footer-wrap {
      position: fixed;
      width: 100%;
      bottom: 0;
      .btn {
        background: #f44336;
        color: #fff;
      }
    }
  }
</style>

<script>
  let location = [
    {id: 1, build: '海岸城西座', floor: [-1, 1, 2, 3, 4]},
    {id: 2, build: '欢乐海岸', floor: [-2, -1, 1, 2, 3, 4, 5, 6]},
    {id: 3, build: '平安国际中心大厦', floor: [-2, -1, 1, 2, 3, 4, 5, 6, 7]}
  ];
  let photo = ['./logo.png', './logo.png', './logo.png', './logo.png', './logo.png'];
  import { Toast } from 'mint-ui';
  import PhotoPreview from '../../components/PhotoPreview/PhotoPreview.vue';
  export default{
    data() {
      return {
        popupShow: false,
        sheetShow: false,
        photoId: 1,
        actions: [],
        location: {},
        options: {
          build: [],
          floor: []
        },
        formData: {
          build: "",
          floor: "",
          address: "",
          title: '',
          desc: '',
          photoId: ''
        },
        photoList: []
      }
    },
    created() {
      this.getData();
      this.actions = [
        {name: '拍照', method: this.addPhoto},
        {name: '从相册中选择', method: this.addPhoto},
      ];
    },
    watch: {
      'formData.build': function (val) {
        this.location.forEach(item => {
          if (item.id === val) {
            this.options.floor = item.floor;
          }
        })
      }
    },
    computed: {
      'showBuild': function () {
        let build = "";
        this.location.forEach(item => {
          if (this.formData.build == item.id) {
            build = item.build;
          }
        });
        return build;
      }
    },
    methods: {
      getData(){
        this.getLocationData();
        this.photoList = photo;
      },
      getLocationData(){
        this.location = location;
        this.options.build = location.map(item => {
          return {label: item.build, value: item.id};
        });
      },
      addPhoto(){
        this.photoList.push('1');
      },
      photoPreview(){
        this.$refs.photoPreview.show();
      },
      resetData(){
        this.formData.build = "";
        this.formData.floor = "";
      },
      postHideDanger(){
        Toast({
          message: '提交成功',
          duration: 2000
        });
        setTimeout(() => {
          this.back();
        }, 1500);
      },
      back(){
        this.$emit('ctrl-page', 1);
      }
    },
    components: {
      PhotoPreview
    }
  }
</script>


