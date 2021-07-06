<template>
  <div class="layout">
    <div class="topHeader">
      <p>我是layout 组件,可以在我这边定义全局的导航等</p>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.topHeader {
  width: 100%;
  background-color: #e3e3e3;
}
</style>