<template>
  <div>
    全局登录页 <br />
    <el-button @click="$cookies.set('isLogin', true)">isLogin</el-button> <br />
    <a href="demo1/demo1Home">demo1</a> <br />
    <a href="demo2/demo2Home">demo2</a> <br />
  </div>
</template>