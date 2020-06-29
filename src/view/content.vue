<style lang="less" scoped>
  .xp-content {
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/images/bg.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
  }
</style>

<template>
  <div class="xp-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'xp-content'
}
</script>
