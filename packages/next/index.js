import reactConfig from '@wp/eslint-config-react';
import nextPlugin from '@next/eslint-plugin-next';

export default [
    ...reactConfig,
    {
        files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
        plugins: {
            '@next/next': nextPlugin,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            '@next/next/next-script-for-ga': 'error',
            '@next/next/no-async-client-component': 'error',
            '@next/next/no-before-interactive-script-outside-document': 'error',
            '@next/next/no-css-tags': 'error',
            '@next/next/no-head-element': 'error',
            '@next/next/no-html-link-for-pages': 'error',
            '@next/next/no-img-element': 'error',
            '@next/next/no-page-custom-font': 'error',
            '@next/next/no-styled-jsx-in-document': 'error',
            '@next/next/no-sync-scripts': 'error',
            '@next/next/no-title-in-document-head': 'error',
            '@next/next/no-typos': 'error',
            '@next/next/no-unwanted-polyfillio': 'error',
        },
    },
];
