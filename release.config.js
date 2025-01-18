export default {
    branches: ['main'],
    extends: 'semantic-release-monorepo',
    plugins: [
        '@semantic-release/changelog',
        ['@semantic-release/npm', { npmPublish: true }],
        '@semantic-release/git',
    ],
};
