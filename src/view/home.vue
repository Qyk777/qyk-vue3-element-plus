<template>
  <div id="home" class="home" ref="home">
    <el-container class="box">
      <!-- 头部 -->
      <el-header height="80px">
        <div class="titlebox">
          <!-- 左侧 -->
          <div class="leftbox">
            <!-- 芒果logo -->
            <div style="width: 300px; height: 80px">
              <div class="mangobox">
                <svg class="icon mango">
                  <use xlink:href="#icon-mango"></use>
                </svg>
                <span class="logofont">芒果音乐</span>
              </div>
            </div>
            <!-- 搜索栏 -->
            <div class="searchbox">
              <div class="arrow">
                <!-- 左箭头 -->
                <div>
                  <div class="round left" @click="$router.go(-1)">
                    <span class="iconfont icon-arrow-left-bold"></span>
                  </div>
                </div>
                <!-- 右箭头 -->
                <div>
                  <div class="round right" @click="$router.go(+1)">
                    <span class="iconfont icon-arrow-right-bold"></span>
                  </div>
                </div>
              </div>
              <!-- 搜索imput -->
              <div class="searchinput">
                <div class="inputbox">
                  <div style="margin: 0 5px 0 5px">
                    <span class="iconfont icon-search"></span>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="搜索"
                      v-model="searchinput"
                    />
                  </div>
                </div>
              </div>
              <!-- 麦克风 -->
              <div class="maikefeng">
                <svg class="icon icon-maikefeng">
                  <use xlink:href="#icon-maikefeng"></use>
                </svg>
              </div>
            </div>
          </div>
          <!-- 右侧 -->
          <div class="rightbox">
            <div class="userimg" @click="login">
              <el-avatar
                :size="size"
                style="margin: 0 10px 0 10px; vertical-align: middle"
                :src="userImg"
              ></el-avatar>
              <span>{{ userName ? userName : "未登录" }}</span>
            </div>
            <!-- 设置换肤邮件 -->
            <div class="features">
              <div style="margin-top: 20px">
                <span class="iconfont icon-setting"></span>
              </div>
              <div>
                <svg class="icon yifu" aria-hidden="true">
                  <use xlink:href="#icon-yifu-"></use>
                </svg>
              </div>
              <div style="margin-top: 20px">
                <span class="iconfont icon-email"></span>
              </div>
            </div>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-container>
          <!-- 侧边栏 -->
          <el-aside width="300px">
            <div class="aside">
              <ul class="levelone">
                <li @click="$router.push({ name: 'Personalrecommendation' })">
                  发现音乐
                </li>
                <li>视频</li>
                <li>朋友</li>
                <li>直播</li>
                <li>私人FM</li>
              </ul>
              <ul>
                <li>我的音乐</li>
                <li>本地音乐</li>
                <li>下载管理</li>
              </ul>
              <ul>
                <li>创建的歌单</li>
                <li>
                  <div>
                    <span>我喜欢的音乐</span>
                    <svg
                      class="icon"
                      aria-hidden="true"
                      style="width: 30px; height: 30px; margin: 0px 0 0 5px"
                    >
                      <use xlink:href="#icon-aixin"></use>
                    </svg>
                  </div>
                </li>
              </ul>
            </div>
          </el-aside>
          <!-- 子路由内容 -->
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
        <!-- 底部 -->
        <el-footer height="100px">
          <div class="bottombox">
            <!-- 左侧歌曲信息 -->
            <div class="msimg">
              <div class="imgbox">
                <img src="../assets/404.jpg" />
              </div>
              <div>
                <div class="song">
                  <div class="songtitle">
                    <span>星辰大海</span>
                  </div>
                  <div
                    v-show="!like"
                    style="margin-top: 22px; cursor: pointer"
                    @click="like = !like"
                  >
                    <svg class="icon aixin" aria-hidden="true">
                      <use xlink:href="#icon-aixin1"></use>
                    </svg>
                  </div>
                  <div
                    v-show="like"
                    style="margin-top: 22px; cursor: pointer"
                    @click="like = !like"
                  >
                    <svg class="icon aixin" aria-hidden="true">
                      <use xlink:href="#icon-aixin2"></use>
                    </svg>
                  </div>
                </div>
                <p style="text-align: left">黄霄云</p>
              </div>
            </div>
            <!-- 中间播放控制 -->
            <div>
              <div>
                <div class="player">
                  <div>
                    <span class="iconfont icon-shangyiqu"></span>
                  </div>
                  <div
                    v-show="play"
                    style="margin: 0 100px"
                    @click="play = !play"
                  >
                    <span class="iconfont icon-bofang"></span>
                  </div>
                  <div
                    v-show="!play"
                    style="margin: 0 100px"
                    @click="play = !play"
                  >
                    <span class="iconfont icon-zanting"></span>
                  </div>
                  <div>
                    <span class="iconfont icon-xiayiqu"></span>
                  </div>
                </div>
                <div>
                  <el-progress
                    :percentage="100"
                    color="#F4676E"
                    style="width: 600px; margin-left: 50px"
                  >
                    <template #default="{ percentage }">
                      <span class="percentage-value"></span>
                    </template>
                  </el-progress>
                </div>
              </div>
            </div>
            <!-- 右侧音量列表 -->
            <div class="volume">
              <div style="margin-top: 30px">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-iconhuizong_huaban1fuben9"></use>
                </svg>
              </div>
              <div style="margin-top: 45px; margin-left: 10px">
                <el-progress
                  :percentage="100"
                  color="#F4676E"
                  style="width: 160px"
                >
                  <template #default="{ percentage }">
                    <span class="percentage-value"></span>
                  </template>
                </el-progress>
              </div>
              <div style="margin: 30px 20px 20px 0">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-liebiao"></use>
                </svg>
              </div>
            </div>
          </div>
        </el-footer>
      </el-container>
    </el-container>
    <!-- 对话框 -->
    <el-dialog
      title="请输入账号密码"
      v-model="dialogVisible"
      width="20%"
      :before-close="handleClose"
    >
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model.number="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { musicLogin } from "../api/login";
export default {
  setup() {
    return {
      searchinput: ref(""),
      like: ref(false),
      play: ref(false),
      dialogVisible: ref(false),
      loginstatus: ref(false),
    };
  },
  data() {
    return {
      ruleForm: {
        phone: "",
        password: "",
      },
    };
  },
  computed: {
    userName() {
      return this.$store.getters.getuserName; //用户名
    },
    userImg() {
      return this.$store.getters.getuserImg; //用户头像
    },
  },
  methods: {
    //登录点击
    login() {
      if (this.loginstatus) {
        this.open();
      } else {
        this.dialogVisible = true;
      }
    },
    //登录方法
    submitForm() {
      if (
        (this.ruleForm.phone + "").trim() &&
        (this.ruleForm.password + "").trim()
      ) {
        musicLogin(this.ruleForm).then((res) => {
          if (res.code === 200) {
            ElMessage.success({
              message: "登录成功",
              type: "success",
            });
            this.$store.commit("setUser", res);
            this.loginstatus = true;
            this.dialogVisible = false;
          } else {
            ElMessage.error("账号或密码错误");
          }
        });
      } else if (
        !(this.ruleForm.phone + "").trim() &&
        !(this.ruleForm.password + "").trim()
      ) {
        ElMessage.warning({
          message: "账号和密码不能为空",
          type: "warning",
        });
      } else if (!(this.ruleForm.password + "").trim()) {
        ElMessage.warning({
          message: "密码不能为空",
          type: "warning",
        });
      } else if (!(this.ruleForm.phone + "").trim()) {
        ElMessage.warning({
          message: "账号不能为空",
          type: "warning",
        });
      }
    },
    //登出弹窗
    open() {
      this.$confirm("此操作将退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$store.commit("signOut");
          this.$message({
            type: "success",
            message: "退出登录成功!",
          });
          this.loginstatus = false;
        })
        .catch(() => {});
    },
  },
  mounted() {},
};
</script>
<style scoped lang="scss">
.el-header,
.el-footer {
  padding: 0;
  background-color: rgba($color: #f9b338, $alpha: 0.7);
  text-align: center;
}

.el-aside {
  background-color: #fff;
  color: #999;
  text-align: left;
  padding: 20px 20px 0 20px;
  border-right: 1px solid #e1e1e1;
}

.el-main {
  padding: 0;
  background-color: #fff;
  color: #999;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.home {
  height: 100%;
  min-width: 1200px !important; //限制页面大小
  .box {
    height: 100%;
    .titlebox {
      display: flex;
      justify-content: space-between;
      .leftbox {
        display: flex;
        justify-content: space-between;
        .mangobox {
          position: absolute;
          left: 15px;
          top: 15px;
          cursor: pointer;
          .mango {
            width: 50px;
            height: 50px;
          }
          .logofont {
            position: absolute;
            left: 50px;
            top: 15px;
            width: 100px;
            color: #fff;
            font-size: 20px;
            font-weight: 700;
          }
        }
        .searchbox {
          display: flex;
          .arrow {
            display: flex;
            justify-content: space-between;
            .left {
              margin: 18px 12px 0 0;
            }
            .right {
              margin: 18px 20px 0 0;
            }
          }
          .searchinput {
            margin: 22px 15px 0 0;
            .inputbox {
              display: flex;
              width: 200px;
              height: 35px;
              border-radius: 30px;
              padding: 0 0 0 5px;
              line-height: 35px;
              background-color: rgba($color: #000, $alpha: 0.1);
              input {
                outline: none;
                border: none;
                color: #fff;
                background-color: rgba($color: #000, $alpha: 0);
              }
              .icon-search {
                color: #fff;
                font-size: 20px;
              }
            }
          }
          .maikefeng {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background-color: rgba($color: #000, $alpha: 0.1);
            cursor: pointer;
            margin: 17px 0 0 0;
            padding-top: 7px;
            box-sizing: border-box;
          }
          .round {
            padding: 6px;
            border-radius: 50%;
            background-color: rgba($color: #000, $alpha: 0.1);
            cursor: pointer;
          }
          .icon-arrow-left-bold,
          .icon-arrow-right-bold {
            color: #fff;
            font-size: 30px;
          }
          .icon-maikefeng {
            width: 30px;
            height: 30px;
          }
        }
      }
      .rightbox {
        width: 400px;
        display: flex;
        justify-content: flex-start;
        color: #fff;
        .userimg {
          line-height: 80px;
          margin-right: 60px;
          cursor: pointer;
        }
        .features {
          display: flex;
          justify-content: flex-start;
          .iconfont {
            font-size: 40px;
            margin-right: 20px;
            cursor: pointer;
          }
          .yifu {
            width: 40px;
            height: 40px;
            margin: 20px 20px 0 0;
            cursor: pointer;
          }
        }
      }
    }
    .aside {
      font-size: 25px;
      color: #999;
      li {
        padding: 5px;
        margin: 20px 0;
        border-radius: 3px;
        cursor: pointer;
        &:hover {
          background-color: rgba($color: #fcc776, $alpha: 0.6);
        }
      }
    }
    .bottombox {
      display: flex;
      justify-content: space-between;
      .msimg {
        display: flex;
        width: 350px;
        .imgbox {
          width: 60px;
          height: 60px;
          overflow: hidden;
          border-radius: 10%;
          margin: 20px;
        }
        .song {
          display: flex;
          .songtitle {
            margin: 30px 10px 10px 0;
          }
        }
        .aixin {
          width: 30px;
          height: 30px;
        }
      }
      .player {
        display: flex;
        justify-content: center;
        height: 60px;
        margin-top: 15px;
        .iconfont {
          font-size: 40px;
          cursor: pointer;
        }
      }
      .volume {
        display: flex;
        justify-content: flex-end;
        width: 350px;
        .icon {
          width: 40px;
          height: 40px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>