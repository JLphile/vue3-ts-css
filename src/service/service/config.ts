// 方式一：手动切换不同的环境(不推荐)

// const BASE_URL = 'http://coderwhy.org/dev'
// const BASE_NAME = 'Tom'

// const BASE_URL = 'http://coderwhy.org/prod'
// const BASE_NAME = 'Lily'

// const BASE_URL = 'http://coderwhy.org/test'
// const BASE_NAME = 'james'

// 方法2.根据process.env.Node_ENV在不同环境下的注入值不同来区分(推荐)
// 开发环境：development
// 生成环境：production
// 测试环境：test

// let BASE_URL = ''
// let BASE_NAME = ''

// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://coderwhy.org/dev'
//   BASE_NAME = 'Tom'
// } else if (process.env.NODE_ENV === 'production') {
//   BASE_URL = 'http://coderwhy.org/prod'
//   BASE_NAME = 'Lily'
// } else {
//   BASE_URL = 'http://coderwhy.org/test'
//   BASE_NAME = 'james'
// }

// export { BASE_URL, BASE_NAME }
