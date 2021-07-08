<template>
  <div>
    <div>
      <h3>场景1 横向</h3>
      <draggable
        v-model="myArray"
        chosenClass="chosen"
        forceFallback="true"
        group="people"
        animation="500"
        @start="onStart"
        @end="onEnd"
      >
        <transition-group>
          <div class="item" v-for="element in myArray" :key="element.id">
            {{ element.name }}
          </div>
        </transition-group>
      </draggable>
    </div>
    <div>
      <h3>场景2 纵向</h3>
      <draggable
        v-model="myArray"
        chosenClass="chosen"
        forceFallback="true"
        group="people"
        animation="500"
        @start="onStart"
        @end="onEnd"
      >
        <transition-group>
          <div class="item2" v-for="element in myArray" :key="element.id">
            {{ element.name }}
          </div>
        </transition-group>
      </draggable>
    </div>
    <div>
      <h3>场景3 多列</h3>
      <div class="itxst">
        <div class="col">
          <div class="title">国内网站</div>
          <draggable
            v-model="arr1"
            group="site"
            animation="300"
            dragClass="dragClass"
            ghostClass="ghostClass"
            handle=".move"
            chosenClass="chosenClass"
            @start="onStart"
            @end="onEnd"
          >
            <transition-group>
              <div class="item" v-for="item in arr1" :key="item.id">
                <span class="move">
                  {{ item.name }}
                </span>
                <span>123</span>
              </div>
            </transition-group>
          </draggable>
        </div>
        <div class="col">
          <div class="title">你可以把左边的元素拖到右边</div>
          <draggable
            v-model="arr2"
            group="site"
            animation="300"
            dragClass="dragClass"
            ghostClass="ghostClass"
            chosenClass="chosenClass"
            @start="onStart"
            @end="onEnd"
          >
            <transition-group>
              <div class="item" v-for="item in arr2" :key="item.id">
                {{ item.name }}
              </div>
            </transition-group>
          </draggable>
        </div>
      </div>
    </div>
    <el-button @click="goBack">返回</el-button>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "cDraggable",
  components: {
    draggable,
  },
  data() {
    return {
      drag: false,
      myArray: [
        { people: "cn", id: 10, name: "www.itxst.com" },
        { people: "cn", id: 20, name: "www.baidu.com" },
        { people: "cn", id: 30, name: "www.taobao.com" },
        { people: "us", id: 40, name: "www.yahoo.com" },
      ],
      //定义要被拖拽对象的数组
      arr1: [
        { id: 1, name: "www.itxst.com" },
        { id: 2, name: "www.jd.com" },
        { id: 3, name: "www.baidu.com" },
        { id: 3, name: "www.taobao.com" },
      ],
      arr2: [
        { id: 1, name: "www.google.com" },
        { id: 2, name: "www.msn.com" },
        { id: 3, name: "www.ebay.com" },
        { id: 4, name: "www.yahoo.com" },
      ],
    };
  },
  methods: {
    //开始拖拽事件
    onStart(e) {
      console.log(e);
      this.drag = true;
    },
    //拖拽结束事件
    onEnd() {
      this.drag = false;
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
/*被拖拽对象的样式*/
.item {
  padding: 6px;
  background-color: #fdfdfd;
  border: solid 1px #eee;
  margin-bottom: 10px;
  cursor: move;
  display: inline-block;
  margin: 0 10px;
}
.item2 {
  padding: 6px;
  background-color: #fdfdfd;
  border: solid 1px #eee;
  margin-bottom: 10px;
  cursor: move;
  margin: 0 10px;
}
/*选中样式*/
.chosen {
  border: solid 1px #3089dc !important;
}
</style>
<style scoped>
/*定义要拖拽元素的样式*/
.ghostClass {
  background-color: blue !important;
}
.chosenClass {
  background-color: red !important;
  opacity: 1 !important;
}
.dragClass {
  background-color: blueviolet !important;
  opacity: 1 !important;
  box-shadow: none !important;
  outline: none !important;
  background-image: none !important;
}
.itxst {
  margin: 10px;
}
.title {
  padding: 6px 12px;
}
.col {
  width: 40%;
  flex: 1;
  padding: 10px;
  border: solid 1px #eee;
  border-radius: 5px;
  float: left;
}
.col + .col {
  margin-left: 10px;
}

.item {
  padding: 6px 12px;
  margin: 0px 10px 0px 10px;
  border: solid 1px #eee;
  background-color: #f1f1f1;
}
.item:hover {
  background-color: #fdfdfd;
  cursor: move;
}
.item + .item {
  border-top: none;
  margin-top: 6px;
}
</style>