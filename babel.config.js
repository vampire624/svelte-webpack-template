module.exports = {
  presets: ['@babel/preset-env'],
  sourceType: 'unambiguous',
  plugins: [
    ['@babel/plugin-syntax-dynamic-import', { useESModules: true }],
    '@babel/plugin-transform-runtime'
  ]
}