<template>
  <div class="layout">
    <div class="topHeader">
      <p>我是layout 组件,可以在我这边定义全局的导航等</p>
      <div class="tool">
        <themeColor />
        <screenful />
      </div>
    </div>
    <div class="examples">
      <div>
        主题色:
        <div></div>
      </div>
      <div>
        导航栏颜色:
        <div></div>
      </div>
      <div>
        导航栏选中颜色:
        <div></div>
      </div>
      <div>
        第二主题颜色:
        <div></div>
      </div>
      <div>
        第二主题选中颜色:
        <div></div>
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
  background-color: var(--nav-color);
  .tool {
    display: flex;
  }
}
.examples {
  display: flex;
  color: #000;
  & > div:nth-child(1) {
    display: flex;
    flex: 1;
    & > div {
      width: 20px;
      height: 20px;
      background-color: var(--theme-color );
    }
  }
  & > div:nth-child(2) {
    display: flex;
    flex: 1;
    & > div {
      width: 20px;
      height: 20px;
      background-color: var(--nav-color);
    }
  }
  & > div:nth-child(3) {
    display: flex;
    flex: 1;
    & > div {
      width: 20px;
      height: 20px;
      background-color: var(--nav-active-color);
    }
  }
  & > div:nth-child(4) {
    display: flex;
    flex: 1;
    & > div {
      width: 20px;
      height: 20px;
      background-color: var(--theme-active-color);
    }
  }
  & > div:nth-child(5) {
    display: flex;
    flex: 1;
    & > div {
      width: 20px;
      height: 20px;
      background-color: var(--theme-hover-color);
    }
  }
}
</style>