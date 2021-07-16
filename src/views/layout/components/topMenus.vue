<template>
  <div class="top-menu-wrap">
    <i
      v-if="
        currentMenus && currentMenus.children && currentMenus.children.length
      "
      class="isCollapse-icon"
      @click="setIsCollapse(!isCollapse)"
      :class="!isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
    ></i>
    <el-menu
      :default-active="activeTopMenu"
      class="topMenu"
      mode="horizontal"
      @select="handleSelect"
      text-color="#fff"
    >
      <el-menu-item
        class="top-menu-item"
        v-for="(item, index) of menuList"
        :key="index"
        :index="index"
        v-show="index < hideMenusIndex || hideMenusIndex === -1"
        >{{ item.meta.title }}</el-menu-item
      >
    </el-menu>

    <el-dropdown
      class="more-menu"
      :style="{ visibility: hideMenusIndex > -1 ? 'visible' : 'hidden' }"
      @command="
        (item) => {
          handleSelect;
        }
      "
    >
      <span class="el-dropdown-link">
        更多<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="(hideItem, index) in menuList"
          :key="hideItem.id"
          :command="hideItem"
          v-show="index >= hideMenusIndex"
        >
          {{ hideItem.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "topMenus",
  data() {
    return {
      hideMenusIndex: -1,
      menuList: [],
    };
  },
  watch: {
    $route(to, from) {
      this.handleToggleMenu();
    },
  },
  computed: {
    ...mapGetters("menus", ["isCollapse", "currentMenus", "activeTopMenu"]),
  },
  methods: {
    ...mapActions("menus", [
      "setCurrentMenus",
      "setIsCollapse",
      "setActiveTopMenu",
      "setLeftActiveMenu",
    ]),
    handleSelect(index) {
      if (
        this.menuList[index].children &&
        this.menuList[index].children.length
      ) {
        this.$router.push(this.menuList[index].children[0].path);
      } else {
        this.$router.push(this.menuList[index].path);
      }
      this.setCurrentMenus(this.menuList[index]);
      this.setActiveTopMenu(index);
      this.setLeftActiveMenu(0);
    },
    handleToggleMenu() {
      this.hideMenusIndex = -1;
      this.$nextTick(() => {
        let $menuItem = document.querySelectorAll(".top-menu-item");
        $menuItem.forEach((item, index) => {
          if (item.offsetTop > 0 && this.hideMenusIndex === -1) {
            this.hideMenusIndex = index;
            return;
          }
        });
      });
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleToggleMenu);
    let list = require(`@/modules/${window.rdpModule}/views`);
    this.menuList = list.default;
    this.setCurrentMenus(this.menuList[this.activeTopMenu]);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleToggleMenu);
  },
};
</script>

<style lang="scss">
.top-menu-wrap {
  width: 100%;
  display: flex;
  align-items: center;
  .isCollapse-icon {
    font-size: 24px;
    cursor: pointer;
  }
  .topMenu {
    &.el-menu {
      flex: 1;
      overflow: auto hidden;
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
      padding-left: 20px;
      border: none;
      overflow: hidden;
      height: 100%;
      background: transparent;

      li.el-menu-item {
        border: none;
        padding: 0 14px;
        display: flex;
        align-items: center;
        height: 100%;
        line-height: 100%;

        &:hover {
          background-color: rgba(255, 255, 255, 0.22) !important;
        }

        &.is-active {
          border: none;
          color: #fff;
          background: var(--nav-active-color) !important;
        }
      }
    }

    .el-icon-arrow-down {
      color: #fff;
    }
  }

  .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
  .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
    background-color: rgba(255, 255, 255, 0.22) !important;
  }
}

.more-menu {
  line-height: 100%;
  color: #fff !important;
  padding: 0 10px;
  width: 70px;
  display: flex !important;
  align-items: center;
  cursor: pointer;
}
</style>
