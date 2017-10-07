import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homePage'
// const Music = resolve => {
//   require.ensure(["@/components/music"],()=>{
//     resolve(require('components/music'))
//   })
// }
import Music from '@/components/music'
import Game from '@/components/game'
import Lucky from '@/components/lucky'
import Poem from '@/components/poem'
import Article from '@/components/article'
import Test from '@/components/test'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path:'/',
      component: HomePage
    },
    {
      path:'/music',
      component: Music
    },
    {
      path:'/game',
      component: Game
    },
    {
      path:'/lucky',
      component: Lucky
    },
    {
      path:'/test',
      component: Test
    },
    {
      path:'/poem',
      component: Poem
    },
    {
      path:'/article',
      component: Article
    },
  ]
})
