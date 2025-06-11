# eslint-config-webpractik

Этот монорепозиторий содержит пакеты с конфигурациями ESLint для различных типов проектов.

Структура пакетов:

```text
        base            (legacy)
      /   |   \
  react  node  vue
    |
  next
```

- [@webpractik/eslint-config](packages/base/README.md)

Базовая конфигурация, содержащая основные правила ESLint, общие для всех типов проектов. Требует node > 20 и eslint > 9

- [@webpractik/eslint-config-legacy](packages/legacy/README.md)

Конфигурация для поддержки старых проектов с eslint < 9. Экспортирует commonjs модуль.

- [@webpractik/eslint-config-react](packages/react/README.md)

Конфигурация для React-проектов. Наследует правила из base и добавляет рекомендации для работы с React.

- [@webpractik/eslint-config-next](packages/next/README.md)

Конфигурация для Next.js-проектов. Наследует правила из react и добавляет более строгие правила для next.


- [@webpractik/eslint-config-node](packages/node/README.md)

Конфигурация для Node.js-проектов. Наследует правила из base и добавляет рекомендации для серверной разработки.

- [@webpractik/eslint-config-vue](packages/vue/README.md)

Конфигурация для Vue.js-проектов. Наследует правила из base и включает рекомендации для разработки на Vue.js.



