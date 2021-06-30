<template>
  <div>
    <ThousandthInputBox v-model="value" />
    <el-button @click="$router.go(-1)">goBack</el-button>
  </div>
</template>

<script>
export default {
  data(){
      return {
          value: ''
      }
  }
};
</script>