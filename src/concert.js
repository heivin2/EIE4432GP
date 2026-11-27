/*
Student ID: 26015839D
Student Name: Chui Chun Hei
*/

import express from "express";
import {db, client, ObjectId} from "./db.js";

const router = express.Router();

async function fetch_concert(filter) {
  if (filter == null || filter == "") {
      const result = await db.collection('concert').find({"expired": false}).toArray();
      (result);
      return result;
  }
  else{
      (filter);
      const result = await db.collection('concert').find(JSON.parse(filter)).toArray();
      (result);
      return result;

  }
}

async function fetch_concert_page(id) {
  const result = await db.collection('concert').findOne({"expired": false, "_id": new ObjectId(`${id}`)});
  console.log(result);
  return result;
}

router.get('/', async (req, res) => {
  const concert = await fetch_concert();
  res.json(concert);
});

router.get('/:id', async (req, res) => {
  const concert = await fetch_concert_page(req.params.id);
  res.render("concert_page.ejs", { concert });
});

router.post('/filter', async (req, res) => {
  const { gender, language } = req.body;
  let filter_string = `{"expired": false,"Gender": "${gender}", "Language": "${language}"}`;
  const filter = filter_string.replace(/""/g, "{ \"$ne\": \"\" }");
  const concert = await fetch_concert(filter);
  res.json(concert);
});

export default router;