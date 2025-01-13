module.exports = {
    rules: {
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'import/no-cycle': 'off',
        'import/no-extraneous-dependencies': ['error', { includeTypes: true }],
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': 'off',
    },
};
