/*
Student ID: 26015839D
Student Name: Chui Chun Hei
*/
import http from "http";
import { URL } from "url";
import express from "express";
import session from 'express-session'
import {client, db} from "./db.js";
// import login from "./login.js";
import concert from "./concert.js";

const app = express();
const PORT = 8080;

async function fetch_concert(req) {
  const response = await fetch(`http://${req.headers.host}/concertlist`);
  return await response.json();
}

async function check_db_connection() {
  try {
    await client.connect();
    const test = await db.collection('concert').findOne({'name': '311'});
    console.log("success!!!");
  } 
  catch (err) {
    console.error("Error connecting to the database:", err);
  }

}
function requireLogin(req, res, next) {
  if (req.session.logged === true) {
    next();
    return;
  }
  res.redirect("/login.html");
}

// Serve static files from the "static" folder
app.use(express.json());
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
    },
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use('/concerts', concert);
app.use("/assets", express.static("static/assets"));
app.use("/scripts", express.static("static/scripts"));  
app.use("/styles", express.static("static/styles"));  
// Redirect the root path to the existing Lab 4 home page
app.get("/", async (req, res) => {
  res.render("index.ejs");
});


app.get("/support", (req, res) => {
  res.render("support.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/my_ticket",(req, res) => {
  res.render("my_ticket.ejs");
});

app.get("/menu.html", requireLogin, (req, res) => {
  res.sendFile("menu.html", { root: "static" });
});

app.listen(PORT, async () => {
  console.log(`Server is listening on http://127.0.0.1:${PORT}`);
  await check_db_connection();
});

