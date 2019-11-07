import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/frontEnd/Home.vue'

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*', // 隨意輸入的路由
      redirect: '/' // 重新導回首頁
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./views/frontEnd/News.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/frontEnd/About.vue')
    },
    {
      path: '/movie',
      name: 'movie',
      component: () => import('./views/frontEnd/Movie.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('./views/frontEnd/Order.vue'),
    },
    {
      path: '/sql',
      name: 'sql',
      component: () => import('./views/frontEnd/SQL.vue'),
    },
    {
      path: '/order/chooseSeat',
      name: 'chooseSeat',
      component: () => import('./views/frontEnd/ChooseSeat.vue'),
    },
    {
      path: '/order/detail',
      name: 'detail',
      component: () => import('./views/frontEnd/Detail.vue'),
    },
    {
      path: '/order/finishDetail',
      name: 'finishDetail',
      component: () => import('./views/frontEnd/FinishDetail.vue')
    },
    {
      path: '/bonus',
      name: 'bonus',
      meta: { requiresAuth: true },
      component: () => import('./views/frontEnd/Bonus.vue')
    },
    {
      path: '/user',
      name: 'user',
      meta: { requiresAuth: true },
      component: () => import('./views/frontEnd/User.vue'),
      children: [
        {
          path: '',
          name: 'userInfo',
          component: () => import('./views/frontEnd/UserInfo.vue')
        },
        {
          path: 'userRecord',
          name: 'userRecord',
          component: () => import('./views/frontEnd/UserRecord.vue')
        },
        {
          path: 'userPoint',
          name: 'userPoint',
          component: () => import('./views/frontEnd/UserPoint.vue')
        }
      ]
    },
    {
      path: '/backEnd',
      name: 'backEnd',
      meta: { requiresAuth: true },
      component: () => import('./views/backEnd/BackEnd.vue'),
      children: [
        {
          path: '',
          name: 'newsManage',
          component: () => import('./views/backEnd/NewsManage.vue')
        },
        {
          path: 'moviesManage',
          name: 'moviesManage',
          component: () => import('./views/backEnd/movies/pages/MoviesManage.vue'),
          children: [
            {
              path: '',
              name: 'all',
              component: () => import('./views/backEnd/movies/pages/All.vue')
            },
            {
              path: 'released',
              name: 'released',
              component: () => import('./views/backEnd/movies/pages/Released.vue')
            },
            {
              path: 'comingSoon',
              name: 'comingSoon',
              component: () => import('./views/backEnd/movies/pages/ComingSoon.vue')
            } 
          ]
        },
        {
          path: 'mealsManage',
          name: 'mealsManage',
          component: () => import('./views/backEnd/MealsManage.vue')
        },
        {
          path: 'discountManage',
          name: 'discountManage',
          component: () => import('./views/backEnd/DiscountManage.vue')
        },
        {
          path: 'memberManage',
          name: 'memberManage',
          component: () => import('./views/backEnd/MemberManage.vue')
        },
        {
          path: 'report',
          name: 'report',
          component: () => import('./views/backEnd/report/pages/Report.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path.indexOf('/order') == -1) {
    sessionStorage.removeItem("movie");
    sessionStorage.removeItem("movieIndex");
    sessionStorage.removeItem("courtsID");
    sessionStorage.removeItem("screeningID");
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let url = to.path.split('/');

    switch (url[1]) {
      case 'user':
        if (sessionStorage.getItem('nowAcc')) next();
        else next(from.path);
        break;
      case 'bonus':
        if (sessionStorage.getItem('nowAcc')) next();
        else next(from.path);
        break;
      case 'backEnd':
        if (sessionStorage.getItem('nowAcc') == 'admin') next();
        else next(from.path);
        break;
      default:
        next();
        break;
    }
  } else {
    next();
  }
})

export default router;