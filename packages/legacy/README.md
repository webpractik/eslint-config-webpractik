## Getting started

`npm i -D @webpractik/eslint-config-legacy`

``` js
// .eslintrc.js

module.exports = {
    root: true,
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    extends: ['webpractik'],
    overrides: [
        { 
            files: ['*.js?(x)', '*.ts?(x)'], 
            parser: '@typescript-eslint/parser' 
        }
    ],
};
```


## Plugins:

- @typescript-eslint
- prettier
- import
- jsx-a11y
- no-secrets
- react
- react-hooks
- simple-import-sort
- sonarjs
- unicorn
- unused-imports
- xss
