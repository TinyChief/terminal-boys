module.exports = {
  root: true,
  extends: [
    // 'standard',
    'eslint:recommended',
    'plugin:vue/recommended',
    // 'plugin:prettier/recommended',
    // 'prettier/standard',
    // 'prettier/vue',
    // 'prettier',
    'standard'
  ],
  plugins: ['vue'],

  env: {
    browser: true,
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off'
    // prettier: "error"
  }
}
