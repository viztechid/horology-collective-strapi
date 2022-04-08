module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-63-32-248-14.eu-west-1.compute.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd9fgrkc867elpv'),
      user: env('DATABASE_USERNAME', 'wkvewduriuvors'),
      password: env('DATABASE_PASSWORD', '36e5fe4cf138fe0963bb1d0527a49a047d87102d274139a4ca69e1c916a0392c'),
      ssl: {
        rejectUnauthorized: false
      },
    },
  },
});
