import type { AxiosRequestConfig } from 'axios'
import { ResponseCode } from '@/config/requestEnum'
import router from '@/router'
import useLogger from '@/utils/useLogger'

const logger = useLogger('request')

const request = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 1000 * 60,
  withCredentials: true,
})

request.interceptors.response.use(
  (response: AxiosRequestConfig) => {
    const code = response.data.code
    if (code === ResponseCode.SUCCESS_CODE) {
      logger.info('response: ', response.data)
      return response.data
    } else if (code === ResponseCode.NOAUTH_CODE) {
      router.replace({
        path: '/no-permission',
        query: {
          redirect: router.currentRoute.value.fullPath,
        },
      })
    }
    const error = new Error(response.data.msg)
    logger.error('error: ', error)
    return Promise.reject(error)
  },
  (error) => {
    logger.error('error: ', error)
    Promise.reject(error)
  },
)

export interface Response {
  code: string
  data: any
  msg: string
}

export default request
