<template>
  <div class="echart">
    <div :className="className" :style="style"></div>
  </div>
</template>

<script>
export default {
  name: "Echart",
  props: {
    className: {
      type: String,
      default: "chart",
    },
    options: {
      type: Object,
    },
    styles: {
      type: Object,
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  computed: {
    style() {
      if (this.styles) {
        return this.styles;
      } else {
        return {
          width: "100%",
          height: "100%",
          position: "absolute",
          overflow: "hidden",
        };
      }
    },
  },
  mounted() {
    this.initListener();
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$el, "macarons");
      this.chart.setOption(this.options);
    },
    initListener() {
      window.addEventListener("resize", this.resize);
    },
    resize() {
      const { chart } = this;
      chart && chart.resize();
    },
  },
};
</script>

<style lang="scss" scoped>
.echart {
  height: 100%
}
</style>