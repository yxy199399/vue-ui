<template>
  <button class="yxy-button" :class="[`yxy-button--${type}`, {'is-plain': plain, 'is-round': round, 'is-circle': circle, 'is-disabled': disabled}]" @click="handleClick" :disabled="disabled">
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"> <slot></slot> </span>
  </button>
</template>

<script>
export default {
  name: 'YxyButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
  .yxy-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  .yxy-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff
}

.yxy-button--primary:focus,.yxy-button--primary:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff
}

.yxy-button--primary:active {
    outline: none
}

.yxy-button--primary.is-active,.yxy-button--primary:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff
}

.yxy-button--primary.is-disabled,.yxy-button--primary.is-disabled:active,.yxy-button--primary.is-disabled:focus,.yxy-button--primary.is-disabled:hover {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff
}

.yxy-button--primary.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff
}

.yxy-button--primary.is-plain:focus,.yxy-button--primary.is-plain:hover {
    background: #409eff;
    border-color: #409eff;
    color: #fff
}

.yxy-button--primary.is-plain:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
    outline: none
}

.yxy-button--primary.is-plain.is-disabled,.yxy-button--primary.is-plain.is-disabled:active,.yxy-button--primary.is-plain.is-disabled:focus,.yxy-button--primary.is-plain.is-disabled:hover {
    color: #8cc5ff;
    background-color: #ecf5ff;
    border-color: #d9ecff
}

.yxy-button--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a
}

.yxy-button--success:focus,.yxy-button--success:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff
}

.yxy-button--success:active {
    outline: none
}

.yxy-button--success.is-active,.yxy-button--success:active {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff
}

.yxy-button--success.is-disabled,.yxy-button--success.is-disabled:active,.yxy-button--success.is-disabled:focus,.yxy-button--success.is-disabled:hover {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d
}

.yxy-button--success.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0
}

.yxy-button--success.is-plain:focus,.yxy-button--success.is-plain:hover {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff
}

.yxy-button--success.is-plain:active {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
    outline: none
}

.yxy-button--success.is-plain.is-disabled,.yxy-button--success.is-plain.is-disabled:active,.yxy-button--success.is-plain.is-disabled:focus,.yxy-button--success.is-plain.is-disabled:hover {
    color: #a4da89;
    background-color: #f0f9eb;
    border-color: #e1f3d8
}

.yxy-button--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c
}

.yxy-button--warning:focus,.yxy-button--warning:hover {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff
}

.yxy-button--warning:active {
    outline: none
}

.yxy-button--warning.is-active,.yxy-button--warning:active {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff
}

.yxy-button--warning.is-disabled,.yxy-button--warning.is-disabled:active,.yxy-button--warning.is-disabled:focus,.yxy-button--warning.is-disabled:hover {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e
}

.yxy-button--warning.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1
}

.yxy-button--warning.is-plain:focus,.yxy-button--warning.is-plain:hover {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff
}

.yxy-button--warning.is-plain:active {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff;
    outline: none
}

.yxy-button--warning.is-plain.is-disabled,.yxy-button--warning.is-plain.is-disabled:active,.yxy-button--warning.is-plain.is-disabled:focus,.yxy-button--warning.is-plain.is-disabled:hover {
    color: #f0c78a;
    background-color: #fdf6ec;
    border-color: #faecd8
}

.yxy-button--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c
}

.yxy-button--danger:focus,.yxy-button--danger:hover {
    background: #f78989;
    border-color: #f78989;
    color: #fff
}

.yxy-button--danger:active {
    outline: none
}

.yxy-button--danger.is-active,.yxy-button--danger:active {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff
}

.yxy-button--danger.is-disabled,.yxy-button--danger.is-disabled:active,.yxy-button--danger.is-disabled:focus,.yxy-button--danger.is-disabled:hover {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6
}

.yxy-button--danger.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4
}

.yxy-button--danger.is-plain:focus,.yxy-button--danger.is-plain:hover {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff
}

.yxy-button--danger.is-plain:active {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff;
    outline: none
}

.yxy-button--danger.is-plain.is-disabled,.yxy-button--danger.is-plain.is-disabled:active,.yxy-button--danger.is-plain.is-disabled:focus,.yxy-button--danger.is-plain.is-disabled:hover {
    color: #f9a7a7;
    background-color: #fef0f0;
    border-color: #fde2e2
}

.yxy-button--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399
}

.yxy-button--info:focus,.yxy-button--info:hover {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff
}

.yxy-button--info:active {
    outline: none
}

.yxy-button--info.is-active,.yxy-button--info:active {
    background: #82848a;
    border-color: #82848a;
    color: #fff
}

.yxy-button--info.is-disabled,.yxy-button--info.is-disabled:active,.yxy-button--info.is-disabled:focus,.yxy-button--info.is-disabled:hover {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc
}

.yxy-button--info.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6
}

.yxy-button--info.is-plain:focus,.yxy-button--info.is-plain:hover {
    background: #909399;
    border-color: #909399;
    color: #fff
}

.yxy-button--info.is-plain:active {
    background: #82848a;
    border-color: #82848a;
    color: #fff;
    outline: none
}

.yxy-button--info.is-plain.is-disabled,.yxy-button--info.is-plain.is-disabled:active,.yxy-button--info.is-plain.is-disabled:focus,.yxy-button--info.is-plain.is-disabled:hover {
    color: #bcbec2;
    background-color: #f4f4f5;
    border-color: #e9e9eb
}
.yxy-button.is-round {
    border-radius: 20px;
    padding: 12px 23px
}
.yxy-button.is-circle {
    border-radius: 50%;
    padding: 12px
}
.yxy-button [class*='yxy-icon-']+span {
  margin-left: 5px;
}
</style>
