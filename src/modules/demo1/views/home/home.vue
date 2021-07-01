<template>
    <div>
        demo1
        {{ new Date() | getDay }}
        <el-button @click="open">echarts</el-button>
        <el-button @click="$router.go(-1)">goBack</el-button>
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