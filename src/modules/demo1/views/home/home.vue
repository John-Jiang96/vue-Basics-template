<template>
  <div>
    <br />
    {{ name | ceshi }} {{ num | ceshi2 }}
    <br />
    {{ new Date() | getDay }}
    <el-button @click="save">添加vuex</el-button>
    <el-button @click="open">open</el-button>
    <el-button @click="$router.go(-1)">goBack</el-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("demo1", ["name", "num"]),
  },
  methods: {
    ...mapActions("demo1", ["setName", "setNum"]),
    save() {
      this.setName("测试");
      this.setNum(123);
    },
    open() {
      this.$router.push({ path: "echarts" });
    },
  },
  mounted(){
    console.log(Vue.filter('ceshi'));
  }
};
</script>