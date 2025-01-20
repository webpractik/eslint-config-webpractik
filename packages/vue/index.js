import baseConfig from '@wp/eslint-config-wp';
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
