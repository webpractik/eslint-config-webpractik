export default {
    'import/extensions': 0,
    'import/first': 2,
    // https://github.com/import-js/eslint-plugin-import/issues/2913
    // https://github.com/import-js/eslint-plugin-import/issues/2673
    'import/newline-after-import': 2,
    'import/no-anonymous-default-export': 2,
    'import/no-cycle': 2,
    'import/no-default-export': 0,
    'import/no-duplicates': [2, { 'prefer-inline': true }],
    'import/no-extraneous-dependencies': ['error', { includeTypes: true }],
    'import/no-named-as-default': 2,
    'import/no-useless-path-segments': [2, { noUselessIndex: true }],
    'import/prefer-default-export': 0,
};
