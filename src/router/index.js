import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['./../components/nav'], resolve),
      children: [
        {
          path: '/',
          redirect: 'index',
          component: resolve => require(['./../components/HelloWorld'], resolve)
        },
        {
          path: 'index',
          name: 'index',
          component: resolve => require(['./../components/HelloWorld'], resolve)
        }
      ]
    }
  ]
})
