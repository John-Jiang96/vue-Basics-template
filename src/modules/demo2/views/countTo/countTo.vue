<template>
  <div class="countTo">
    <countTo
      class="countTo-color"
      ref="countTo"
      :startVal="startVal"
      :endVal="endVal"
      :prefix="prefix"
      :suffix="suffix"
      :duration="duration"
      :decimals="2"
    ></countTo>
    <div class="options">
      <div>
        <p>起点数字:</p>
        <el-input type="text" v-model="startVal"></el-input>
      </div>
      <div>
        <p>终点数字:</p>
        <el-input type="text" v-model="endVal"></el-input>
      </div>
      <div>
        <p>持续时间:</p>
        <el-input type="text" v-model="duration"></el-input>
      </div>
    </div>
    100
    <div class="options">
      <div>
        <p>前缀:</p>
        <el-input type="text" v-model="prefix"></el-input>
      </div>
      <div>
        <p>后缀:</p>
        <el-input type="text" v-model="suffix"></el-input>
      </div>
      <div></div>
    </div>
    <el-button type="primary" @click="reset">重置</el-button>
    <el-button type="primary" @click="start">开始</el-button>
    <el-button type="primary" @click="pause">暂停</el-button>
    <el-button type="primary" @click="pauseResume">暂停/回复</el-button>
    <el-button type="primary" @click="goBack">goBack</el-button>
  </div>
</template>
 
<script>
import countTo from "vue-count-to";
export default {
  components: { countTo },
  data() {
    return {
      startVal: 0,
      endVal: 2017,
      duration: 4000,
      prefix: "￥  ",
      suffix: "   RMB",
    };
  },
  methods: {
    reset() {
      this.$refs.countTo.reset();
    },
    start() {
      this.$refs.countTo.start();
    },
    pause() {
      this.$refs.countTo.pause();
    },
    pauseResume() {
      this.$refs.countTo.pauseResume();
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.countTo-color {
  color: red;
  font-size: 18px;
  font-family: 'YouYuan', 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;


}
.options {
  display: flex;
  & > div {
    flex: 1;
  }
}
</style>