<template>
  <div>
    <button @click='increment'>Increment +1</button>
    <button @click='decrement'>Decrement -1</button>

    <a id="example" @click="doSomething">click me {{message}}</a>


    <p @click="show = ! show">try to show</p>
    <p v-if="show">test test</p>
    <h3>Count is {{ count }}</h3>

    <UserInfo></UserInfo>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import UserInfo from './UserInfo.vue'

  export default {

    asyncData ({store}) {
      store.registerModule('userInfo', UserInfo)
    },
    data: function () {
      return {
        message: '没有更新',
        show: true
      }
    },
    created () {
      console.log('组件加载完成~~！')
    },
    methods: {
      ...mapActions([
        'increment',
        'decrement'
      ]),
      doSomething () {
        console.log('I want to do something')
        this.updateMessage()
      },
      updateMessage () {
        this.message = '更新完成'
        this.$nextTick(function () {
        })
      }
    },
    computed: {
      ...mapGetters({
        count: 'getCount'
      })
    }
  }
</script>

<style>
  body {
    background: gray;
  }
</style>
