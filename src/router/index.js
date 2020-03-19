import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Class.vue'
import Device from '../views/Device.vue'
import DeviceDetail from '../views/DeviceDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/classes',
    name: 'classes',
    component: Home
  },
  {
    path: '/classes/:classID/devices',
    name: 'devices',
    component: Device
  },
  {
    path: '/classes/:classID/devices/:deviceID',
    name: 'device_details',
    component: DeviceDetail
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
