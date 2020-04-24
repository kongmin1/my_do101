require('dotenv').config();
const DB_CONFIG = process.env.DB_CONFIG;
const { Pool } = require('pg');
console.log('DB_CONFIG===='+DB_CONFIG);
const pgconn = new Pool({    
    connectionString: DB_CONFIG,
    ssl: false,
});
  
module.exports = { pgconn }