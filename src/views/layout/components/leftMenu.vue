<template>
  <div>
    <div v-if="isShowLeftMenu" class="scrollbar-wrapper" :style="style">
      <el-menu
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @select="handleSelect"
        :default-active="leftActiveMenu"
        :collapse-transition="false"
        mode="vertical"
      >
        <el-menu-item
          :index="index"
          v-for="(item, index) of currentMenus.children"
          :key="index"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "leftMenu",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("menus", ["isCollapse", "currentMenus", "leftActiveMenu"]),
    style() {
      const width = !this.isCollapse ? "170px" : "64px";
      return {
        width,
      };
    },
    isShowLeftMenu() {
      if (this.currentMenus && this.currentMenus.children) {
        return true;
      }
      return false;
    },
  },
  methods: {
    ...mapActions("menus", ["setLeftActiveMenu"]),
    handleSelect(index) {
      this.setLeftActiveMenu(index);
      this.$router.push(this.currentMenus.children[index].path);
    },
  },
};
</script>
<style lang="scss">
.scrollbar-wrapper {
  overflow: hidden auto;
  transition: width 0.2s;
  height: calc(100vh - 60px);
  float: left;
  background: #fff;
  box-shadow: 2px 0px 7px 0px rgba(48, 48, 82, 0.1);
  /deep/.el-menu-item {
    padding-left: 12px;
  }

  .el-menu-item,
  .el-submenu {
    min-width: auto !important;
    img {
      width: 18px;
      height: 18px;
      margin-right: 8px;
    }
  }

  .el-menu-item:focus {
    background: #fff !important;
  }
}
</style>