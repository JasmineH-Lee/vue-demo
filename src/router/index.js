import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Nav from '@/components/Nav'
import CardList from '@/components/CardList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/nav',
      component: Nav
    },
    {
      path: '/cardlist',
      name: 'cardlist',
      component: CardList
    },
    {
      path: '/demo1',
      name: '组件的应用',
      component: () => import('@/views/componentDemo/demo1')
    }
  ]
})
