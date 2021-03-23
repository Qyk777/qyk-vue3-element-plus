<template>
  <div class="discovermusic">
    <div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        route
        @select="handleSelect"
      >
        <el-menu-item index="1">个性推荐</el-menu-item>
        <el-menu-item index="2">歌单</el-menu-item>
        <el-menu-item index="3">主播电台</el-menu-item>
        <el-menu-item index="4">排行榜</el-menu-item>
        <el-menu-item index="5">歌手</el-menu-item>
        <el-menu-item index="6">最新音乐</el-menu-item>
      </el-menu>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      activeIndex: ref("1"),
    };
  },
  watch: {
    $route(to) {
      this.activeIndex = to.meta.index;
    },
  },
  methods: {
    handleSelect(val) {
      if (val === "1") this.$router.push({ name: "Personalrecommendation" });
      if (val === "2") this.$router.push({ name: "songList" });
      if (val === "3") this.$router.push({ name: "Anchorstation" });
      if (val === "4") this.$router.push({ name: "Leaderboard" });
      if (val === "5") this.$router.push({ name: "singer" });
      if (val === "6") this.$router.push({ name: "Latestmusic" });
    },
  },
};
</script>
<style scoped lang="scss">
</style>