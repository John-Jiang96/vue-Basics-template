<template>
  <div class="layout">
    <div class="topHeader">
      <div class="title">
        <span>{{ $config.projectName }}</span>
      </div>
      <topMenus />
      <div class="tool-config">
        <themeColor v-if="$config.leftMenu" />
        <screenful v-if="$config.theme" />
        <logOut />
      </div>
    </div>
    <div class="content">
      <leftMenu />
      <div class="view-container">
        <transition name="fade-transform" mode="out-in">
          <keep-alive :include="keepAlive">
            <router-view />
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import topMenus from "./components/topMenus.vue";
import leftMenu from "./components/leftMenu.vue";
import themeColor from "../themeColor/themeColor.vue";
import screenful from "../screenful/screenful.vue";
import logOut from "../logOut/logOut.vue";
export default {
  components: { themeColor, screenful, topMenus, leftMenu, logOut },
  data() {
    return {
      keepAlive: [],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/transition.scss";
@import "~@//views/layout/layout.scss";
</style>