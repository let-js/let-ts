import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NotFound from '@/pages/NotFound.vue'
import NoPermission from '@/pages/NoPermission.vue'
import Welcome from '@/pages/Welcome.vue'
import Layout from '@/components/layouts/Layout.vue'
import EmptyLayout from '@/components/layouts/EmptyLayout.vue'
import NeedAuth from '@/pages/NeedAuth.vue'
import { setupRouterGuard } from './guards/index'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    name: 'index',
    children: [
      {
        path: '',
        name: 'welcome',
        component: Welcome,
        meta: {
          title: '欢迎页',
          ignoreAuth: true,
        },
      },
      {
        path: 'need-auth',
        component: NeedAuth,
        meta: {
          title: '管理页',
          userRole: 'admin',
          ignoreAuth: false,
        },
      },
    ],
  },
  {
    path: '/',
    component: EmptyLayout,
    children: [
      {
        path: '/not-found',
        component: NotFound,
        meta: {
          title: '404',
          ignoreAuth: true,
        },
      },
      {
        path: '/no-permission',
        component: NoPermission,
        meta: {
          title: '403',
          ignoreAuth: true,
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: EmptyLayout,
    children: [
      {
        path: '',
        name: 'notfound',
        component: NotFound,
        meta: {
          title: '404',
          ignoreAuth: true,
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

setupRouterGuard(router)

export default router
