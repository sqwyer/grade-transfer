const fs = require("fs");
const fetch = require("node-fetch");
const { google } = require("googleapis");

const info = require("./info");
const token = require("./token");
const students = require("./students");

function listCourses(auth, server) {
  const classroom = google.classroom({ version: "v1", auth });

  classroom.courses.list({ pageSize: 30 }, (err, res) => {
    if (err) {
      server.res.redirect("/?error=Google Classroom API error.");
      return console.error("The API returned an error: " + err);
    }

    const courses = res.data.courses;

    if (courses && courses.length) {
      let active = courses.filter(obj => obj.courseState == "ACTIVE");

      server.res.render("dashboard", {
        message: `${active.length++} Course(s):`,
        courses: active
      });

      return {
        message: `${active.length++} course(s)`,
        courses: active
      };
    } else {
      server.res.render("dashboard", {
        message: "No classrooms were found.",
        courses: []
      });

      return {
        message: "No classrooms were found.",
        courses: []
      };
    }
  });
}

module.exports = listCourses;
