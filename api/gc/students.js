/*
Copyright 2021 Grade-Transfer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

require('dotenv').config();

const fs = require("fs");
const fetch = require("node-fetch");
const { google } = require("googleapis");

const info = require("./info");
const token = require("./token");
const students = require("./students");

function getStudents(auth, cid, server) {
  const classroom = google.classroom({ version: "v1", auth });

  classroom.courses.students({ pageSize: 30, courseId: cid }, (err, res) => {
    if (err) {
      server.res.redirect("/?error=Google Classroom API error.");
      return console.error("The API returned an error: " + err);
    }
    
    console.log(res);
  });
}

module.exports = getStudents;
