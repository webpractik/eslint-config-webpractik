import baseConfig from '@webpractik/eslint-config';
import eslintReact from '@eslint-react/eslint-plugin';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactPerf from 'eslint-plugin-react-perf';
import reactCompiler from 'eslint-plugin-react-compiler';
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
                jsxPragma: null,
                project: true,
                projectService: true,
            },
        },
    },
    {
        files: [fileTypes],
        ...eslintReact.configs.recommended,
    },
    {
        rules: {
            '@eslint-react/no-leaked-conditional-rendering': 2,
            '@eslint-react/no-class-component': 2,
            '@eslint-react/no-complex-conditional-rendering': 2,
            '@eslint-react/hooks-extra/ensure-custom-hooks-using-other-hooks': 2,
            '@eslint-react/hooks-extra/no-unnecessary-use-callback': 2,
            '@eslint-react/hooks-extra/no-unnecessary-use-memo': 2,
        },
    },
    {
        files: [fileTypes],
        plugins: { react },
        rules: {
            ...react.configs.flat?.recommended.rules,
            ...reactRules,
        },
        settings: {
            react: { version: 'detect' },
        },
    },
    {
        files: [fileTypes],
        ...reactPerf.configs.flat.recommended,
    },
    {
        rules: {
            'react-perf/jsx-no-new-object-as-prop': 1,
            'react-perf/jsx-no-new-array-as-prop': 1,
            'react-perf/jsx-no-new-function-as-prop': 1,
            'react-perf/jsx-no-jsx-as-prop': 1,
        },
    },
    reactCompiler.configs.recommended,
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
        rules: {
            ...jsxA11y.flatConfigs.recommended.rules,
            'jsx-a11y/mouse-events-have-key-events': 0,
            'jsx-a11y/click-events-have-key-events': 0,
            'jsx-a11y/anchor-is-valid': 0,
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
        files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)', '**/*.story.@(ts|tsx|js|jsx|mjs|cjs)'],
        plugins: { storybook },
        rules: {
            ...storybook.configs['flat/recommended'][1].rules,
            ...storybook.configs['flat/csf'][1].rules,
        },
    },
];
