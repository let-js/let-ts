export {}

declare module 'vue-router' {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    orderNo?: number
    // title
    title: string
    // dynamic router real route path (For performance).
    realPath?: string
    // Whether to ignore permissions
    ignoreAuth?: boolean
  }
}
