module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ['@babel/plugin-syntax-dynamic-import', { useESModules: true }],
    '@babel/plugin-transform-runtime'
  ]
}