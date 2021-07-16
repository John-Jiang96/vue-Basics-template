<template>
  <div class="logOut">
    <el-dropdown @command="handleCommand">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="userInfo">个人信息</el-dropdown-item>
        <el-dropdown-item command="exitLogo">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dialog title="个人信息" :visible.sync="dialogVisible" width="40%">
      <span>登录状态: {{ isLogin }}</span> |
      <span>登录人名称: {{ name }}</span> |
      <span>登录人密码: {{ num }}</span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("login", ["isLogin", "name", "num"]),
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handleCommand(e) {
      this[e]();
    },
    userInfo() {
      this.dialogVisible = true;
    },
    exitLogo() {
      this.$store.dispatch("resetState").then((ret) => {
        this.$router.push("/login");
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.logOut {
  display: flex;
  align-items: center;
  padding: 0 10px;
}
</style>