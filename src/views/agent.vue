<template>
  <div class="agent">
    <!-- 数据展示 -->
    <div class="dataView">
      <el-card class="Building">
        <div class="font">Building</div>
        <i class="el-icon-s-tools"></i>
        <div class="num">3</div>
      </el-card>
      <el-card class="Idle">
        <div class="font">Idle</div>
        <i class="el-icon-coffee-cup"></i>
        <div class="num">5</div>
      </el-card>
      <el-card>
        <div class="Count">
          <div class="countfont" v-for="i in 3" :key="i">
            {{ CountList[i - 1] }}
            <p>{{ CountNumList[i - 1] }}</p>
          </div>
        </div>
      </el-card>
    </div>
    <el-card
      class="options"
      body-style="padding:0px;display:flex;justify-content:space-between"
    >
      <div class="btnAndInput" style="display: flex">
        <!-- <div class="btn">
          <el-button-group>
            <el-button :id="'btn' + i" v-for="i in 3" :key="i" @click="getClickIndex(i)">{{
              BtnList[i - 1]
            }}</el-button>
          </el-button-group>
        </div> -->
        <div class="btn">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="All" name="all"></el-tab-pane>
            <el-tab-pane label="Physical" name="pyhsical"></el-tab-pane>
            <el-tab-pane label="Virtual" name="virtual"></el-tab-pane>
            >
          </el-tabs>
        </div>
        <div class="serach">
          <el-input
            prefix-icon="el-icon-search"
            v-model="searchData"
            size="small"
            @input="debounce(500)"
            @change="searchDataChange()"
          >
          </el-input>
        </div>
      </div>
      <div class="icons">
        <i class="el-icon-s-grid"></i>
        <i class="el-icon-menu"></i>
      </div>
    </el-card>

    <div class="list">
      <Card
        v-for="(item, index) in ListFilterMsg"
        :key="index"
        :imgSrc="
          require(`../assets/osIcons/${ListFilterMsg[index].imgSrc}.png`)
        "
        :Url="'bjstdmngbgr' + ListFilterMsg[index].Url + '.thoughtworks.com'"
        :State="ListFilterMsg[index].state"
        Ip="192.168.1.243"
        docSrc="/var/lib/cruise-agent"
        :idx="index"
        @isVisible="getVisible"
        :isvisible="isvisible"
      ></Card>
    </div>
  </div>
</template>

<script>
import Card from "../components/card";
export default {
  data() {
    return {
      activeName: "all",
      searchData: "",
      CountList: ["ALL", "PHYSICAL", "VIRTUAL"],
      CountNumList: [8, 4, 4],
      BtnList: ["All", "Physical", "Virtual"],
      ListFilterMsg: [],
      timer: 0, //防抖时间
      isvisible: false,
      ListMsg: [
        {
          imgSrc: "windows",
          Url: "01",
          state: false,
        },
        {
          imgSrc: "windows",
          Url: "08",
          state: true,
        },
        {
          imgSrc: "ubuntu",
          Url: "10",
          state: true,
        },
        {
          imgSrc: "debin",
          Url: "11",
          state: true,
        },
        {
          imgSrc: "suse",
          Url: "15",
          state: false,
        },
        {
          imgSrc: "cent_os",
          Url: "01",
          state: false,
        },
      ],
    };
  },
  created() {
    this.ListFilterMsg = this.ListMsg;
    this.$axios
      .get("js/data.json")
      .then((res) => {
        console.log("res:", res);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  },
  components: {
    Card,
  },
  methods: {
    // getClickIndex(idx) {
    //   console.log(document.getElementById(`btn${idx}`));
    // },
    handleClick(res) {
      this.ListFilterMsg = this.ListMsg.filter((item) => {
        console.log(item.state);
        if (res.name == "pyhsical") return item.state == true;
        else if (res.name == "virtual") return item.state == false;
        else return item;
      });
        this.searchData = ''
      console.log(this.ListFilterMsg);
    },
    searchDataChange() {
      if (!this.searchData) {
        this.ListFilterMsg = this.ListMsg;
      } else {
        this.ListFilterMsg = this.ListMsg.filter((item) => {
          let str = "bjstdmngbgr" + item.Url + ".thoughtworks.com";
          return str.indexOf(this.searchData) !== -1 ? item : "";
        });
      }
    },
    // 搜索框 防抖
    debounce(delay) {
      if (this.timer === 0) {
        this.searchDataChange();
      } else {
        // alert("操作过快");
        clearTimeout(this.timer);
        // console.log()
      }

      this.timer = setTimeout(() => {
        this.searchDataChange();
        this.timer = 0;
      }, delay);
      // console.log(this.timer);
    },
    getVisible(res) {
      this.isvisible = res;
    },
  },
};
</script> 

<style lang="scss" scoped>
.agent {
  width: 880px;
  .dataView {
    display: flex;
    justify-content: space-between;
    .el-card {
      height: 144px;
      width: 270px;
      margin-bottom: 20px;
      // min-width: 250px;
      // max-width: 250px;
    }
    .Building {
      background-color: #ff9a2a;
      position: relative;
      .el-icon-s-tools {
        color: #fff;
        font-size: 144px;
        opacity: 20%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .Idle {
      background-color: #7fbc39;
      position: relative;
      .el-icon-coffee-cup {
        color: #fff;
        font-size: 144px;
        opacity: 20%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .Count {
      background-color: #fff;
      display: flex;
      justify-content: space-around;
      .countfont {
        padding-top: 10px;
        font-size: 12px;
        p {
          font-size: 20px;
          text-align: center;
          font-weight: bold;
          padding-top: 10px;
        }
      }
    }
  }
  .options {
    height: 50px;
    margin: 10px 0;
    // min-width:100%;
    // max-width: 100%;
    .icons {
      font-size: 20px;
      line-height: 50px;
      i {
        padding: 0 30px 10px 0;
        cursor: pointer;
      }
      .el-icon-menu {
        color: #00b4cf;
      }
    }
  }
  .list {
    margin: 20px 0;
    height: 100px;
  }
  .font {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }
  .num {
    font-size: 48px;
    text-align: end;
    color: #fff;
  }
  .el-input--small {
    line-height: 50px;
    margin-left: 30px;
    width: 180px;
  }
}
::v-deep .el-input__icon {
  color: #5d5e5f;
}
::v-deep .el-input__inner {
  background-color: #f3f3f3;
}
::v-deep .el-tabs__item {
  width: 90px;
  height: 49px;
  text-align: center;
  line-height: 50px;
}
::v-deep .is-active {
  border-bottom: 3px solid #00b4cf !important;
}
</style>