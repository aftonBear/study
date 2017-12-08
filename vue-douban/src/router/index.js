import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import Test from '../views/Test'
import About from '../views/about/index.vue'
import MovieTab from '../views/movie/tab.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/test',
      component: Test
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/',
      redirect: '/movie/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/movie/home',
      name: 'MovieHome',
      component: MovieTab
    }
  ]
})
