const babelOptions = {
  presets: ['@babel/preset-react', '@babel/preset-env'],
  plugins: ['require-context-hook'],
}

console.log('aman')
module.exports = require('babel-jest').createTransformer(babelOptions)
