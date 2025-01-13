import type { TSESLint } from '@typescript-eslint/utils';

export const stylisticRules = {
    '@stylistic/padding-line-between-statements': [
        2,
        { blankLine: 'always', prev: ['const', 'let'], next: '*' },
        {
            blankLine: 'any',
            prev: ['const', 'let'],
            next: ['const', 'let'],
        },

        { blankLine: 'always', prev: '*', next: 'return' },
    ],
} as const satisfies TSESLint.FlatConfig.Rules;
