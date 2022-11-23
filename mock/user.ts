import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'
import { responseSuccess, responseFailed } from './utils'

function getUser() {
  return Mock.mock({
    'userId|1-100000': 100000,
    userName: '@cname',
    gender: '@integer(0,1)',
    'role|1': ['admin', 'editor', 'developer', 'operator', 'user'],
  })
}

export default [
  {
    url: '/api/getUser',
    method: 'get',
    response: () => {
      return {
        code: 'A00000',
        data: getUser(),
        msg: 'get user info success!',
      }
    },
  },
  {
    url: '/api/user/login',
    method: 'post',
    response: (data: any) => {
      data = data?.body?.data
      if (data?.username != 'admin' || data?.password != 'admin$123') {
        return responseFailed(getUser())
      }
      return responseSuccess(getUser(), 'success')
    },
  },
  {
    url: '/api/user/logout',
    method: 'post',
    response: () => {
      return {
        code: 'A00000',
        data: null,
        msg: 'logout success!',
      }
    },
  },
] as MockMethod[]
