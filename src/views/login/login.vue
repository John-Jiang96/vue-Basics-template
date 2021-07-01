<template>
  <div>
    全局登录页 {{ isLogin }} {{ name }} {{ num }}<br />
    <el-button @click="login">isLogin</el-button> <br />
    <el-button @click="exitLogo">退出登录</el-button> <br />
    <a href="demo1/demo1Home">demo1</a> <br />
    <a href="demo2/demo2Home">demo2</a> <br />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("login", ["isLogin", "name", "num"]),
  },
  methods: {
    ...mapActions("login", ["setName", "setNum", "setLogin"]),
    login() {
      this.setLogin(true);
      this.setName(window.rdpModule);
      this.setNum(parseFloat(Math.random() * 100));
    },
    exitLogo() {
      this.$store.dispatch("resetState").then((ret) => {
        this.$router.push("/login");
      });
    },
  },
};
</script>