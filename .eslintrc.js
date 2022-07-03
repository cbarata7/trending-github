module.exports = {
    env: {
        browser: true,
    },
    extends: [
        'react-app',
        'prettier',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'prettier',
        'react-hooks',
        'simple-import-sort',
        'sort-keys-fix',
    ],
    rules: {
        'prettier/prettier': 'error',
        semi: 'off',
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': 'error',
        'sort-keys-fix/sort-keys-fix': 'warn',
    },
}
