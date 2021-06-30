<template>
  <div>
    <ThousandthInputBox v-model="value" />
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