<template>
  <div class="nav">
    <img src="./../assets/logo.png" style="width: 60px;height: 60px">
    <div @click="queryUser">
      welcome {{username}} login ~~!
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: '**'
      }
    },
    mounted () {
      this.username = window.localStorage.getItem('username')
    },
    methods: {
      queryUser () {
        this.$router.push('/user/782365723')
      }
    }
  }
</script>

<style>
  .nav {
    height: 70px;
    line-height: 70px;
    background: linear-gradient(to right, #5BC9F3, #5278E8);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
    color: #ffffff;
  }
</style>
