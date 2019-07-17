module.exports = {
  root: true,
  parserOptions: {
    parser: require.resolve('babel-eslint'),
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  plugins: ['prettier'],
  globals: {
    __WEEX__: true,
    WXEnvironment: true
  },
  rules: {
    'no-console': process.env.NODE_ENV !== 'production' ? 0 : 2,
    'no-useless-escape': 0,
    'no-empty': 0,
    semi: ['error', 'always'], //check ; dong code
    'jsx-quotes': ['error', 'prefer-single'] //check prefer-double for "" , prefer-single for ''
  }
};
