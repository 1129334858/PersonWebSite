import Vue from 'vue'
// 懒加载方式
const Login = () => import('../components/Login.vue')
const Main = () => import('../components/Main.vue')
const Profile = () => import('../components/Profile.vue')
const User = () => import('../components/User.vue')

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/login', component: Login},
    {
      path: '/main/:id',
      component: Main,
      children: [
        {path: 'profile', component: Profile}
      ]
    },
    {
      path: '/user/:id',
      component: User,
      children: [
        {path: 'profile', component: Profile}
      ]
    }
  ]
})

export default router
