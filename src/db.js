const mysql = require('mysql2')
const {DB_HOST,DB_USER, DB_PASS, DB_NAME} = require('./config')

const mysqlConnection = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

mysqlConnection.getConnection((err) =>{
    if(err){
        console.log(err)
    }else {
        console.log("DataBase Connected!")
    }
})

module.exports = mysqlConnection;