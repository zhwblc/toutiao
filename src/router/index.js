import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'

// 把 VueRouter 安装成 Vue 组件
Vue.use(VueRouter)

// 路由规则的数组
const routes = [
  // 定义首页的路由规则
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  // 定义我的路由规则
  { path: '/user', component: User }
]

// 创建路由的对象
const router = new VueRouter({
  routes
})

export default router
