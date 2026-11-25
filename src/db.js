/*
Student ID: 26015839D
Student Name: Chui Chun Hei
*/

import mysql from "mysql2/promise";
const pool = mysql.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "admin_mysql",
  database: "labdb",
  waitForConnections: true,
  connectionLimit: 10,
});
export default pool;
