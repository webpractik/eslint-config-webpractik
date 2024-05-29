module.exports = {
    env: {
        browser: true,
        node: true,
        es2022: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:xss/recommended',
        'plugin:sonarjs/recommended',
        'plugin:storybook/recommended',
        'plugin:unicorn/recommended',
        'plugin:compat/recommended',
        require.resolve('./rules/best-practice'),
        require.resolve('./rules/react'),
        require.resolve('./rules/import'),
        require.resolve('./rules/unicorn'),
    ],
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'prettier',
        'jsx-a11y',
        'import',
        'simple-import-sort',
        'unused-imports',
        'xss',
        'no-secrets',
        'sonarjs',
        'compat',
        'unicorn',
    ],
    rules: {
        'prettier/prettier': 'error',

        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
        '@typescript-eslint/no-unused-vars': 'error',

        'xss/no-mixed-html': [
            2,
            {
                functions: {
                    sanitize: {
                        htmlOutput: true,
                    },
                },
            },
        ],

        'no-secrets/no-secrets': 'error',
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                project: './',
            },
        },
        react: {
            version: 'detect',
        },
    },
    globals: {
        window: true,
    },
};
