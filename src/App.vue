<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@charset "utf-8";

body {
  width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  font-size: 12px;
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

div,
h1,
h2,
h3,
h4,
h5,
h6,
header,
li,
p,
section,
ul {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "PingFang SC", "Helvetica Neue", Helvetica, "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>