<template>
  <div>
    <div>
      <p>千分位数字框</p>
      <ThousandthInputBox v-model="value" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'inputForm',
  data() {
    return {
      value: "",
    };
  },
};
</script>