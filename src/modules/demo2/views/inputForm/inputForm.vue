<template>
  <div>
    <div>
      <p>千分位数字框</p>
      <ThousandthInputBox v-model="value" />
    </div>
    <el-button @click="$router.go(-1)">goBack</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>