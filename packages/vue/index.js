import baseConfig from '@webpractik/eslint-config';
import vuePlugin from 'eslint-plugin-vue';

export default [
    ...baseConfig,
    {
        files: ['**/*.vue'],
        plugins: {
            vue: vuePlugin,
        },
        rules: vuePlugin.configs['flat/essential'].rules,
    },
];
