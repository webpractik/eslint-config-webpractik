export default {
    'react/prop-types': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    // prefer perfectionist sort
    'react/jsx-sort-props': 0,
    'react/no-multi-comp': 0,

    'react/checked-requires-onchange-or-readonly': 2,
    'react/jsx-no-leaked-render': [2, { validStrategies: ['coerce', 'ternary'] }],
    'react/destructuring-assignment': 2,
    'react/function-component-definition': [2, { namedComponents: 'function-declaration' }],
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
    'react/no-array-index-key': 2,
    'react/no-this-in-sfc': 2,
    'react/no-unstable-nested-components': [2, { allowAsProps: false }],
};
