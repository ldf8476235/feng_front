import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  //mode:"history",
  routes: [
    {
      path: '/',
      name: 'muyun',
      //component: HelloWorld
      component: () => import('@/views/muyun/index')
    }
  ]
})
