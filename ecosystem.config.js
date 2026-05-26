module.exports = {
  apps: [
    {
      name: 'html-tools',
      script: 'server.js',
      instances: 1,
      autorestart: true,
      watch: ['public'],
      watch_delay: 1000,
      ignore_watch: ['node_modules', '.wrangler', '.git'],
      env: {
        NODE_ENV: 'production',
        PORT: 9001,
      },
    },
  ],
};
