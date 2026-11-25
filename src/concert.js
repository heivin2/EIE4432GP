/*
Student ID: 26015839D
Student Name: Chui Chun Hei
*/

import express from "express";
import pool from "./db.js";

const router = express.Router();
async function fetch_concert() {
  const sql = `SELECT * , DATE_FORMAT(STR_TO_DATE('2027-01-13T16:00:00.000Z', '%Y-%m-%dT%H:%i:%s.%fZ'), '%Y-%m-%d') AS date FROM concert`;
  const rows = [] = await pool.query(sql);
  return rows[0];
}

router.get('/', async (req, res) => {
  const concert = await fetch_concert();
  res.json(concert);
});

export default router;