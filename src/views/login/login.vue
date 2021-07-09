<template>
  <div class="login">
    <p>登录</p>
    <p>
      <span>登录状态: {{ isLogin }}</span> |
      <span>登录人名称: {{ name }}</span> |
      <span>登录人密码: {{ num }}</span>
    </p>
    <p class="login-info">
      <el-input autofocus v-model="userName">
        <template slot="prepend">账号</template>
      </el-input>
      <el-input autofocus v-model="passWord">
        <template slot="prepend">密码</template>
      </el-input>
    </p>
    <div class="login-button">
      <el-button @click="login">登录</el-button> <br />
      <el-button @click="exitLogo">退出登录</el-button> <br />
    </div>
    <a href="demo1/demo1Home">去demo1</a> |
    <a href="demo2/demo2Home">去demo2</a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      userName: "",
      passWord: "",
    };
  },
  computed: {
    ...mapGetters("login", ["isLogin", "name", "num"]),
  },
  methods: {
    ...mapActions("login", ["setName", "setNum", "setLogin"]),
    login() {
      let { userName, passWord } = this;
      if (!userName || !passWord) {
        this.$message.warning("缺少字段");
        return;
      }
      this.setName(userName);
      this.setNum(passWord);
      this.setLogin(true);
    },
    exitLogo() {
      this.$store.dispatch("resetState").then((ret) => {
        this.$router.push("/login");
      });
    },
  },
  mounted() {
    this.userName = this.name;
    this.passWord = this.num;
  },
};
</script>

<style lang="scss" scoped>
.login {
  .login-info {
    width: 350px;
    margin: 0 auto;
  }
  .login-button {
    display: flex;
    justify-content: center;
  }
}
</style>