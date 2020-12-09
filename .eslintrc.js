module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  // rules: {
  //   // 'space-before-function-paren': 0,
  //   // 'indent': 'off',
  //   // 'no-multiple-empty-lines': 0,
  //   // 'space-before-function-paren': 0,
  //   // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  //   // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  // }
}