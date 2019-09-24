import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./views/News.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/movie',
      name: 'movie',
      component: () => import('./views/Movie.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('./views/Order.vue')
    },
    {
      path: '/order/detail',
      name: 'detail',
      component: () => import('./views/detail.vue')
    },
    {
      path: '/bonus',
      name: 'bonus',
      component: () => import('./views/Bonus.vue')
    },
    {
      path: '/user',
      name: 'user',
      meta: { requiresAuth: true },
      component: () => import('./views/User.vue')
    },
    {
      path: '/backEnd',
      name: 'backEnd',
      meta: { requiresAuth: true },
      component: () => import('./views/BackEnd.vue'),
      children: [
        {
          path: '',
          name: 'newsManage',
          component: () => import('./views/NewsManage.vue')
        },
        {
          path: 'movieManage',
          name: 'movieManage',
          component: () => import('./views/MovieManage.vue')
        },
        {
          path: 'memberManage',
          name: 'memberManage',
          component: () => import('./views/MemberManage.vue')
        },
        {
          path: 'report',
          name: 'report',
          component: () => import('./views/Report.vue')
        }
      ]
    }
  ]
})
