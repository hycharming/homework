<template>
  <div class="navbar">
    <div class="blank">
      <i class="el-icon-s-fold" @click="isMenuOpen = !isMenuOpen"></i>
    </div>
    <div class="crulse">
      <img src="../assets/logo.svg" alt="" />
    </div>
    <div class="avatar">
      <img src="../assets/my-icons/pic.png" alt="" />
      <i class="el-icon-arrow-down"></i>
    </div>
    <el-drawer :visible.sync="isMenuOpen" direction="ltr">
      <slot name="title"></slot>
      <side-bar></side-bar>
    </el-drawer>
  </div>
</template>

<script>
import sideBar from "./sidebar";
export default {
  components: { sideBar},
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .blank {
    opacity: 0;
  }
  img {
    height: 40px;
  }
  .crulse {
    padding-left: 100px;
  }
  .avatar {
    padding-right: 100px;
    display: flex;
    align-items: center;
    i {
      padding-left: 5px;
      display: none;
    }
  }
}
::v-deep.el-drawer__wrapper{
  .el-drawer{
    width: 35% !important;
  }
  .el-drawer__header {
    background-color: rgb(45, 64, 84) !important;
    margin:0;
  }
}
</style>    