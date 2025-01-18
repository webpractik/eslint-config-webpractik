import baseConfig from '@wp/eslint-config-wp';
import eslintReact from '@eslint-react/eslint-plugin';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import reactRules from './rules/react.js';

const fileTypes = `**/*{js,mjs,cjs,ts,mts,cts,jsx,tsx,mtsx,mjsx}`;

export default [
    ...baseConfig,
    {
        files: [fileTypes],
        languageOptions: {
            globals: {
                ...globals.browser,
            },
            parser: tseslint.parser,
            parserOptions: {
                ecmaFeatures: { jsx: true, modules: true },
                jsxPragma: null, // useful for typescript x react@17 https://github.com/jsx-eslint/eslint-plugin-react/blob/8cf47a8ac2242ee00ea36eac4b6ae51956ba4411/index.js#L165-L179
                project: true,
            },
        },
    },
    {
        files: [fileTypes],
        plugins: { react },
        rules: {
            ...react.configs.flat?.recommended.rules,
            ...react.configs.flat?.['jsx-runtime'].rules,
            ...reactRules,
        },
        settings: {
            react: { version: 'detect' },
        },
    },
    {
        files: [fileTypes],
        plugins: { 'react-refresh': reactRefresh },
        rules: {
            'react-refresh/only-export-components': 2,
        },
    },
    {
        files: [fileTypes],
        ...jsxA11y.flatConfigs.recommended,
        languageOptions: {
            ...jsxA11y.flatConfigs.recommended.languageOptions,
            globals: {
                ...globals.serviceworker,
                ...globals.browser,
            },
        },
    },
    {
        files: [fileTypes],
        plugins: {
            'react-hooks': reactHooks,
        },
        rules: reactHooks.configs.recommended.rules,
    },
    {
        files: [fileTypes],
        plugins: {
            '@eslint-react': eslintReact.configs.all.plugins['@eslint-react'],
            '@eslint-react/hooks-extra':
                eslintReact.configs.all.plugins['@eslint-react/hooks-extra'],
        },
        rules: {
            '@eslint-react/hooks-extra/ensure-custom-hooks-using-other-hooks': 2,
            '@eslint-react/no-leaked-conditional-rendering': 2,
        },
    },
    {
        files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)', '**/*.story.@(ts|tsx|js|jsx|mjs|cjs)'],
        plugins: { storybook },
        rules: {
            ...storybook.configs['flat/recommended'][1].rules,
            ...storybook.configs['flat/csf'][1].rules,
            'import/no-default-export': 0,
        },
    },
    {
        files: ['**/.storybook/main.@(js|cjs|mjs|ts)'],
        rules: { ...storybook.configs['flat/recommended'][2].rules },
    },
    {
        files: ['**/*.stories.tsx'],
        plugins: { 'react-refresh': reactRefresh },
        rules: {
            'react-refresh/only-export-components': 0,
        },
    },
];
