import { TSESLint } from '@typescript-eslint/utils';

export const tsRules = {
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-array-constructor': 0,
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 0,
    '@typescript-eslint/no-require-imports': 0, // eventually we will enable https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md instead
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/ban-ts-comment': [
        2,
        {
            'ts-expect-error': false,
            'ts-ignore': true,
            'ts-nocheck': false,
            'ts-check': false,
        },
    ],
    '@typescript-eslint/no-use-before-define': 2,
    '@typescript-eslint/no-inferrable-types': 2,
    '@typescript-eslint/no-loop-func': 2,
    '@typescript-eslint/prefer-function-type': 2,
    '@typescript-eslint/prefer-string-starts-ends-with': 2,
    '@typescript-eslint/consistent-type-definitions': 2,
    '@typescript-eslint/consistent-type-assertions': 2,
    '@typescript-eslint/consistent-type-imports': [
        2,
        {
            fixStyle: 'inline-type-imports',
        },
    ],
    '@typescript-eslint/consistent-type-exports': [
        2,
        { fixMixedExportsWithInlineTypeSpecifier: true },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 2,
    '@typescript-eslint/switch-exhaustiveness-check': 2,
    '@typescript-eslint/method-signature-style': 2,
    '@typescript-eslint/prefer-nullish-coalescing': [2, { ignorePrimitives: true }],
    '@typescript-eslint/no-unused-expressions': [
        2,
        {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
            enforceForJSX: true,
        },
    ],
    '@typescript-eslint/array-type': 2,
    '@typescript-eslint/no-empty-function': 2,
    '@typescript-eslint/prefer-optional-chain': 2,
    '@typescript-eslint/dot-notation': 2,
    '@typescript-eslint/no-import-type-side-effects': 2,
    '@typescript-eslint/default-param-last': 2,
    '@typescript-eslint/no-empty-object-type': [
        2,
        {
            allowInterfaces: 'with-single-extends',
        },
    ],
    '@typescript-eslint/no-shadow': [
        2,
        {
            hoist: 'all',
            allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
            ignoreTypeValueShadow: true,
            ignoreFunctionTypeParameterNameValueShadow: true,
        },
    ],
    '@typescript-eslint/naming-convention': [
        2,
        {
            selector: 'default',
            format: ['camelCase', 'StrictPascalCase'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
        },
        {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE'],
            modifiers: ['const'],
            types: ['string', 'number'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
        },
        {
            selector: 'objectLiteralProperty',
            format: null,
            leadingUnderscore: 'allowSingleOrDouble',
            trailingUnderscore: 'forbid',
        },
        {
            selector: 'typeLike',
            format: ['PascalCase'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
        },
        // https://typescript-eslint.io/rules/naming-convention/#enforce-that-boolean-variables-are-prefixed-with-an-allowed-verb
        {
            selector: 'variable',
            types: ['boolean'],
            format: ['PascalCase'],
            prefix: ['is', 'are', 'has', 'should', 'can'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
        },
        {
            selector: 'variable',
            modifiers: ['destructured'],
            format: null,
        },
        {
            selector: 'typeProperty',
            format: null,
        },
    ],
} as const satisfies TSESLint.FlatConfig.Rules;
