module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 要求或禁止函数圆括号之前有一个空格
    'space-before-function-paren': ['error', 'never'],
    // 关闭组件命名规则
    'vue/multi-word-component-names': 'off'
  }
}
