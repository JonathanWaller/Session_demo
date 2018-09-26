require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");

const { login, logout, getUser } = require("./ctrl");

const app = express();

app.use(json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1223344
    }
  })
);

app.get("/api/getUser", getUser);
app.post("/api/login", login);
app.get("/api/logout", logout);

const port = 3001;
app.listen(port, () => console.log(`Howdy from ${port}`));
