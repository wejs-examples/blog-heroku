module.exports.database = {
  prod: {
    uri: process.env.DATABASE_URL
  },
  dev: {
//    uri: process.env.DATABASE_URL,
//    // uri: 'mysql://localhost:3306/test',
//    dialect: 'postgres',
//    protocol: 'postgres'

    dialect: 'mysql',
    database: 'test',
    username: 'root',
    password: ''

  },
  // localhost or dev env
  test: {
    dialect: 'mysql',
    database: 'test',
    username: 'root',
    password: ''
  }
}
