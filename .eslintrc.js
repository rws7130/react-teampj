module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
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
  plugins: ['react', 'testing-library', 'jest-dom', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': ['off'],
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['public'],
};
