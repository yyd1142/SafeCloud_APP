<template>
  <div class="photo-preview">
    <mt-popup v-model="popupShow">
      <!--<div class="cancel" @click="popupShow=false">x</div>-->
      <div class="photo">
        <img src="./logo.png" width="350" height="350">
      </div>
      <mt-button class="delete" @click="sheetShow=true" type="danger" size="large">删除</mt-button>
    </mt-popup>
    <mt-actionsheet v-model="sheetShow" :actions="actions" cancelText="取消"></mt-actionsheet>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .photo-preview {
    .mint-popup {
      padding-top: 30px;
      background: none;
      .photo {
        background: #fff;
      }
      .cancel {
        position: absolute;
        right: 0;
        top: -10px;
        font-size: 36px;
        font-weight: 600;
        color: #fff;
      }
      .delete {
        margin-top: 20px;
      }
    }
    .v-modal {
      opacity: .8;
      background: #565656;
    }
  }
</style>

<script>
  export default{
    data() {
      return {
        popupShow: false,
        sheetShow:false,
        actions: [],
      }
    },
    props: ['photoId'],
    created() {
      this.actions=[
        {name: '确认删除', method: this.deletePhoto},
      ]
    },
    computed: {
      photoUrl: function () {
        return './logo.png';
      }
    },
    methods: {
      show(){
        this.popupShow = true;
      },
      deletePhoto(){
//          this.$emit('',this.photoId);
      }
    },
    components: {}
  }
</script>


