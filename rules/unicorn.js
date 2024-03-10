module.exports = {
    rules: {
        'unicorn/prevent-abbreviations': [
            'error',
            {
                replacements: {
                    props: false,
                    ref: false,
                    params: false,
                },
            },
        ],
        'unicorn/no-null': 'off',
        'unicorn/no-array-for-each': 'off',
    },
};
