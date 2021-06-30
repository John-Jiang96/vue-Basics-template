<template>
    <div>
        demo1
        <el-button @click="open">echarts</el-button>
    </div>
</template>

<script>
export default {
    methods: {
        open(){
            this.$router.push({ path: 'echarts' })
        }
    }
}
</script>