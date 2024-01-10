module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:testing-library/react',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'testing-library', 'jest', 'jest-dom', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': ['error', { caseSensitive: false }],
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  ignorePatterns: ['public'],
};
