<template>
  <div class="choose-theme">
    <el-popover
      placement="bottom"
      trigger="click"
      popper-class="theme-pop"
      v-if="showTheme"
    >
      <el-divider content-position="left"
        ><i class="el-icon-star-off"></i>主题色</el-divider
      >
      <ul class="theme-list">
        <li
          v-for="(item, index) in themeList"
          :key="index"
          :style="{ background: item.color }"
          :class="{ active: item.active }"
          @click="changeTheme(item)"
        >
          <i :class="item.active ? 'el-icon-star-on' : 'el-icon-star-off'"></i>
          <p>{{ item.label }}</p>
          <p>{{ item.navDefaultColor }}</p>
        </li>
      </ul>

      <el-tooltip
        content="主题"
        placement="bottom"
        effect="light"
        slot="reference"
      >
        <i class="el-icon-wind-power"></i>
      </el-tooltip>
    </el-popover>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
const ORIGINAL_THEME = "#409EFF";

export default {
  name: "chooseTheme",
  data() {
    return {
      chalk: "", // content of theme-chalk css
      themeList: [
        {
          label: "默认",
          color: "#c00000",
          value: "theme6",
          active: true,
          navDefaultColor: "#c00000",
          navActiveColor: "#990101",
          colorActive: "#c00000",
          colorHover: "#c000001a",
        },
        {
          label: "深蓝",
          color: "#1364b6",
          value: "theme0", // element ui primary color
          active: false,
          navDefaultColor: "#0c3f72", // 导航栏默认色
          navActiveColor: "#042b52", // 导航栏选中
          colorActive: "#1989FA", // 次主色触发
          colorHover: "#e7f0f8",
        },

        {
          label: "蓝",
          color: "#178fff",
          value: "theme1",
          active: false,
          navDefaultColor: "#0061c6",
          navActiveColor: "#053f86",
          colorActive: "#47a2ff",
          colorHover: "#e8f4ff",
        },
        {
          label: "青",
          color: "#12c2c2",
          value: "theme3",
          active: false,
          navDefaultColor: "#048282",
          navActiveColor: "#005555",
          colorActive: "#00dbdb",
          colorHover: "#e7f9f9",
        },
        {
          label: "橙",
          color: "#fbab0a",
          value: "theme2",
          active: false,
          navDefaultColor: "#ca6904",
          navActiveColor: "#8a4205",
          colorActive: "#ff8f06",
          colorHover: "#fff7e7",
        },
      ],
      showTheme: _.get(Vue.$config, "theme", true),
    };
  },
  computed: {
    ...mapGetters("login", ["themeColor"]),
    customBg() {
      let classNames = Vue.$config.customBg;

      return (color) => {
        if (classNames.length) {
          return `${Vue.$config.customBg.join(
            ","
          )} { background: ${color} !important }`;
        } else {
          return "";
        }
      };
    },
    customColor() {
      let classNames = Vue.$config.customColor;

      return (color) => {
        if (classNames.length) {
          return `${Vue.$config.customColor.join(
            ","
          )} { color: ${color} !important }`;
        } else {
          return "";
        }
      };
    },
    removeCustom() {
      return (color) => {
        return `.el-tabs__item.is-active`;
      };
    },
  },
  created() {
    let curTheme = _.isEmpty(this.themeColor)
      ? this.themeList[0]
      : this.themeColor;
    this.changeTheme(curTheme);
  },
  methods: {
    ...mapMutations("login", ["setThemeColor"]),
    changeTheme(item) {
      let oldVal = _.find(this.themeList, { active: true }).color;
      let val = item.color;

      const themeCluster = this.getThemeCluster(val.replace("#", ""));
      const originalCluster = this.getThemeCluster(oldVal.replace("#", ""));
      const getHandler = (variable, id) => {
        return () => {
          const originalCluster = this.getThemeCluster(
            ORIGINAL_THEME.replace("#", "")
          );
          const newStyle = this.updateStyle(
            this[variable],
            originalCluster,
            themeCluster
          );
          let styleTag = document.getElementById(id);
          if (!styleTag) {
            styleTag = document.createElement("style");
            styleTag.setAttribute("id", id);
            document.head.appendChild(styleTag);
          }
          let concat = newStyle + this.customBg(val) + this.customColor(val);

          this.setActiiveThemeColor(item);
          styleTag.innerText = concat;
        };
      };

      const chalkHandler = getHandler("chalk", "chalk-style");

      if (!this.chalk) {
        const url = `https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.0/theme-chalk/index.css`;
        this.getCSSString(url, chalkHandler, "chalk");
      } else {
        chalkHandler();
      }

      const styles = [].slice
        .call(document.querySelectorAll("style"))
        .filter((style) => {
          const text = style.innerText;
          return (
            new RegExp(oldVal, "i").test(text) && !/Chalk Variables/.test(text)
          );
        });
      styles.forEach((style) => {
        const { innerText } = style;
        if (typeof innerText !== "string") {
          return;
        }
        style.innerText = this.updateStyle(
          innerText,
          originalCluster,
          themeCluster
        );
      });

      this.themeList.forEach((child) => {
        child.active = child.label === item.label;
      });

      this.setThemeColor(item);
    },

    setActiiveThemeColor(item) {
      let $body = document.getElementsByTagName("body")[0];
      $body.style.setProperty("--theme-color", item.color);
      $body.style.setProperty("--nav-color", item.navDefaultColor);
      $body.style.setProperty("--nav-active-color", item.navActiveColor);
      $body.style.setProperty("--theme-active-color", item.colorActive);
      $body.style.setProperty("--theme-hover-color", item.colorHover);
    },
    updateStyle(style, oldCluster, newCluster) {
      let newStyle = style;
      oldCluster.forEach((color, index) => {
        newStyle = newStyle.replace(new RegExp(color, "ig"), newCluster[index]);
      });
      return newStyle;
    },

    getCSSString(url, callback, variable) {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          this[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, "");
          callback();
        }
      };
      xhr.open("GET", url);
      xhr.send();
    },
    getThemeCluster(theme) {
      const tintColor = (color, tint) => {
        let red = parseInt(color.slice(0, 2), 16);
        let green = parseInt(color.slice(2, 4), 16);
        let blue = parseInt(color.slice(4, 6), 16);

        if (tint === 0) {
          // when primary color is in its rgb space
          return [red, green, blue].join(",");
        } else {
          red += Math.round(tint * (255 - red));
          green += Math.round(tint * (255 - green));
          blue += Math.round(tint * (255 - blue));

          red = red.toString(16);
          green = green.toString(16);
          blue = blue.toString(16);

          return `#${red}${green}${blue}`;
        }
      };

      const shadeColor = (color, shade) => {
        let red = parseInt(color.slice(0, 2), 16);
        let green = parseInt(color.slice(2, 4), 16);
        let blue = parseInt(color.slice(4, 6), 16);

        red = Math.round((1 - shade) * red);
        green = Math.round((1 - shade) * green);
        blue = Math.round((1 - shade) * blue);

        red = red.toString(16);
        green = green.toString(16);
        blue = blue.toString(16);

        return `#${red}${green}${blue}`;
      };

      const clusters = [theme];
      for (let i = 0; i <= 9; i++) {
        clusters.push(tintColor(theme, Number((i / 10).toFixed(2))));
      }
      clusters.push(shadeColor(theme, 0.1));
      return clusters;
    },
  },
};
</script>

<style lang="scss" scoped>
.choose-theme {
  margin-right: 10px;
  display: flex;
  cursor: pointer;

  .icon-rz-theme {
    color: #fff;
    font-size: 20px;
    display: flex;
  }
}

.theme-list {
  li {
    width: 52px;
    color: #fff;
    float: left;
    margin: 0 5px;
    border-radius: 5px;
    font-size: 12px;
    padding: 5px 10px;
    cursor: pointer;
    position: relative;

    .el-icon-success {
      position: absolute;
      right: 5px;
      top: 5px;
    }
  }
}

.theme-pop {
  .icon-rz-theme {
    vertical-align: top;
    margin-right: 5px;
  }
}
</style>
