<template>
  <div class="personalrecommendation">
    <div class="slideshow">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="(item, index) in slideshow" :key="index">
          <img :src="item.url" style="width: 100%" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="recommendedplaylist">
      <h1>推荐歌单&nbsp;&nbsp;></h1>
      <div>
        <ul>
          <li v-for="(item, index) in playlist" :key="index">
            <div>
              <img :src="item.url" />
            </div>
            <p>{{ item.title }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      slideshow: ref([
        {
          url:
            "http://p1.music.126.net/X_mLGBIqa7jnVDlSYginJw==/109951165817174610.jpg?imageView&quality=89",
        },
        {
          url:
            "http://p1.music.126.net/ibtaj2r-dXmWZPpmWiVg1Q==/109951165817189341.jpg?imageView&quality=89",
        },
        {
          url:
            "http://p1.music.126.net/HORZk9YCTEYe8otrfaGtiQ==/109951165814512017.jpg?imageView&quality=89",
        },
        {
          url:
            "http://p1.music.126.net/BgTkscO0e4PKTomVML387g==/109951165817964881.jpg?imageView&quality=89",
        },
        {
          url:
            "http://p1.music.126.net/FPOBLCO0FkMXW80U198ySw==/109951165817131460.jpg?imageView&quality=89",
        },
        {
          url:
            "http://p1.music.126.net/gB5k-jSfmjIrfB9Yu9RJkw==/109951165818685425.jpg?imageView&quality=89",
        },
      ]),
      playlist: ref([
        {
          url:
            "http://p2.music.126.net/R8-2uxFR0tm98mtsop6OqA==/109951165817934520.jpg?param=140y140",
          title: "[一周新歌推荐] Afgan&王嘉尔全新合作单曲表达爱与忠诚",
        },
        {
          url:
            "http://p2.music.126.net/Hods7Wfyz34tXxJXyhRnQQ==/109951165613159399.jpg?param=140y140",
          title: "R&B|温柔的转音，诉一剂良药",
        },
        {
          url:
            "http://p2.music.126.net/fob5pHV3xzGlJ_-KEeLFLg==/109951165693966983.jpg?param=140y140",
          title: "我想你了 其实我也很脆弱",
        },
        {
          url:
            "http://p2.music.126.net/Z6YN3Yh22zy09fhVHas2-A==/109951165813235804.jpg?param=140y140",
          title: "162期 - 异地·十年·爱情故事",
        },
        {
          url:
            "http://p2.music.126.net/Xvo6PwBcdOA69ipcpV9YYg==/109951165463253777.jpg?param=140y140",
          title: "你数数 这是你第几次丢下我",
        },
        {
          url:
            "http://p2.music.126.net/LDLsMd_wwSNCfN5opllLiQ==/109951165788965917.jpg?param=140y140",
          title: "Vol.27 自我认知：你的缺点是什么？",
        },
        {
          url:
            "http://p2.music.126.net/d-YheFNlnNwtNte9XRRT4w==/109951165629802537.jpg?param=140y140",
          title: "欧美快乐系｜想2.5倍速播放最近的日子",
        },
        {
          url:
            "http://p2.music.126.net/CKb98pddkWv_oMWYnQfWdw==/109951165625741590.jpg?param=140y140",
          title: "在心动的期限里无限想你",
        },
        {
          url:
            "http://p4.music.126.net/SA6bW1UlPP04rFB2pj-FvQ==/109951165813403264.jpg?param=140y140",
          title: "可爱摇滚｜一剂抵挡春困的上好良药",
        },
        {
          url:
            "http://p3.music.126.net/8sdYwsOfLA_3ciiuVHo0rQ==/109951165498690725.jpg?param=140y140",
          title: "什么“游戏运营节奏”拿捏了",
        },
      ]),
    };
  },
};
</script>
<style scoped lang="scss">
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.slideshow {
  width: 70%;
  margin: 20px auto;
}
.personalrecommendation {
  height: 700px;
  overflow: auto;
}
.recommendedplaylist {
  width: 70%;
  margin: 0 auto;
  h1 {
    font-size: 20px;
    font-weight: 700;
    color: #666;
    text-align: left;
    cursor: pointer;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    margin-top: 10px;
    li {
      flex: 19%;
      box-sizing: border-box;
      font-size: 14px;
      overflow: hidden;
      margin: 0 10px 10px 0;
      cursor: pointer;
      img {
        width: 100%;
        height: 160px;
        border-radius: 5px;
        margin-bottom: 10px;
      }
      & li:nth-child(5n) {
        margin: 0;
      }
    }
  }
}
</style>