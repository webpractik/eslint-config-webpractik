import baseConfig from '@webpractik/eslint-config';
import nodePlugin from 'eslint-plugin-n';

export default [
    ...baseConfig,
    nodePlugin.configs['flat/recommended-script'],
    {
        rules: {
            'n/exports-style': ['error', 'module.exports'],
        },
    },
];
