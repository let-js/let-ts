<div align="center">
<img alt="Letjs Logo" width="200" height="200" src="./docs/eyu.png">
<h1>Letjs Starter for TS</h1>
</div>

## 介绍

Letjs 是一套前端工程化体系设计。旨在解决大型前端工程随着项目不断扩大而出现的代码混乱，维护困难，层级庞杂等一系列问题。Letjs 结合 [DDD 设计思想](https://en.wikipedia.org/wiki/Domain-driven_design)，沉淀出一套工程化体系结构。希望能够在大家开发大型前端项目时带来一些便利。让 UI 展现和业务逻辑尽量解耦，项目结构更加清晰。

## 相关技术生态

- [Vue3](https://v3.cn.vuejs.org/) 采用 Vue 最新版本
- [Vite](https://vitejs.dev/) 适合于 Vue3.0 的下一代前端开发构建工具
- [Vue-Router](https://router.vuejs.org/zh/) Vue 路由管理
- [Pinia](https://pinia.vuejs.org/) 新一代 Vue 状态管理机制，后续的 Vuex5
- [Axios](https://axios-http.com/) 前端 http 请求库
- [Mockjs](http://mockjs.com/) 前端模拟请求方案

<hr>

# letjs 开发实践

## 组件怎么划分？

1.  页面->父组件-子组件->孙组件->元件
1.  页面只是layout，选择布局，嵌入各个子组件
1.  页面与service对应

## 单独复杂业务组件怎么写？

1.  高内聚，UI、数据处理。
1.  传入props
1.  可以开放api获取
1.  通用配置能力

## compositioin怎么写？

1.  负责传递service数据给页面
1.  整合通用方法传递组件

## service怎么写？

1.  service与compostion、页面、以及api对应
1.  service负责store调用、数据处理与传递
1.  service负责domain实例化与格式化
1.  数据由页面从service里获取再传递给子组件和孙组件
1.  通过页面组件来调用service，子组件不直接调用service
1.  全局组件可以直接调用service，无需经过页面传递
1.  独立的业务插件则自己发起数据请求和数据处理，无需依赖service和api

## domain怎么写？

1.  负责处理某一类事物的模型集合，都是class
1.  domain可以根据需要单独建立一个子目录
1.  包括model与domiain service
1.  model偏向数据规范与基本方法
1.  domain service偏向业务逻辑处理与domain内部的model分发

## 数据如何传递？

1.  从服务端获取数据由service调用api获取原始数据，经过service format为domain，经过domain处理之后，再传递给页面，页面通过props给组件和子组件
1.  从页面获取数据由组件获取原始数据，通过emit传递给service，service forma为domain，再通过api提交给后端
1.  页面全局数据或跨组件的响应式数据，通过store传递，命名规则根据模块+组件来命名，其他数据无需通过store
1.  页面和组件不直接跟store打交道，只跟service打交道

## 开发顺序

1.  先确定UI稿，确认页面交互与后端API
1.  再开始规划前端目录和文件
1.  确定domain和service
1.  写页面和通用组件
1.  写子组件和独立业务组件
