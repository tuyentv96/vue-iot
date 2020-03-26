import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Class.vue'
import ClassDetail from '../views/ClassDetail.vue'
import DeviceDetail from '../views/DeviceDetail.vue'
// import Workflow from '../views/Workflow.vue'
import WorkflowDetail from '../views/WorkflowDetail'
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
    path: '/classes/:classID',
    name: 'devices',
    component: ClassDetail
  },
  {
    path: '/classes/:classID/devices/:deviceID',
    name: 'device_details',
    component: DeviceDetail
  },
  {
    path: '/classes/:classID/workflows/:workflowID',
    name: 'workflow',
    component: WorkflowDetail
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
