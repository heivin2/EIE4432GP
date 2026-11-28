/*
Student ID: 26015839D
Student Name: Chui Chun Hei
*/

import express from "express";
import {db, client, ObjectId} from "./db.js";

const router = express.Router();
const con = db.collection('concert');
async function fetch_concert(filter) {
  if (filter == null || filter == "") {
    const result = await con
      .find({expired: false})
      .toArray();
    result;
    return result;
  } else {
    filter;
    const result = await con
      .find(JSON.parse(filter))
      .toArray();
    result;
    return result;
  }
}

async function fetch_concert_page(id) {
  const result = await 
    con
    .findOne({expired: false, _id: new ObjectId(`${id}`)});
  if (result == null) {
    return false;
  }
  (result);
  return result;
}

router.get("/", async (req, res) => {
  const acceptsHtml =
    req.headers.accept && req.headers.accept.includes("text/html");
  if (acceptsHtml) {
    res.status(501).send("501 forbidden");
  } else {
    const concert = await fetch_concert();
    res.json(concert);
  }
});

router.get("/:id", async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(404).send("concert not found");
    return;
  }
  const concert = await fetch_concert_page(req.params.id);
  if (!concert) {
    res.status(404).send("concert not found");
  } else {
    res.render("concert_page.ejs", {concert});
  }
});

router.post("/filter", async (req, res) => {
  const {gender, language} = req.body;
  let filter_string = `{"expired": false,"Gender": "${gender}", "Language": "${language}"}`;
  const filter = filter_string.replace(/""/g, '{ "$ne": "" }');
  const concert = await fetch_concert(filter);
  res.json(concert);
});

export default router;
