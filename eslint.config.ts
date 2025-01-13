import eslintReact from '@eslint-react/eslint-plugin';
import eslintJs from '@eslint/js';
import preferEarlyReturn from '@regru/eslint-plugin-prefer-early-return';
import stylistic from '@stylistic/eslint-plugin';
import vitest from '@vitest/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import perfectionist from 'eslint-plugin-perfectionist';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import sonarjs from 'eslint-plugin-sonarjs';
import storybook from 'eslint-plugin-storybook';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import { baseRules } from './rules/base';
import { importRules } from './rules/import';
import { reactRules } from './rules/react';
import { sonarRules } from './rules/sonar';
import { stylisticRules } from './rules/stylistic';
import { tsRules } from './rules/typescript';
import { unicornRules } from './rules/unicorn';
import { vitestRules } from './rules/vitest';

const fileTypes = `**/*{js,mjs,cjs,ts,mts,cts,jsx,tsx,mtsx,mjsx}`;

export default tseslint.config(
    {
        extends: [eslintJs.configs.recommended],
        files: [fileTypes],
    },
    {
        files: [fileTypes],
        rules: baseRules,
    },
    {
        extends: tseslint.configs.strictTypeChecked,
        files: [fileTypes],
    },
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
        rules: tsRules,
    },
    {
        files: [fileTypes],
        plugins: { '@stylistic': stylistic },
        rules: stylisticRules,
    },
    {
        files: [fileTypes],
        plugins: { '@regru/prefer-early-return': preferEarlyReturn },
        rules: {
            '@regru/prefer-early-return/prefer-early-return': [2, { maximumStatements: 1 }],
        },
    },
    {
        files: [fileTypes],
        languageOptions: {
            globals: globals.builtin,
        },
        plugins: { unicorn },
        rules: {
            ...unicorn.configs['flat/recommended'].rules,
            ...unicornRules,
        },
    },
    {
        files: [fileTypes],
        plugins: { sonarjs },
        rules: {
            ...sonarjs.configs.recommended.rules,
            ...sonarRules,
        },
    },
    {
        files: [fileTypes],
        plugins: { perfectionist },
        rules: {
            ...perfectionist.configs['recommended-alphabetical'].rules,
        },
    },
    {
        files: [fileTypes],
        plugins: { import: importPlugin },
        rules: importRules,
        settings: {
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx', '.mts', 'cts'],
                espree: ['.js'],
            },
            'import/resolver': {
                node: true,
                typescript: {
                    alwaysTryTypes: true,
                },
            },
        },
    },
    {
        files: [fileTypes],
        plugins: {
            'unused-imports': unusedImports,
        },
        rules: {
            'no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'warn',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                    vars: 'all',
                    varsIgnorePattern: '^_',
                },
            ],
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
        files: [
            `**/*.{test,spec}.{${fileTypes}}`,
            `**/tests/**/*.{${fileTypes}}`,
            `**/__tests__/**/*.{${fileTypes}}`,
        ],
        plugins: { vitest },
        rules: { ...vitest.configs.recommended.rules, ...vitestRules },
    },
    {
        files: ['**/*.d.ts'],
        rules: {
            'import/no-default-export': 0,
        },
    },
    {
        files: ['**/*.config.*'],
        rules: {
            'arrow-return-style/no-export-default-arrow': 0,
            'import/no-anonymous-default-export': 0,
            'import/no-default-export': 0,
        },
    },
    {
        files: [fileTypes],
        linterOptions: {
            reportUnusedDisableDirectives: 'error',
        },
    },
    // React

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
        files: ['**/*.stories.tsx'],
        plugins: { 'react-refresh': reactRefresh },
        rules: {
            'react-refresh/only-export-components': 0,
        },
    }
);
