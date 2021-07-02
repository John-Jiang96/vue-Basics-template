<template>
  <div class="demo-home">
    <p>这是demo2的项目</p>
    <p>
      <span>当前登录人是: {{ name }}</span> |
      <span>当前登录密码是: {{ num }}</span>
    </p>
    <br />
    <el-button @click="save">给demo2添加状态(刷新会丢失)</el-button>
    <p>
      <span>demo2是: {{ demo2Name }}</span> |
      <span>demo2是: {{ demo2Num }}</span>
    </p>
    <el-button @click="open('inputForm')">进入自定义组件 示例</el-button>
    <el-button @click="$router.go(-1)">返回上一页</el-button>
    <el-button @click="open('countTo')">进入数字滚动 示例</el-button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters: demo2Getters, mapActions: demo2Actions } =
  createNamespacedHelpers("demo2");
const { mapGetters: loginGetters } = createNamespacedHelpers("login");
export default {
  computed: {
    ...demo2Getters({
      demo2Name: "name",
      demo2Num: "num",
    }),
    ...loginGetters(["name", "num"]),
  },
  methods: {
    ...demo2Actions(["setName", "setNum"]),
    save() {
      this.setName("测试");
      this.setNum(123);
    },
    open(path) {
      this.$router.push({ path });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>