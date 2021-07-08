<template>
    <el-tooltip class="screen-full" effect="light" content="全屏" placement="bottom">
        <div style="color: #fff;">
            <i :class="isFullscreen ? 'el-icon-s-grid' : 'el-icon-menu'" @click="click" />
        </div>
    </el-tooltip>
</template>

<script>
import screenfull from 'screenfull';

export default {
    name: 'screenFull',
    data() {
        return {
            isFullscreen: false
        };
    },
    mounted() {
        this.init();
    },
    beforeDestroy() {
        this.destroy();
    },
    methods: {
        click() {
            if (!screenfull.isEnabled) {
                this.$message({
                    message: 'you browser can not work',
                    type: 'warning'
                });
                return false;
            }
            screenfull.toggle();
        },
        change() {
            this.isFullscreen = screenfull.isFullscreen;
        },
        init() {
            if (screenfull.isEnabled) {
                screenfull.on('change', this.change);
            }
        },
        destroy() {
            if (screenfull.isEnabled) {
                screenfull.off('change', this.change);
            }
        }
    }
};
</script>

<style lang="scss">
.screen-full {
    cursor: pointer;
    margin-right: 10px;

    .screenfull-svg {
        display: inline-block;
        cursor: pointer;
        fill: #5a5e66;
        width: 20px;
        height: 20px;
        vertical-align: 10px;
    }
}
</style>
