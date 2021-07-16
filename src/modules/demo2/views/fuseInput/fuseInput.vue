<template>
  <div class="hello">
    <el-input v-model="title" placeholder="请输入内容"></el-input>
    <ul>
      <li v-for="item in result" :key="item">
        标题： {{ item.item.title }}
        <br />
        作者： {{ item.item.author.firstName }}
        <br />
        分数： {{ item.score }}
      </li>
    </ul>
  </div>
</template>

<script>
// 1. 引入Fuse
import Fuse from "fuse.js";
export default {
  data() {
    const info = this;
    const ceshi = {
      callback: () => {
        console.log(this);
        console.log(info);
      },
    };
    return {
      title: "",
      fuse: null,
      result: [],
      ceshi,
      books: [
        {
          title: "Java虚拟机",
          author: {
            firstName: "王浩",
            lastName: "wanghao",
          },
        },
        {
          title: "人工智能",
          author: {
            firstName: "侯建军",
            lastName: "marquis",
          },
        },
      ],
    };
  },
  created() {
    // 2. 初始化
    this.init();
    this.ceshi.callback();
  },
  watch: {
    // 要变量名一致
    title(newName, oldName) {
      // 3. 搜索内容
      this.result = this.fuse.search(newName);
    },
  },
  methods: {
    // 初始化
    init() {
      var options = {
        shouldSort: true, // 是否按分数对结果列表排序
        includeScore: true, //  是否应将分数包含在结果集中。0分表示完全匹配，1分表示完全不匹配。
        threshold: 0.6, // 匹配算法阈值。阈值为0.0需要完全匹配（字母和位置），阈值为1.0将匹配任何内容。
        /**
         * 确定匹配与模糊位置（由位置指定）的距离。一个精确的字母匹配，即距离模糊位置很远的字符将被视为完全不匹配。
         *  距离为0要求匹配位于指定的准确位置，距离为1000则要求完全匹配位于使用阈值0.8找到的位置的800个字符以内。
         */
        location: 0, // 确定文本中预期找到的模式的大致位置。
        distance: 100,
        maxPatternLength: 32, // 模式的最大长度
        minMatchCharLength: 1, // 模式的最小字符长度
        // 搜索标题与作者名
        keys: ["title", "author.firstName"],
      };
      // 设置数据与参数
      this.fuse = new Fuse(this.books, options);
    },
  },
};
</script>