module.exports = {
    rules: {
        // DISABLED
        'react/react-in-jsx-scope': 'off',
        'react/no-danger': 'off',
        'react/display-name': 'off',
        'react/no-unescaped-entities': 'off',
        'react/prop-types': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/require-default-props': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/mouse-events-have-key-events': 'off',

        'react/button-has-type': 'warn',
        'react/no-array-index-key': 'warn',
        'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
        'react/hook-use-state': 'warn',
        'react/self-closing-comp': 'warn',
        'react/jsx-boolean-value': 'warn',
        'react/jsx-no-leaked-render': 'error',
        'react/jsx-pascal-case': 'warn',
        'react/jsx-no-useless-fragment': [
            'error',
            {
                allowExpressions: true,
            },
        ],
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
        'react/jsx-props-no-spreading': [
            'warn',
            {
                html: 'ignore',
                custom: 'enforce',
                explicitSpread: 'enforce',
                exceptions: ['Component', 'StoreProvider', 'Image', 'Link', 'ErrorBoundary'],
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
    },
};
