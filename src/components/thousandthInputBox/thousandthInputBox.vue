<template>
  <div class="customInputBox">
    <el-input
      class="price_style"
      v-show="isFormat"
      @focus="focus"
      v-model="copyModel"
    ></el-input>
    <el-input
      v-show="!isFormat"
      @blur="blur"
      @input="input"
      @change="change"
      ref="input"
      v-model="model"
      class="price_style"
    ></el-input>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String || Number,
      default: "",
    },
    len: {
      type: Number,
      default: 2,
    },
  },
  name: "ThousandthInputBox",
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
    copyModel() {
      return this.format(this.model);
    },
  },
  data() {
    return {
      isFormat: true,
    };
  },
  methods: {
    format(params) {
      if (params) {
        if (this.len != undefined) {
          return `${(params * 1).toFixed(this.len)}`.replace(
            /\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,
            "$&,"
          );
        } else {
          return `${(params * 1).toFixed(2)}`.replace(
            /\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,
            "$&,"
          );
        }
      }
    },
    input() {
      this.$emit("Cinput");
    },
    change() {
      this.$emit("Cchange");
    },
    blur() {
      this.isFormat = !this.isFormat;
      this.model = Number(this.model).toFixed(this.len);
      this.$emit("Cblur");
    },
    focus() {
      this.isFormat = !this.isFormat;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
      this.$emit("Cfocus");
    },
  },
};
</script>
<style lang="scss">
.TurnoverIncrease {
  .el-input--small .el-input__inner {
    text-align: center;
  }
}
</style>
<style scoped lang="scss">
.TurnoverIncrease {
  width: 80%;

  .comp-wrapper {
    overflow: hidden;

    /deep/.el-table {
      .cell {
        overflow: visible;
      }
    }

    /deep/ .el-form-item {
      &.no-margin {
        margin-bottom: auto;
      }
    }
  }
}
</style>
