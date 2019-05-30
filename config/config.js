module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASS,
    "database": "plantish_db",
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASS,
    "database": "plantish_db",
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
