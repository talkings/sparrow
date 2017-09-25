import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage'),
      children: [{
        path: '/BaiduToGCJ02',
        name: 'BaiduToGCJ02',
        component: require('@/components/LandingPage/BaiduToGCJ02')
      },
      {
        path: '/GCJ02ToBaidu',
        name: 'GCJ02ToBaidu',
        component: require('@/components/LandingPage/GCJ02ToBaidu')
      }, 
      {
        path: '/Wgs84ToGCJ02',
        name: 'Wgs84ToGCJ02',
        component: require('@/components/LandingPage/Wgs84ToGCJ02')
      }, 
      {
        path: '/GCJ02ToWgs84',
        name: 'GCJ02ToWgs84',
        component: require('@/components/LandingPage/GCJ02ToWgs84')
      }]
    },
    {
      path: '*',
      redirect: '/BaiduToGCJ02'
    }
  ]
})
