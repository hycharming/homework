import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Agent from '../views/agent.vue'
import Dashboard from '../views/dashboard.vue'
import Cruise from '../views/cruise.vue'
import Help from '../views/help.vue'

Vue.use(VueRouter)

const routes = [{
  path:'/',
  redirect:'/agent' 
},{
  
  path: '/',
  component: Home,
  children: [{
    path: '/dashboard',
    component:Dashboard
  },
  {
    path: '/agent',
    component: Agent
  },
  {
    path: '/cruise',
    component: Cruise
  },
  {
    path: '/help',
    component: Help
  },
]
}, ]

const router = new VueRouter({
  routes
})

export default router