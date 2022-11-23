import request, { Response } from '../utils/useRequest'

/**
 * About API
 * 1. HTTP request
 * 2. for service,composition
 * 3. funtion list
 */
export async function login(loginData: object) {
  const response: Response = await request.post('/api/user/login', {
    data: loginData,
  })
  return response
}

export async function logout() {
  const response: Response = await request.post('/api/user/logout')
  return response
}
