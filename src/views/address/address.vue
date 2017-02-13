<template>
  <div>
    <mt-header fixed title="通讯录"></mt-header>
    <!--<mt-search v-model="searchValue"></mt-search>-->
    <div class="page-wrap">
      <div class="address-list">
        <mt-index-list :show-indicator="false">
          <mt-index-section v-for="item in addressList" :index="item.team">
            <mt-cell v-for="cell in item.member" :title="cell.name" :value="cell.tel" to="/address_detail/cell.id" is-link>
            </mt-cell>
          </mt-index-section>
        </mt-index-list>
      </div>
    </div>
  </div>
</template>

<script src="./address.js"></script>
<style lang="less" src="./address.less"></style>
