export default () => ({
  port: parseInt(process.env.PORT) || 4000,
  db: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
});
