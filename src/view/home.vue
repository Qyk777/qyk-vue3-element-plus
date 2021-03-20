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
                  <div class="round left">
                    <span class="iconfont icon-arrow-left-bold"></span>
                  </div>
                </div>
                <!-- 右箭头 -->
                <div>
                  <div class="round right">
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
            <div class="userimg">
              <el-avatar
                :size="size"
                style="margin: 0 10px 0 10px; vertical-align: middle"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
              <span>未登录</span>
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
            <ul>
              <li>发现音乐</li>
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
              <li>我喜欢的音乐</li>
            </ul>
          </el-aside>
          <!-- 内容 -->
          <el-main>Main</el-main>
        </el-container>
        <!-- 底部 -->
        <el-footer height="120px">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      searchinput: ref(""),
    };
  },
};
</script>
<style scoped lang="scss">
.el-header,
.el-footer {
  padding: 0;
  background-color: rgba($color: #ec4141, $alpha: 0.8);
  text-align: center;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.home {
  min-width: 1100px !important; //限制页面大小
  .box {
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
  }
}
</style>