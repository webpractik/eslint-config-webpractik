export default {
    'array-callback-return': [2, { allowImplicit: true, checkForEach: true }],
    'arrow-body-style': 0,
    curly: [2, 'all'],
    'default-param-last': 0,
    'dot-notation': 0,
    eqeqeq: 2,
    'func-style': 0,
    'logical-assignment-operators': [2, 'never'],

    'no-array-constructor': 2,
    'no-caller': 2,
    'no-console': [2, { allow: ['warn', 'error', 'debug', 'info', 'table'] }],
    'no-constant-binary-expression': 2,
    'no-else-return': [2, { allowElseIf: false }],
    'no-empty-function': 0,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-implicit-coercion': 2,
    'no-lone-blocks': 2,
    'no-multi-assign': 2,
    'no-multi-str': 2,
    'no-negated-condition': 2,
    'no-nested-ternary': 2,
    'no-new-object': 0,
    'no-new-symbol': 0,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-plusplus': 2,
    'no-promise-executor-return': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-restricted-imports': [
        2,
        {
            paths: [
                {
                    message: 'Dont use prop-types. Use Typescript instead.',
                    name: 'prop-types',
                },
            ],
            patterns: [
                {
                    group: ['node_modules'],
                    importNamePattern: '^',
                    message: 'Imports from node_modules are likely a user mistake.',
                },
                {
                    group: ['dist'],
                    importNamePattern: '^',
                    message: 'Imports from dist are likely a user mistake.',
                },
            ],
        },
    ],
    'no-restricted-properties': [
        2,
        {
            message: 'Please use Number.isFinite instead',
            object: 'global',
            property: 'isFinite',
        },
        {
            message: 'Please use Number.isFinite instead',
            object: 'self',
            property: 'isFinite',
        },
        {
            message: 'Please use Number.isFinite instead',
            object: 'window',
            property: 'isFinite',
        },
        {
            message: 'Please use Number.isNaN instead',
            object: 'global',
            property: 'isNaN',
        },
        {
            message: 'Please use Number.isNaN instead',
            object: 'self',
            property: 'isNaN',
        },
        {
            message: 'Please use Number.isNaN instead',
            object: 'window',
            property: 'isNaN',
        },
    ],
    'no-restricted-syntax': [
        2,
        {
            message:
                'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            selector: 'LabeledStatement',
        },
        {
            message:
                'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            selector: 'ForInStatement',
        },
        {
            message:
                'Avoid the Reflect API. It is a very low-level feature that has only rare and specific use-cases if building complex and hacky libraries. There is no need to use this feature for any kind of normal development.',
            selector: "Identifier[name='Reflect']",
        },
        {
            message: 'Avoid Proxy.',
            selector: "Identifier[name='Proxy']",
        },
        {
            message:
                "Avoid the 'in' operator. In real-world scenarios there is rarely a need for this operator. For most usecases, basic property access is all you need. For every other case, use the Object.hasOwn() or the Object.prototype.hasOwnProperty() method. In the really niche cases where you actually need to check for the existence of a property both in the object itself AND in it's prototype chain, feel free to disable this rule with the inline eslint-disable syntax.",
            selector: "BinaryExpression[operator='in']",
        },
        {
            message: 'Avoid PropTypes. Use Typescript instead.',
            selector: "Identifier[name='PropTypes']",
        },
        {
            message: 'Avoid PropTypes. Use Typescript instead.',
            selector: "Identifier[name='propTypes']",
        },
        {
            message: 'Avoid the "delete" operator. Use omit() instead.',
            selector: "UnaryExpression[operator='delete']",
        },
        {
            message: 'Avoid enums.',
            selector: 'TSEnumDeclaration',
        },
    ],
    'no-return-assign': [2, 'always'],
    // disabled
    'no-return-await': 0,
    'no-sequences': [2, { allowInParentheses: false }],
    'no-shadow': 0,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, { defaultAssignment: false }],
    'no-unreachable-loop': 2,
    'no-unused-expressions': 0,
    'no-use-before-define': 0,
    'no-useless-assignment': 2,
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-void': 2,
    'object-shorthand': 2,
    'operator-assignment': [2, 'never'],
    'prefer-arrow-callback': 2,
    'prefer-destructuring': [
        2,
        {
            AssignmentExpression: {
                array: false,
                object: false,
            },
            VariableDeclarator: {
                array: false,
                object: true,
            },
        },
        {
            enforceForRenamedProperties: false,
        },
    ],
    'prefer-object-has-own': 2,
    'prefer-object-spread': 2,
    'prefer-rest-params': 2,
    'prefer-template': 2,
    'require-atomic-updates': 2,
    strict: [2, 'never'],
};
