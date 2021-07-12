<template>
  <div class="layout">
    <div class="topHeader">
      <div class="tool-config">title</div>
      <topMenus />
      <div class="tool-config">
        <themeColor />
        <screenful />
      </div>
    </div>
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="keepAlive">
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>
<script>
import topMenus from "./components/topMenus.vue";
import themeColor from "../themeColor/themeColor.vue";
import screenful from "../screenful/screenful.vue";
export default {
  components: { themeColor, screenful, topMenus },
  data() {
    return {
      keepAlive: ["inputForm"],
    };
  },
  watch: {
    $route(to, from) {},
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/transition.scss";
@import "~@//views/layout/layout.scss";
</style>