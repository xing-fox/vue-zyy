<style lang="less" scoped>
  .xp-content {
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/images/bg.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>

<template>
  <div class="xp-content" :style="{'z-index': zIndex}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'xp-content',
  props: {
    zIndex: {
      type: Number,
      default: 1
    }
  }
}
</script>
