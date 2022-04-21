const mysql = require('mysql');
const dotenv = require('dotenv');


dotenv.config({ path: './.env'})


try {
  const tls = import('tls');
} catch (err) {
  console.log('tls support is disabled!');
}



//create connection
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER, 
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
    
});

module.exports = db;