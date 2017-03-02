<template>
  <div class="photo-preview">
    <mt-popup v-model="popupShow">
      <div class="cancel" @click="popupShow=false">x</div>
      <img src="./logo.png" width="350" height="350">
      <mt-button class="delete" type="danger" size="large">删除</mt-button>
    </mt-popup>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .photo-preview {
    .mint-popup {
      padding-top: 30px;
      background: none;
      .cancel {
        position: absolute;
        right: 0;
        top: 0;
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
        popupShow: false
      }
    },
    props: ['photoId'],
    created() {

    },
    computed: {
      photoUrl: function () {
        return './logo.png';
      }
    },
    methods: {
      show(){
        this.popupShow = true;
      }
    },
    components: {}
  }
</script>


