import type { TSESLint } from '@typescript-eslint/utils';

export const baseRules = {
    // disabled
    'no-return-await': 0,
    'no-use-before-define': 0,
    'no-unused-expressions': 0,
    'no-empty-function': 0,
    'dot-notation': 0,
    'no-shadow': 0,
    'default-param-last': 0,
    'arrow-body-style': 0,

    'func-style': 2,
    'no-promise-executor-return': 2,
    'no-unreachable-loop': 2,
    'no-caller': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-implicit-coercion': 2,
    'no-multi-str': 2,
    'no-negated-condition': 2,
    'no-new-wrappers': 2,
    'no-new-object': 2,
    strict: [2, 'never'],
    'no-octal-escape': 2,
    'no-proto': 2,
    'no-sequences': [2, { allowInParentheses: false }],
    'no-unmodified-loop-condition': 2,
    'no-void': 2,
    'no-array-constructor': 2,
    'no-multi-assign': 2,
    'no-plusplus': 2,
    'prefer-destructuring': [
        2,
        {
            VariableDeclarator: {
                array: false,
                object: true,
            },
            AssignmentExpression: {
                array: false,
                object: false,
            },
        },
        {
            enforceForRenamedProperties: false,
        },
    ],
    'no-useless-call': 2,
    'prefer-object-has-own': 2,
    'no-constant-binary-expression': 2,
    'no-lone-blocks': 2,
    'no-eval': 2,
    'no-return-assign': [2, 'always'],
    'no-else-return': [2, { allowElseIf: false }],
    'prefer-template': 2,
    'operator-assignment': [2, 'never'],
    'logical-assignment-operators': [2, 'never'],
    'prefer-object-spread': 2,
    'prefer-rest-params': 2,
    'no-param-reassign': 2,
    'no-redeclare': 2,
    'no-useless-computed-key': 2,
    'array-callback-return': [2, { allowImplicit: true, checkForEach: true }],
    'object-shorthand': 2,
    'no-unneeded-ternary': [2, { defaultAssignment: false }],
    'require-atomic-updates': 2,
    'no-nested-ternary': 2,
    'no-console': [2, { allow: ['warn', 'error', 'debug', 'info', 'table'] }],
    curly: [2, 'all'],
    eqeqeq: 2,
    'prefer-arrow-callback': 2,
    'no-useless-assignment': 2,
    'no-restricted-imports': [
        2,
        {
            paths: [
                {
                    name: 'prop-types',
                    message: 'Dont use prop-types. Use Typescript instead.',
                },
            ],
            patterns: [
                {
                    group: ['node_modules'],
                    message: 'Imports from node_modules are likely a user mistake.',
                    importNamePattern: '^',
                },
                {
                    group: ['dist'],
                    message: 'Imports from dist are likely a user mistake.',
                    importNamePattern: '^',
                },
            ],
        },
    ],
    'no-restricted-properties': [
        2,
        {
            object: 'global',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead',
        },
        {
            object: 'self',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead',
        },
        {
            object: 'window',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead',
        },
        {
            object: 'global',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead',
        },
        {
            object: 'self',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead',
        },
        {
            object: 'window',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead',
        },
    ],
    'no-restricted-syntax': [
        2,
        {
            selector: 'LabeledStatement',
            message:
                'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        },
        {
            selector: 'ForInStatement',
            message:
                'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        },
        {
            selector: "Identifier[name='Reflect']",
            message:
                'Avoid the Reflect API. It is a very low-level feature that has only rare and specific use-cases if building complex and hacky libraries. There is no need to use this feature for any kind of normal development.',
        },
        {
            selector: "Identifier[name='Proxy']",
            message: 'Avoid Proxy.',
        },
        {
            selector: "BinaryExpression[operator='in']",
            message:
                "Avoid the 'in' operator. In real-world scenarios there is rarely a need for this operator. For most usecases, basic property access is all you need. For every other case, use the Object.hasOwn() or the Object.prototype.hasOwnProperty() method. In the really niche cases where you actually need to check for the existence of a property both in the object itself AND in it's prototype chain, feel free to disable this rule with the inline eslint-disable syntax.",
        },
        {
            selector: "PropertyDefinition[accessibility='public']",
            message:
                'Avoid access modifiers. In Javascript modules there is no need to limit developer access to properties.',
        },
        {
            selector: "PropertyDefinition[accessibility='protected']",
            message:
                'Avoid access modifiers. In Javascript modules there is no need to limit developer access to properties.',
        },
        {
            selector: "PropertyDefinition[accessibility='private']",
            message:
                'Avoid access modifiers. In Javascript modules there is no need to limit developer access to properties.',
        },
        {
            selector: "Identifier[name='PropTypes']",
            message: 'Avoid PropTypes. Use Typescript instead.',
        },
        {
            selector: "Identifier[name='propTypes']",
            message: 'Avoid PropTypes. Use Typescript instead.',
        },
        {
            selector: "UnaryExpression[operator='delete']",
            message: 'Avoid the "delete" operator. Use omit() instead.',
        },
        {
            selector: 'TSEnumDeclaration',
            message: 'Avoid enums.',
        },
        {
            selector: 'ClassDeclaration',
            message: 'Avoid classes. Use functions and objects instead.',
        },
        {
            selector: 'ClassExpression',
            message: 'Avoid classes. Use functions and objects instead.',
        },
    ],
} as const satisfies TSESLint.FlatConfig.Rules;
