import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
        path: '/test',
        name: 'test',
        component : () => import('./views/Test.vue')
      },
      {
        path: '/project',
        name: 'project',
        component : () => import('./views/Projects.vue')
      },
      {
        path: '/jobshopper',
        name: 'jobshopper',
        component: () => import('./views/Jobshopper.vue')
      }
  ]
})
