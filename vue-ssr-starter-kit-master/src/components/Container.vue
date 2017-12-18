<template>
  <div class="root">
    <p>主体部分</p>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style>
  .root {
    flex: 1;
    margin-left: 220px;
    position: absolute;
    bottom: 0;
    right: 0;
    top: 70px;
    left: 0;
  }
</style>
