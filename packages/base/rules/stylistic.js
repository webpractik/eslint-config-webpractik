export default {
    '@stylistic/padding-line-between-statements': [
        2,
        { blankLine: 'always', next: '*', prev: ['const', 'let'] },
        {
            blankLine: 'any',
            next: ['const', 'let'],
            prev: ['const', 'let'],
        },

        { blankLine: 'always', next: 'return', prev: '*' },
    ],
};
