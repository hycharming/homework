<template>
  <div class="card">
    <el-card
      body-style="display:flex;align-items:center;height:100px;padding:0 20px  "
    >
      <!-- 头像 -->
      <div class="avatar">
        <img :src="imgSrc" alt="" />
      </div>

      <div class="content">
        <div class="msg">
          <div class="url">
            <i class="el-icon-monitor"></i>
            <span>{{ Url }}</span>
          </div>

          <div class="state">
            <el-tag v-if="State" color="#ff9a2a" size="small">building</el-tag>
            <el-tag v-else color="#7fbc39" size="small">idle</el-tag>
          </div>

          <div class="ip">
            <i class="el-icon-warning-outline"></i>
            <span>{{ Ip }}</span>
          </div>

          <div class="doc">
            <i class="el-icon-folder"></i>
            <span>{{ docSrc }}</span>
          </div>
        </div>

        <div class="tag">
          <div class="addTag">
            <el-button
              style="padding: 4.5px; border-radius: 0"
              @click="addTagMethod(idx)"
              v-popover:popover
              ><i class="el-icon-plus"></i
            ></el-button>
            <span class="Tag" v-for="(item, index) in addNumList" :key="index">
              <el-tag color="#FFF"
                >{{ item }}
                <i
                  class="el-icon-delete-solid"
                  @click="deleteData(index)"
                  style="cursor: pointer"
                ></i>
              </el-tag>
            </span>
          </div>

          <div class="deny" v-if="State">
            <el-button>
              <i class="iconfont icon-icon-test"></i>
              <span>Deny</span>
            </el-button>
          </div>
        </div>
      </div>
    </el-card>

    <!-- Desktop -->
    <div class="popover">
      <el-popover
        placement="bottom-start"
        ref="popover"
        width="570"
        trigger="manual"
        v-model="visible"
      >
        <i
          class="el-icon-close"
          style="
            float: right;
            font-size: 16px;
            font-weight: bold;
            color: #00b4cf;
            cursor: pointer;
          "
          @click="close()"
        ></i>
        <p style="margin: 10px; color: #2d4054; font-size: 14px">
          Separate multiple resource name with commas
        </p>
        <el-input
          placeholder="e.g.Chrome,Firefox"
          style="padding: 0 10px 10px; width: 99%; height: 35px"
          v-model="addTagData"
        ></el-input>
        <el-button
          style="
            font-size: 14px;
            padding: 7px 15px;
            margin: 15px 0 5px 10px;
            border-radius: 0;
            background-color: #00b4cf;
            color: #fff;
          "
          @click="AddResources()"
          >Add Resources</el-button
        >
        <el-button
          style="
            font-size: 14px;
            padding: 7px 20px;
            border-radius: 0;
            background-color: #2d4054;
            color: #fff;
          "
          @click="cancel()"
          >Cancel</el-button
        >
      </el-popover>
    </div>
    <!-- tablet -->
    <div class="dialog">
      <el-dialog
        :visible.sync="dialogVisible"
        width="70%"
        top="30vh"
        title.style="padding:0"
      >
        <p style="margin: 10px; color: #2d4054; font-size: 14px">
          Separate multiple resource name with commas
        </p>
        <el-input
          placeholder="e.g.Chrome,Firefox"
          style="padding: 0 10px 10px; width: 99%; height: 35px"
          v-model="addTagData"
        ></el-input>
        <el-button
          style="
            font-size: 14px;
            padding: 7px 15px;
            margin: 15px 0 5px 10px;
            border-radius: 0;
            background-color: #00b4cf;
            color: #fff;
          "
          @click="AddResources()"
          >Add Resources</el-button
        >
        <el-button
          style="
            font-size: 14px;
            padding: 7px 20px;
            border-radius: 0;
            background-color: #2d4054;
            color: #fff;
          "
          @click="
            dialogVisible = false;
            addTagData = '';
          "
          >Cancel</el-button
        >
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      addTagData: "",
      addNumList: [],
      dialogVisible: false,
      timer: 0,
    };
  },
  methods: {
    addTagMethod() {
      if (document.body.clientWidth > 768) {
        if (!this.isvisible) {
          this.visible = true;
          this.$emit("isVisible", true);
        }
      } else {
        this.dialogVisible = true;
      }
      // console.log(idx);
    },
    AddResources() {
      let idx = this.addTagData.indexOf(",");
      console.log(this.addTagData);
      if (this.addTagData == "") {
        // this.visible = false;
        this.addTagData = "";
        return;
      }
      if (this.addTagData[0] == ",") {
        this.addTagData = this.addTagData.slice(1);
        this.AddResources();
        return;
      }
      console.log("idx", idx);
      if (idx === -1) {
        this.addNumList.push(this.addTagData);
        this.visible = false;
        this.dialogVisible = false;
        this.addTagData = "";
        this.$emit("isVisible", false);
        return;
      } else {
        this.addNumList.push(this.addTagData.slice(0, idx));
        this.addTagData = this.addTagData.slice(idx + 1);
        this.AddResources();
      }
    },
    deleteData(idx) {
      // console.log(this.addNumList[idx])
      this.addNumList.splice(idx, 1);
    },
    cancel() {
      this.visible = false;
      this.addTagData = "";
      this.$emit("isVisible", false);
    },
    close(){
      this.visible = false;
      this.$emit("isVisible", false);
    }
  },
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    Url: {
      type: String,
      required: true,
    },
    State: {
      type: Boolean,
      default: false,
    },
    Ip: {
      type: String,
      required: true,
    },
    docSrc: {
      type: String,
      required: true,
    },
    idx: {
      type: Number,
      required: true,
    },
    isvisible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  padding: 10px 0;
  // min-width: 900px;
  // max-width: 900px;
  .el-card {
    .avatar {
      height: 80px;
      width: 80px;
      padding-right: 40px;
    }
    .content {
      width: calc(100% - 80px);
      height: 100%;
      .msg {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 50px 20px 0;
        .url {
          display: flex;
          align-items: center;
          i {
            font-size: 20px;
            color: #a9abac;
            font-weight: bold;
            padding-right: 10px;
          }
          span {
            color: #00b4cf;
            font-size: 14px;
            font-weight: bold;
          }
        }
        .state {
          .el-tag {
            color: #fff;
            border-radius: 0;
          }
        }
        .ip {
          display: flex;
          align-items: center;
          i {
            font-size: 20px;
            color: #a9abac;
            font-weight: bold;
            padding-right: 5px;
          }
          span {
            font-size: 14px;
          }
        }
        .doc {
          display: flex;
          align-items: center;
          i {
            font-size: 20px;
            color: #a9abac;
            font-weight: bold;
            padding-right: 5px;
          }
          span {
            font-size: 14px;
          }
        }
      }
      .tag {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .addTag {
          max-height: 30px;
          overflow: hidden;
          .el-button {
            background-color: #00b4cf;
          }
          .el-icon-plus {
            font: 16px;
            color: #fff;
            font-weight: bold;
          }
          .Tag {
            .el-tag {
              color: #000;
              background-color: #efefef !important;
              border-radius: 0;
              height: 25.5px;
              line-height: 25.5px;
              margin-left: 10px;
              margin-bottom: 10px;
            }
          }
        }
        .deny {
          .el-button {
            // height:30px;
            width: 80px;
            padding: 6px;
            font: 14px;
            border-radius: 0;
            background-color: #00b4cf;
            color: #fff;
            i {
              font-size: 4px;
              font-weight: bold;
              padding-right: 10px;
            }
          }
        }
      }
    }
  }
}
::v-deep.el-dialog__wrapper {
  .el-dialog {
    .el-dialog__header {
      padding: 0;
      .el-dialog__headerbtn {
        i {
          color: #00b4cf;
          font-weight: bold;
        }
      }
    }
  }
}
::v-deep .el-input__inner {
  background-color: #fff !important;
}
</style>