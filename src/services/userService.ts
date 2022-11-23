import { RoleType, User } from '../domain/user'
import * as userApi from '../api/userApi'
import { Auth } from '@/config/userConst'
import { ResponseCode } from '@/config/requestEnum'
import useLogger from '@/utils/useLogger'
import { VueLogger } from 'vue-logger-plugin'

const logger: VueLogger = useLogger('userService')

export async function login(loginData: object): Promise<User> {
  const response = await userApi.login(loginData)
  if (response.code === ResponseCode.SUCCESS_CODE) {
    const user = new User(response.data)
    return user
  }

  logger.error('get user failed:', response)
  return createEmptyUser()
}

export async function logout(): Promise<void> {
  await userApi.logout()
}

export function createEmptyUser(): User {
  const user = User.createEmptyUser()
  return user
}

export function getUserAuthList(user: User): Array<string> {
  const role: RoleType = user.role
  const authArr: Array<string> = Auth[role]
  return authArr
}
