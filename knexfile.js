const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }
}