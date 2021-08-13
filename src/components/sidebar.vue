<template>
  <div class="sidebar">
    <el-menu
      background-color="#2D4054"
      text-color="#fff"
      active-text-color="#00B4CF"
      router
      default-active="/agent"
    >
      <!-- 00B4CF -->
      <el-menu-item :id="'el-menu-'+i" v-for="i in 4" :key="i" :index="'/' + path[i - 1]">
        <!-- <img :id="'img'+i" :src="require('../assets/'+iconList[i-1]+'.png')" alt=""> -->
        <i
          id="icon"
          :class="'iconfont ' + 'icon-' + iconList[i - 1] + '-copy'"
          style=""
        ></i>
        <span slot="title">{{ menuList[i - 1] }}</span>
      </el-menu-item>
      <div class="History">
        <span>History</span>
        <ul
          id="scrollUl"
          v-infinite-scroll="load"
          :infinite-scroll-delay="delay"
          :infinite-scroll-distance="distance"
        >
          <li v-for="i in List" :key="i">
            {{ "bjstdmngbgr0" + i + "/Acceptance_test" }}
          </li>
        </ul>
      </div>
    </el-menu>
    <!-- :before-close="handleClose" -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      Idxclick: null,
      delay: 1000,
      distance: 15,
      iconList: ["dashboard", "fenzhijigou", "cruise", "help"],
      menuList: ["DASHBOARD", "AGENT", "MY CRUISE", "HELP"],
      path: ["dashboard", "agent", "cruise", "help"],
      count: 0,
      List: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    };
  },
  // watch:{
  //   Idxclick(newVal,oldVal){
  //     console.log(newVal,oldVal)
  //     document.getElementById(`img${newVal+1}`).src = require('../assets/'+this.iconListClick[newVal]+'.png')
  //     if(oldVal !== null){
  //       document.getElementById(`img${oldVal+1}`).src = require('../assets/'+this.iconList[oldVal]+'.png')
  //     }
  //   }
  // }
  methods: {
    load() {
      // console.log("load")
      this.List.shift();
      this.List.push(String((this.count % 9) + 1));
      this.count++;
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  min-height: 500px;
  .el-menu {
    height: 100%;
    border-right:none !important;
    .el-menu-item {
      height: 45px;
      line-height: 45px;
      #icon {
        padding: 0 15px;
      }
    }
    #el-menu-1{
      margin-top:30px !important;
    }
    .History {
      position: absolute;
      bottom: 0;
      span {
        font-size: 24px;
        color: #ccc;
        font-family: Arial, Helvetica, sans-serif;
        margin: 20px;
      }
      ul {
        // padding-left:2px;
        margin: 20px 0;
        height: 200px;
        overflow: scroll;
        li {
          font-size: 12px;
          color: #999;
          list-style-type: disc;
          padding: 5px 0;
        }
        li:hover {
          color: #00b4cf;
        }
      }
    }
    // .el-menu-item:hover{
    //   color:rgb(0, 180, 207) !important
    // }
  }
  ul ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
}
</style>