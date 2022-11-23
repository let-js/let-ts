import { Router } from 'vue-router'
import { createPermissionGuard } from './permission'

export function setupRouterGuard(router: Router): void {
  createPermissionGuard(router)
}
