import type { RouteLocationNormalized, Router } from 'vue-router'
import { PageEnum } from '@/config/pageEnum'
import { useUserStore } from '@/stores/userStore'

const LOGIN_PATH = PageEnum.BASE_LOGIN
const NOTFOUND_PATH = PageEnum.NOT_FOUND
const NOPERMISSION_PATH = PageEnum.NO_PERMISSION

const needAuthenticated = (route: RouteLocationNormalized): boolean => {
  return !(route?.meta?.ignoreAuth || false)
}

const isValidVisitor = (route: RouteLocationNormalized): boolean => {
  const userStore = useUserStore()
  const role = userStore.user.role
  return route.meta?.userRole === role
}

export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to) => {
    if (to.matched.length === 0) {
      return {
        path: NOTFOUND_PATH,
      }
    }
    if (to.path !== LOGIN_PATH && needAuthenticated(to)) {
      if (!isValidVisitor(to)) {
        return { path: NOPERMISSION_PATH }
      } else {
        return true
      }
    }
    return true
  })
}
