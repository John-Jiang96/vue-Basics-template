<template>
  <div>demo2
      <el-button @click="open">inputForm</el-button>
  </div>
</template>

<script>
export default {
    methods: {
        open(){
            this.$router.push({ path: 'inputForm' })
        }
    },
};
</script>