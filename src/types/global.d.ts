// 可定义全局的类型types
declare global {
  interface Page {
    page: number
    pageSize: number
    pageCount?: number
    totalCount: number
  }
}

export {}
