/*
Student ID: 26015839D
Student Name: Chui Chun Hei
*/

import express from "express";
import pool from "./db.js";

const router = express.Router();
async function fetch_concert() {
  const sql = 'SELECT * FROM concert';
  const rows = [] = await pool.query(sql);
  return rows[0];
}

router.get('/', async (req, res) => {
  const concert = await fetch_concert();
  res.json(concert);
});

export default router;