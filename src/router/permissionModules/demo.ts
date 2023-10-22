/*
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-08 19:21:46
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-21 21:26:26
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const demoRouter: Array<RouteRecordRaw> = [
  {
    path: '/demo',
    component: Layout,
    redirect: 'noredirect',
    name: 'Demo',
    meta: {
      title: 'demo',
      icon: '#iconchart1'
    },
    children: [
      {
        path: 'demo-ref',
        component: () =>
          import(
            /* webpackChunkName: "BarChart" */ '@/views/demo/DemoRef.vue'
          ),
        name: 'DemoRef',
        meta: {
          title: 'demo1',
          noCache: true
        }
      },
      {
        path: 'demo-ref2',
        component: () =>
          import(
            /* webpackChunkName: "BarChart" */ '@/views/demo/DemoRef2.vue'
          ),
        name: 'DemoRef2',
        meta: {
          title: 'demo2',
          noCache: true
        }
      },
      {
        path: 'demo-ref3',
        component: () =>
          import(
            /* webpackChunkName: "BarChart" */ '@/views/demo/demo问题.vue'
          ),
        name: 'demo3',
        meta: {
          title: 'demo3',
          noCache: true
        }
      },
      {
        path: 'demo-ref4',
        component: () =>
          import(
            /* webpackChunkName: "BarChart" */ '@/views/demo/three1.vue'
          ),
        name: 'three',
        meta: {
          title: 'three',
          noCache: true
        }
      }
    ]
  }
]

export default demoRouter
