module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 0,
    'react/jsx-one-expression-per-line': 0,
    'linebreak-style': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'comma-dangle': 0,
    'object-curly-newline': 0,
    'import/no-duplicates': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
  },
};
