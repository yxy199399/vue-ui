<template>
  <transition name="dialog-fade">
    <div class="yxy-dialog__wrapper" v-show="visible" @click.self="close">
      <div class="yxy-dialog" :style="{width, marginTop: top}">
        <div class="yxy-dialog__header">
          <slot name="title">
            <span class="yxy-dialog__title">提示</span>
          </slot>
          <button class="yxy-dialog__headerbtn" @click="close">
            <i class="yxy-icon-close"></i>
          </button>
        </div>
        <div class="yxy-dialog__body">
          <slot></slot>
        </div>
        <div class="yxy-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'YxyDialog',
  props: {
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss">
  // 深度选择器：
  // less /deep/
  // scss ::v-deep
  // css >>>
.yxy-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 50%
}

.yxy-dialog.is-fullscreen {
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    height: 100%;
    overflow: auto
}

.yxy-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    background-color: rgba(0,0,0,.5)
}

.yxy-dialog__header {
    padding: 20px 20px 10px
}

.yxy-dialog__headerbtn {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 16px
}

.yxy-dialog__headerbtn .yxy-dialog__close {
    color: #909399
}

.yxy-dialog__headerbtn:focus .yxy-dialog__close,.yxy-dialog__headerbtn:hover .yxy-dialog__close {
    color: #409eff
}

.yxy-dialog__title {
    line-height: 24px;
    font-size: 18px;
    color: #303133
}

.yxy-dialog__body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
}

.yxy-dialog__footer {
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;
    .yxy-button {
      margin-right: 20px;
    }
}

.yxy-dialog--center {
    text-align: center
}

.yxy-dialog--center .yxy-dialog__body {
    text-align: initial;
    padding: 25px 25px 30px
}

.yxy-dialog--center .yxy-dialog__footer {
    text-align: inherit
}

.dialog-fade-enter-active {
    animation: dialog-fade-in .3s
}

.dialog-fade-leave-active {
    animation: dialog-fade-out .3s
}

@keyframes dialog-fade-in {
    0% {
        transform: translate3d(0,-20px,0);
        opacity: 0
    }

    to {
        transform: translateZ(0);
        opacity: 1
    }
}

@keyframes dialog-fade-out {
    0% {
        transform: translateZ(0);
        opacity: 1
    }

    to {
        transform: translate3d(0,-20px,0);
        opacity: 0
    }
}
</style>
