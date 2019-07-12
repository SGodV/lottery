import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AdminHome from '@/components/AdminHome'
import CreateLottery from '@/components/CreateLottery'
import ShowDefine from '@/components/ShowDefine'
import RuleDefine from '@/components/RuleDefine'
import UserDefine from '@/components/UserDefine'
import Logo from '../components/Logo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/AdminHome',
      name: 'AdminHome',
      component: AdminHome
    },
    {
      path: '/CreateLottery',
      name: 'CreateLottery',
      component: CreateLottery,
      children: [
        {
          path: 'ShowDefine',
          name: 'ShowDefine',
          component: ShowDefine
        },
        {
          path: 'RuleDefine',
          name: 'RuleDefine',
          component: RuleDefine
        },
        {
          path: 'UserDefine',
          name: 'UserDefine',
          component: UserDefine
        }
      ]
    }
  ]
})
