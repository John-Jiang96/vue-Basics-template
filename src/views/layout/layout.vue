<template>
  <div class="layout">
    <div class="topHeader">
      <p>我是layout 组件,可以在我这边定义全局的导航等</p>
      <div class="tool">
        <themeColor />
        <screenful />
      </div>
    </div>
    <keep-alive :include="keepAlive">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import themeColor from "../themeColor/themeColor.vue";
import screenful from "../screenful/screenful.vue";
export default {
  components: { themeColor, screenful },
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
.topHeader {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e3e3e3;
  .tool {
      display: flex;
  }
}
</style>