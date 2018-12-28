import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Page2 from '../pages/page2'
import Page3 from '../pages/page3'
import Page4 from '../pages/page4'
import Page5 from '../pages/page5'
import Page6 from '../pages/page6'
import Page7 from '../pages/page7'
import Page8 from '../pages/page8'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Index},
    {path:'/Index',component:Index},
    {path:'/Page2',component:Page2},
    {path:'/Page3',component:Page3,},
    {path:'/Page4',component:Page4},
    {path:'/Page5',component:Page5},
    {path:'/Page6',component:Page6},
    {path:'/Page7',component:Page7},
    {path:'/Page8',component:Page8},
    { path: "/", redirect: "/Page3" },//重定向,指向了home组件
    {
      path: "/Page3", component: Page3,
      children: [
        { path: "/Page3/local", component: Page8 }
      ]
    }
  ]
})
