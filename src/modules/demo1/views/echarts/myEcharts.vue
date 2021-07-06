<template>
  <div>
    <div class="myEcharts">
      <div class="echart">
        <Echart ref="echart1" :options="options" />
      </div>
    </div>
    <el-button @click="goBack">goBack</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        title: { text: "在Vue中使用echarts" },
        tooltip: {},
        legend: {
          type: "plain",
        },
        grid: {
          top: "12%",
          left: "1%",
          right: "10%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: [
            "衬衫",
            "羊毛衫",
            "雪纺衫",
            "裤子",
            "高跟鞋",
            "袜子",
            "衬衫",
            "羊毛衫",
            "雪纺衫",
            "裤子",
            "高跟鞋",
            "袜子",
          ],
        },
        yAxis: {},
        axisPointer: {
          show: "cross",
          link: { xAxisIndex: "all" },
          label: {
            backgroundColor: "#777",
          },
        },
        toolbox: {
          show: true,
          orient: "vertical",
          itemSize: 22,
          itemGap: 22,
          showTitle: true,
          feature: {
              myTool1: {
                show: true,
                title: '自定义扩展方法1',
                icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
                onclick: function (){
                    alert('myToolHandler1')
                }
            },
            saveAsImage: {
                type: 'png',
                name: '图片',
                backgroundColor: 'auto',
                title: '下载图片'
            },
            dataZoom: {
              yAxisIndex: "none",
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {},
          },
        },
        dataZoom: [
          {
            show: true,
            start: 0,
            end: 100,
          },
          {
            type: "inside",
            start: 0,
            end: 100,
          },
          {
            show: true,
            yAxisIndex: 0,
            filterMode: "empty",
            width: 30,
            height: "80%",
            showDataShadow: false,
            left: "93%",
          },
        ],
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20],
            encode: { x: "name", y: "score" },
          },
          {
            name: "销量1",
            type: "bar",
            data: [20, 5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10],
            encode: { x: "name", y: "score" },
          },
          {
            name: "销2",
            type: "bar",
            data: [20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20, 23],
            encode: { x: "name", y: "score" },
          },
        ],
      },
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.echart {
  flex: 1;
  height: 500px;
  overflow: hidden;
}
</style>