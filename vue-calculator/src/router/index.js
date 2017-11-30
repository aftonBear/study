import Vue from 'vue'
import Router from 'vue-router'
import calculator from '@/components/calculator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: calculator
    }
  ]
})
