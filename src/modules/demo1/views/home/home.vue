<template>
  <div class="demo-home">
    <p>这是demo1的项目</p>
    <p>
      <span>当前登录人是: {{ name }}</span> |
      <span>当前登录密码是: {{ num }}</span>
    </p>
    <br />
    <el-button @click="save">给demo1添加状态(刷新会丢失)</el-button>
    <p>
      <span>demo1是: {{ demo1Name }}</span> |
      <span>demo1是: {{ demo1Num }}</span>
    </p>
    <el-button @click="open('echarts')">进入echart 示例</el-button>
    <el-button @click="$router.go(-1)">返回上一页</el-button>
    <el-button @click="open('antv')">进入antv 示例</el-button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters: demo1Getters, mapActions: demo1Actions } =
  createNamespacedHelpers("demo1");
const { mapGetters: loginGetters } = createNamespacedHelpers("login");
export default {
  computed: {
    ...demo1Getters({
      demo1Name: "name",
      demo1Num: "num",
    }),
    ...loginGetters(["name", "num"]),
  },
  methods: {
    ...demo1Actions(["setName", "setNum"]),
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