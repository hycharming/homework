<template>
  <el-container class="home_container">
    <!-- 头部区域 -->
    <el-header>
        <NavBar></NavBar>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container class="content_container">
      <!-- 侧边栏 -->
      <el-aside style="width:250px">
        <side-bar></side-bar>
      </el-aside>
      <!-- 右侧内容区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from "../components/sidebar.vue";
import NavBar from "../components/navbar.vue"
export default {
  components: {
    SideBar,
    NavBar
  },
};
</script>

<style lang="scss" scoped>
.home_container {
  height: 100%;
  .el-header {
    height: 70px !important;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 1px 3px #949494;
  }
  .content_container {
    // width:80%;
    // margin:0 auto;
    padding:0 calc(100% - 1350px);
    .el-aside {
      background-color: #888888;
    }
    .el-main {
      width: calc(2450px - 100%);
    }
    .el-main::-webkit-scrollbar {
       display: none; /* Chrome Safari */
    }
  }
}
</style>