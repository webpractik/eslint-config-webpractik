export default {
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/no-array-constructor': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/no-require-imports': 0,
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 0,

    '@typescript-eslint/array-type': 2,
    '@typescript-eslint/ban-ts-comment': [
        2,
        {
            'ts-check': false,
            'ts-expect-error': false,
            'ts-ignore': true,
            'ts-nocheck': false,
        },
    ],
    '@typescript-eslint/consistent-type-assertions': 2,
    '@typescript-eslint/consistent-type-definitions': [2, 'type'],
    '@typescript-eslint/consistent-type-exports': [
        2,
        { fixMixedExportsWithInlineTypeSpecifier: true },
    ],
    '@typescript-eslint/consistent-type-imports': [
        2,
        {
            fixStyle: 'inline-type-imports',
        },
    ],
    '@typescript-eslint/default-param-last': 2,
    '@typescript-eslint/dot-notation': 2,
    '@typescript-eslint/method-signature-style': 2,
    '@typescript-eslint/no-empty-function': 2,
    '@typescript-eslint/no-empty-object-type': [
        2,
        {
            allowInterfaces: 'with-single-extends',
        },
    ],
    '@typescript-eslint/no-import-type-side-effects': 2,
    '@typescript-eslint/no-inferrable-types': 2,
    '@typescript-eslint/no-loop-func': 2,
    '@typescript-eslint/no-shadow': [
        2,
        {
            allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
            hoist: 'all',
            ignoreFunctionTypeParameterNameValueShadow: true,
            ignoreTypeValueShadow: true,
        },
    ],
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unused-expressions': [
        2,
        {
            allowShortCircuit: true,
            allowTaggedTemplates: true,
            allowTernary: true,
            enforceForJSX: true,
        },
    ],
    '@typescript-eslint/no-use-before-define': [2, { allowNamedExports: true }],
    '@typescript-eslint/prefer-function-type': 2,
    '@typescript-eslint/prefer-nullish-coalescing': [2, { ignorePrimitives: true }],
    '@typescript-eslint/prefer-optional-chain': 2,
    '@typescript-eslint/prefer-string-starts-ends-with': 2,
    '@typescript-eslint/switch-exhaustiveness-check': 2,
};
