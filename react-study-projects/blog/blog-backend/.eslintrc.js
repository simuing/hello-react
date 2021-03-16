const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  settings: {
    "import/resolver": {
      node: { paths: [path.resolve('./src')] }
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-unused-vars": 1,
    "comma-dangle": 0,
    "eol-last": 0,
    "no-console": 0
  },
};
