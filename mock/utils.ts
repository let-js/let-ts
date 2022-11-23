const SUCCESS_CODE = 'A00000'
const FAILED_CODE = 'E00000'

export function responseWrapper(code: any, data: any, msg = '') {
  return {
    code: code,
    data: data,
    msg: msg,
  }
}

export function responseSuccess(data: any, message = 'success') {
  return responseWrapper(SUCCESS_CODE, data, message)
}

export function responseFailed(data: any, message = 'failed') {
  return responseWrapper(FAILED_CODE, data, message)
}

export function getParamPairs(url: string) {
  const query = url.substring(url.indexOf('?') + 1)
  const params = query.split('&')
  const pairs = params.map((item: string) => item.split('='))
  return pairs
}
