import reactConfig from '@wp/eslint-config-react';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
});

export default [
    ...reactConfig,
    ...compat.config({ extends: ['plugin:@next/next/recommended'] }),
    {
        rules: {
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
