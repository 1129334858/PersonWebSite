<template>
  <div>
    <label>username</label>
    <input type="text" placeholder="username" v-model="username"/>
    <br/>
    <label>password</label>
    <input type="password" v-model="password"/>
    <br/>
    <button @click="Login">submit</button>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { localLoginRST } from '../net/http/loginRST'

  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    created () {
      console.log('vue 实例加载完 成')
    },
    mounted () {
      console.log('登录界面挂载 完成')
    },
    methods: {
      Login () {
        let username = this.username
        let password = this.password

        if (_.isEmpty(username) || _.isEmpty(password)) {
          return console.log('no input username or password')
        } else {
          localLoginRST(username, password).then((response) => {
            if (response.statusText === 'OK') {
              console.log('123', response)
              window.localStorage.setItem('username', username)
              this.$router.push('/main/8916586301')
            }
          }).catch((error) => {
            console.log('login error:', error)
          })
        }
      }
    }

  }
</script>

<style>

</style>
