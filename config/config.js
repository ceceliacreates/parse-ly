module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": "plantish_db",
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  }
  // "test": {
  //   "username": process.env.DB_USER,
  //   "password": "hotsriracha",
  //   "database": "plantish_db",
  //   "host": process.env.DB_HOST,
  //   "dialect": "mysql"
  // },
  // "production": {
  //   "username": process.env.DB_USER,
  //   "password": "hotsriracha",
  //   "database": "plantish_db",
  //   "host": process.env.DB_HOST,
  //   "dialect": "mysql"
  // }
}
