/*
Student ID: 26015839D
Student Name: Chui Chun Hei
*/
import http from "http";
import { URL } from "url";
import express from "express";
import session from 'express-session'
import pool from "./db.js";
import login from "./login.js";
import concert from "./concert.js";
const app = express();
const PORT = 8080;

async function fetch_concert(req) {
  const response = await fetch(`http://${req.headers.host}/concert`);
  return await response.json();
}

async function check_db_connection() {
  try {
    const connection = await pool.getConnection();
    console.log("MySQL database connection is ready.");
    connection.release();
  } catch (error) {
    console.error("Unable to connect to the MySQL database.");
    console.error(error.message);
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
app.use('/concert', concert);
app.use("/assets", express.static("static/assets"));
app.use("/scripts", express.static("static/scripts"));  
app.use("/styles", express.static("static/styles"));  
// Redirect the root path to the existing Lab 4 home page
app.get("/", async (req, res) => {
    const concerts = await fetch_concert(req);
    res.render("index.ejs", { concerts });
});

app.get("/login.html", (req, res) => {
  res.sendFile("login.html", { root: "static" });
});
app.get("/home.html", requireLogin, (req, res) => {
  res.sendFile("home.html", { root: "static" });
});

app.get("/recommend.html", requireLogin, (req, res) => {
  res.sendFile("recommend.html", { root: "static" });
});

app.get("/order.html", requireLogin, (req, res) => {
  res.sendFile("order.html", { root: "static" });
});

app.get("/reserve.html", requireLogin, (req, res) => {
  res.sendFile("reserve.html", { root: "static" });
});

app.get("/menu.html", requireLogin, (req, res) => {
  res.sendFile("menu.html", { root: "static" });
});

app.listen(PORT, async () => {
  console.log(`Server is listening on http://127.0.0.1:${PORT}`);
  await check_db_connection();
});

