import Vue from 'vue'
import Router from 'vue-router'
import Pages from '@/components/Pages'
import Page from '@/components/Page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pages',
      component: Pages
    },
    {
      path: '/page/:id',
      name: 'Page',
      component: Page
    }
  ]
})
