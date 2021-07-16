<template>
  <div class="login">
    <div class="login-info">
      <div class="user-input">
        <el-input autofocus v-model="userName">
          <template slot="prepend">账号</template>
        </el-input>
        <el-input autofocus v-model="passWord">
          <template slot="prepend">密码</template>
        </el-input>
      </div>
    </div>
    <div class="login-button">
      <el-button v-for="page in pages" :key="page.VUE_APP_TITLE" @click="login(page.VUE_APP_SYSTEM_HOME_URL)">{{ page.VUE_APP_TITLE }}</el-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      userName: "",
      passWord: "",
      pages: {}
    };
  },
  computed: {
    ...mapGetters("login", ["name", "num"]),
  },
  methods: {
    ...mapActions("login", ["setName", "setNum", "setLogin"]),
    login(home) {
      let { userName, passWord } = this;
      if (!userName || !passWord) {
        this.$message.warning("缺少字段");
        return;
      }
      this.setName(userName);
      this.setNum(passWord);
      this.setLogin(true);
      console.log(home);
      // this.$router.push({ path: this.$config.home });
      window.location.href = home
    },
  },
  mounted() {
    this.pages = API_CONFIG
    this.userName = this.name;
    this.passWord = this.num;
  },
};
</script>

<style lang="scss" scoped>
.login {
  .login-info {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .login-button {
    display: flex;
    justify-content: center;
  }
}
</style>