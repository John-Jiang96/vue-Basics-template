<template>
  <div>
    <p>下面是组件</p>
    <children-a>
      <template slot-scope="scope">
        {{ scope }}
        <p>设置内容</p>
      </template>
      <p slot="nameA">具名插槽nameA</p>
    </children-a>
  </div>
</template>

<script>
import childrenA from "./children/a.vue";
export default {
  name: "slotTemplate",
  components: { childrenA },
};
</script>