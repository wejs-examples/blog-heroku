module.exports.database = {
  prod: {
    uri: process.env.DATABASE_URL,

    database: process.env.DATABASE_NAME || 'test',
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD
  },
  dev: {
//    uri: process.env.DATABASE_URL,
//    // uri: 'mysql://localhost:3306/test',
//    dialect: 'postgres',
//    protocol: 'postgres'
    uri: process.env.DATABASE_URL || null,
    dialect: 'mysql',
    database: process.env.DATABASE_NAME || 'test',
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD

  },
  // localhost or dev env
  test: {
    uri: process.env.DATABASE_URL || null,
    dialect: 'mysql',
    database: 'test',
    username: 'root',
    password: ''
  }
}
