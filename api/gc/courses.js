/*
Copyright 2021 Grade-Transfer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

require('dotenv').config();
const { google } = require("googleapis");

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
