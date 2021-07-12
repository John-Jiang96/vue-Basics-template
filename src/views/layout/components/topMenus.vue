<template>
  <div class="top-menu-wrap">
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
        :index="menuList.id"
        v-show="index < hideMenusIndex || hideMenusIndex === -1"
        >{{ item.name }}</el-menu-item
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
export default {
  name: "topMenus",
  data() {
    return {
      activeTopMenu: "0",
      hideMenusIndex: -1,
      menuList: [
        {
          name: "菜单按钮1",
          id: 1,
        },
        {
          name: "菜单按钮2",
          id: 2,
        },
        {
          name: "菜单按钮3",
          id: 3,
        },
      ],
    };
  },
  watch: {
    $route(to, from) {
      this.handleToggleMenu();
    },
  },
  methods: {
    handleSelect() {},
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
