import Vue from 'vue'
import Router from 'vue-router'
import HotMove from '@/components/hot-move/hot-move'
import Preview from '@/components/preview/preview'
import Review from '@/components/review/review'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/hotmove'
    },
    {
      path: '/hotmove',
      component: HotMove
    },
    {
      path: '/preview',
      component: Preview
    },
    {
      path: '/review',
      component: Review
    }
  ]
})
