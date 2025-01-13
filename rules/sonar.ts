import type { TSESLint } from '@typescript-eslint/utils';

export const sonarRules = {
    'sonarjs/prefer-immediate-return': 0,
    'sonarjs/sonar-prefer-read-only-props': 0,
    'sonarjs/function-return-type': 0,
    'sonarjs/no-misused-promises': 0,
} as const satisfies TSESLint.FlatConfig.Rules;
