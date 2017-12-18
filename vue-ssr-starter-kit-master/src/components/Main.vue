<template>
  <div>
    <div>
      <top/>
    </div>
    <div class="theme">
      <side-bar/>
      <container/>
    </div>
  </div>
</template>

<script>
  import sideBar from './leftMenu.vue'
  import top from './header.vue'
  import container from './Container.vue'

  export default {
    components: {
      sideBar,
      top,
      container
    }
  }
</script>

<style>
  .theme {
    display: flex;
    flex-direction: row;
  }
</style>
