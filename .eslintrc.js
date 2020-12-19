module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  parser: '@typescript-eslint/parser',
  env: {
    node: true
  },
  extends: [
    'standard',
    'prettier',
    'prettier/standard',
    'plugin:jest/recommended',
    '@typescript-eslint'
  ],
  plugins: ['prettier', 'jest'],
  rules: {
    'promise/catch-or-return': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true
      }
    ]
  }
};
