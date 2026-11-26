/*
Student ID: 26015839D
Student Name: Chui Chun Hei
*/

import express from "express";
import pool from "./db.js";

const router = express.Router();

async function fetch_concert(filter) {
  if (filter == null || filter == "") {
      const sql = `SELECT * , DATE_FORMAT(STR_TO_DATE('2027-01-13T16:00:00.000Z', '%Y-%m-%dT%H:%i:%s.%fZ'), '%Y-%m-%d') AS date FROM concert WHERE expired = FALSE`;
      const [rows] = await pool.query(sql);
      return rows;
  }
  else{
  // filter = filter.replace(/\\/g, "");
  const sql = `SELECT * , DATE_FORMAT(STR_TO_DATE('2027-01-13T16:00:00.000Z', '%Y-%m-%dT%H:%i:%s.%fZ'), '%Y-%m-%d') AS date FROM concert ${filter}`;
  const [rows] = await pool.query(sql);
  return rows;
  }
}

async function fetch_concert_page(id) {
  const sql = `SELECT * , DATE_FORMAT(STR_TO_DATE('2027-01-13T16:00:00.000Z', '%Y-%m-%dT%H:%i:%s.%fZ'), '%Y-%m-%d') AS date FROM concert WHERE id = ? AND expired = FALSE`;
  const rows = [] = await pool.query(sql, [id]);
  return rows[0];
}

router.get('/', async (req, res) => {
  const concert = await fetch_concert();
  res.json(concert);
});

router.get('/concert/:id', async (req, res) => {
  const concert = await fetch_concert_page(req.params.id);
  res.json(concert);
});

router.post('/filter', async (req, res) => {
  const { filter } = req.body;
  console.log(filter);
  const concert = await fetch_concert(filter);
  res.json(concert);
});

export default router;