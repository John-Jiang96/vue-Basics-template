<template>
  <div>demo2
      <el-button @click="open">inputForm</el-button>
      <el-button @click="$router.go(-1)">goBack</el-button>
      <p v-copy="text">点击我复制文字: {{ text }}</p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            text: '一段文字'
        }
    },
    methods: {
        open(){
            this.$router.push({ path: 'inputForm' })
        }
    },
};
</script>