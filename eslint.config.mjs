import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import _import from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import noSecrets from "eslint-plugin-no-secrets";
import sonarjs from "eslint-plugin-sonarjs";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import eslintTs from 'typescript-eslint'
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
const __dirname = import.meta.dirname;
const tsPlugin = eslintTs.plugin
const tsParser = eslintTs.parser
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});


export default [...fixupConfigRules(compat.extends(
    "prettier",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:sonarjs/recommended-legacy",
    "plugin:storybook/recommended",
    "plugin:unicorn/recommended",
    "plugin:compat/recommended",
    `${__dirname}/rules/best-practice.js`,
    `${__dirname}/rules/react.js`,
    `${__dirname}/rules/import.js`,
    `${__dirname}/rules/unicorn.js`,
)), {
    plugins: {
        "@typescript-eslint": fixupPluginRules(tsPlugin),
        react: fixupPluginRules(react),
        "react-hooks": fixupPluginRules(reactHooks),
        prettier,
        "jsx-a11y": fixupPluginRules(jsxA11Y),
        import: fixupPluginRules(_import),
        "simple-import-sort": simpleImportSort,
        "unused-imports": unusedImports,
        unicorn: fixupPluginRules(unicorn),
        sonarjs: fixupPluginRules(sonarjs),
        "no-secrets": fixupPluginRules(noSecrets)
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
            window: true,
        },

        parser: tsParser,
        ecmaVersion: 2022,
        sourceType: "module",

        parserOptions: {
            project: "./tsconfig.json",

            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    files: ["src/**/*.ts"],

    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },

        "import/resolver": {
            typescript: {
                project: "./",
            },
        },

        react: {
            version: "detect",
        },
    },

    rules: {
        ...js.configs.recommended.rules,
        "prettier/prettier": "error",
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/unbound-method": ["error", {
            ignoreStatic: true,
        }],

        "@typescript-eslint/no-unused-vars": "error",
        "sonarjs/sonar-prefer-read-only-props": "off",
        "no-secrets/no-secrets": "error",
    },
}];