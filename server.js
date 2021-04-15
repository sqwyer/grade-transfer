/*
Copyright 2021 Grade-Transfer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

require('dotenv').config();

const express = require("express");
const session = require('express-session');
const app = express();
const gc = require("./api/gc/.");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/static", express.static("static"));
app.set("view engine", "hbs");

app.use(session({
  secret: `${process.env.SESS_SECRET}`,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 24 * 60 * 60 * 365 * 1000 }
}));

app.post('/getassignments', (req, res) => {
  gc.assignments({req, res});
});

app.get('/dashboard', (req, res) => {
  if(req.session.data != undefined && req.session.data != null) {
    res.render('dashboard', req.session.data);
  } else {
    res.redirect('/?error=Unable to load session data.');
  }
});

// app.get('/select', (req, res) => {
//   if(req.session.assignments != undefined && req.session.assignments != null) {
//     res.render('dashboard', { assignments: req.session.assignments, body: req.session.body });
//   } else {
//     res.redirect('/?error=Unable to load session data.');
//   }
// });

app.post('/reset', (req, res) => {
  delete req.session.data;
  delete req.session.client;

  res.redirect('/');
});

app.get("/auth", (req, res) => {
  let data = gc.init({
    req: req,
    res: res
  });
});

app.get('/select', (req, res) => {
  gc.assignments({req: req, res: res});
});

app.get("/", (req, res) => {
  res.render("index", { error: req.query.error });
});

app.listen(process.env.PORT || 8080, e => {
  if (e) throw e;
  console.log("Server running");
});