<template>
  <div>
    <p>下面是组件</p>
    <children-a>
      <p>设置内容</p>
      <p slot="nameA">具名插槽nameA</p>
    </children-a>
    <el-button @click="$router.go(-1)">返回</el-button>
  </div>
</template>

<script>
import childrenA from "./children/a.vue";
export default {
  name: "slotTemplate",
  components: { childrenA },
};
</script>