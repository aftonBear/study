import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import a1 from '@/components/a1'
import a2 from '../components/a2'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: a2
    }
  ]
})
