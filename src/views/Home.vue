<template>
  <div
    v-waterMarker="{
      text: 'lzg版权所有',
      textColor: 'rgba(180, 180, 180, 0.4)',
    }"
    class="home"
  >
    <TableBody />
    <input v-model="value" type="text" v-focus />
    {{ 123123 | format }}
    <ThousandthInputBox v-model="value" />
    <el-button v-copy="value">复制</el-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      value: "1",
    };
  },
};
</script>
