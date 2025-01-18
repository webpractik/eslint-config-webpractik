export default {
    'react/checked-requires-onchange-or-readonly': 2,
    'react/jsx-no-leaked-render': [2, { validStrategies: ['coerce', 'ternary'] }],
    'react/destructuring-assignment': 2,
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/hook-use-state': 2,
    'react/jsx-boolean-value': 2,
    'react/jsx-filename-extension': [
        2,
        {
            extensions: ['.jsx', '.tsx', '.mtsx', '.mjsx'],
        },
    ],
    'react/jsx-fragments': 2,
    'react/jsx-key': [2, { checkFragmentShorthand: true, warnOnDuplicates: true }],
    'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
    'react/jsx-sort-props': [
        2,
        {
            callbacksLast: true,
            ignoreCase: true,
            multiline: 'last',
            noSortAlphabetically: true,
            reservedFirst: false,
            shorthandFirst: true,
            shorthandLast: false,
        },
    ],
    'react/no-array-index-key': 2,
    'react/no-multi-comp': 2,
    'react/no-this-in-sfc': 2,
    'react/no-unstable-nested-components': [2, { allowAsProps: false }],
    'react/prop-types': 0,
};
