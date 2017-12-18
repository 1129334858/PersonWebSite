import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router'
import { sync } from 'vuex-router-sync'

// import JSEncrypt from 'jsencrypt/bin/jsencrypt'

// import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// Vue(Element)

export function createApp () {
  // 同步路由状态(route state)到 store
  sync(store, router)
  // 创建应用程序实例，将 router 和 store 注入
  const app = new Vue({
    router,
    store,
    render: h => h(App),
    // 监听路由检查登录
    // watch: {
    //   '$route': 'checkLogin'
    // },
    beforeMount () {
      this.checkLogin()
    },
    methods: {
      checkLogin () {
        if (this.getCookie('username')) {
          this.$router.push(this.$router.currentRoute.path)
        } else {
          this.$router.push('/login')
        }
      }
    }
  })
  // 暴露 app, router 和 store。
  return {app, router, store}
}

// // 设置cookie,增加到vue实例方便全局调用
// // vue全局调用的理由是，有些组件所用到的接口可能需要session验证，session从cookie获取
// // 当然，如果session保存到vuex的话除外
// Vue.prototype.setCookie = (name, value, expiredays) => {
//   let exdate = new Date()
//   exdate.setDate(exdate.getDate() + expiredays)
//   document.cookie = name + '=' + escape(value) + ((expiredays === null) ? '' : ';expires=' + exdate.toGMTString())
// }
//
// 获取cookie、
// function getCookie (name) {
// let arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
// let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
// if (arr === window.document.cookie.match(reg)) {
//   return (arr[2])
// } else {
//   return null
// }
// }

Vue.prototype.getCookie = (name) => {
  return window.localStorage.getItem(name)
}

// Vue.prototype.$jsEncrypt = JSEncrypt

// // 删除cookie
// Vue.prototype.delCookie = (name) => {
//   let exp = new Date()
//   exp.setTime(exp.getTime() - 1)
//   let cval = getCookie(name)
//   if (cval !== null) {
//     document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
//   }
// }
