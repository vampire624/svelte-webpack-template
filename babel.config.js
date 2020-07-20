module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        /* 必须全局引入，因为使用了 webpack 的 splitChunks，webpack 自身会生成 Promise，babel-runtime 无法覆盖*/
        useBuiltIns: 'usage',
        corejs: 3  /* bable7 不推荐使用 babel-polyfill，直接引入 core-js 3，支持实例方法，如 ‘str’.includes('s') */
      }
    ]
  ],
  sourceType: 'unambiguous',
  plugins: [
    ['@babel/plugin-syntax-dynamic-import'],
    /* 使用 @babel/runtime-corejs3 依赖，babel7 推荐*/
    ['@babel/plugin-transform-runtime', { corejs: 3, useESModules: true }]
  ]
}