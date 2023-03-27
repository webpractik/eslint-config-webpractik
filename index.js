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
        'airbnb',
        'airbnb/hooks',
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:no-use-extend-native/recommended',
        'plugin:react-prefer-function-component/recommended',
        'plugin:xss/recommended',
        'plugin:sonarjs/recommended',
        'plugin:lodash/recommended'
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
        'no-use-extend-native',
        'react-prefer-function-component',
        'xss',
        'no-secrets',
        'sonarjs',
        'lodash'
    ],
    rules: {
        'no-duplicate-imports': 'error',
        'no-unused-vars': 'off',
        'no-empty-pattern': 'error',
        'no-use-before-define': 'off',
        'no-underscore-dangle': 'off',
        'no-shadow': 'off',
        'no-console': ['warn', { allow: ['error'] }],
        'no-magic-numbers': [
            'warn',
            {
                ignoreArrayIndexes: true,
                ignoreDefaultValues: true,
                ignore: [-1, 0, 1, 2, 200, 400, 403, 404, 500],
            },
        ],
        yoda: 'error',
        'max-len': [
            2,
            {
                code: 120,
                ignoreUrls: true,
            },
        ],
        'max-depth': ['error', 2],
        'consistent-return': ['error'],
        'class-methods-use-this': 'warn',
        'react/no-array-index-key': 'warn',
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': [
            'warn',
            {
                html: 'ignore',
                custom: 'enforce',
                explicitSpread: 'enforce',
                exceptions: ['Component', 'DefaultSeo', 'StoreProvider', 'ErrorBoundary'],
            },
        ],
        'react/no-danger': 'off',
        'react/display-name': 'off',
        'react/no-unescaped-entities': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react/prop-types': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/require-default-props': 'off',
        'react/jsx-no-useless-fragment': [
            'error',
            {
                allowExpressions: true,
            },
        ],
        'react/jsx-sort-props': [
            'warn',
            {
                shorthandFirst: true,
                callbacksLast: true,
                multiline: 'last',
                noSortAlphabetically: true,
                reservedFirst: true,
            },
        ],
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'import/no-cycle': 'off',
        'import/no-extraneous-dependencies': ['error', { includeTypes: true }],
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/mouse-events-have-key-events': 'off',
        'prettier/prettier': 'error',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'error',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'lodash/prefer-lodash-method': 'off',
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
