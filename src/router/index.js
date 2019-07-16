import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LotteryHistroy from '@/components/LotteryHistroy'
import WinHistroy from '@/components/WinHistroy'
import UserInfo from '@/components/UserInfo'
import AdminHome from '@/components/AdminHome'
import CreateLottery from '@/components/CreateLottery'
import ShowDefine from '@/components/ShowDefine'
import RuleDefine from '@/components/RuleDefine'
import UserDefine from '@/components/UserDefine'
import StartLottery from '@/components/StartLottery'
import Logo from '@/components/Logo'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Logo',
      component: Logo
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta:{requireAuth:true}
    },
    {
      path: '/LotteryHistroy',
      name: 'LotteryHistroy',
      component: LotteryHistroy,
      meta:{requireAuth:true}
    },
    {
      path: '/WinHistroy',
      name: 'WinHistroy',
      component: WinHistroy,
      meta:{requireAuth:true}
    },
    {
      path: '/UserInfo',
      name: 'UserInfo',
      component: UserInfo,
      meta:{requireAuth:true}
    },
    {
      path: '/AdminHome',
      name: 'AdminHome',
      component: AdminHome,
      meta:{requireAuth:true}
    },
    {
      path: '/CreateLottery',
      name: 'CreateLottery',
      component: CreateLottery,
      meta:{requireAuth:true},
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
    },
    {
      path: '/StartLottery',
      name: 'StartLottery',
      component: StartLottery,
      meta:{requireAuth:true}
    }
  ]
});
