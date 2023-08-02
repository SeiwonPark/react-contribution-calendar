module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-refresh', 'eslint-plugin-prettier', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    /* Offs */
    'react/react-in-jsx-scope': 'off',
    /* Warns */
    'prettier/prettier': 'warn',
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    /* Errors */
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
}
