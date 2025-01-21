import baseConfig from '@webpractik/eslint-config';
import nodePlugin from 'eslint-plugin-node';

export default [
    ...baseConfig,
    nodePlugin.configs.recommended,
    {
        rules: {
            'n/exports-style': ['error', 'module.exports'],
        },
    },
];
