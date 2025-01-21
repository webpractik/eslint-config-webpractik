import tseslint from 'typescript-eslint';
import eslintJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import perfectionist from 'eslint-plugin-perfectionist';
import preferEarlyReturn from '@regru/eslint-plugin-prefer-early-return';
import unicorn from 'eslint-plugin-unicorn';
import sonarjs from 'eslint-plugin-sonarjs';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import vitest from '@vitest/eslint-plugin';
import * as regexpPlugin from 'eslint-plugin-regexp';
import pluginPromise from 'eslint-plugin-promise';

import baseRules from './rules/base.js';
import importRules from './rules/import.js';
import sonarRules from './rules/sonar.js';
import stylisticRules from './rules/stylistic.js';
import tsRules from './rules/typescript.js';
import unicornRules from './rules/unicorn.js';
import vitestRules from './rules/vitest.js';

const fileTypes = `**/*{js,mjs,cjs,ts,mts,cts,jsx,tsx,mtsx,mjsx}`;

export default tseslint.config(
    {
        files: [fileTypes],
        extends: [eslintJs.configs.recommended, tseslint.configs.strictTypeChecked],
        rules: {
            ...baseRules,
            ...tsRules,
        },
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
        ...unicorn.configs['flat/recommended'],
    },
    {
        rules: unicornRules,
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
            'perfectionist/sort-modules': 0,
        },
    },

    {
        files: [fileTypes],
        ...regexpPlugin.configs['flat/recommended'],
    },

    pluginPromise.configs['flat/recommended'],

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
        files: [
            `**/*.{test,spec}.{${fileTypes}}`,
            `**/tests/**/*.{${fileTypes}}`,
            `**/__tests__/**/*.{${fileTypes}}`,
        ],
        plugins: { vitest },
        rules: { ...vitest.configs.recommended.rules, ...vitestRules },
    },

    {
        files: [fileTypes],
        linterOptions: {
            reportUnusedDisableDirectives: 'error',
        },
    }
);
