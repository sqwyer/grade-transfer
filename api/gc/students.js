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
