require("dotenv").config();
const { google } = require("googleapis");

const loadAssignments = async (server) => {
  let { req, res } = server;

  const classroom = req.session.classroom;

  let self = {
    id: req.body.id,
    name: req.body.name
  };

  let options = { pageSize: 10, courseId: self.id };
  let assignments = [];

  console.log(classroom.courses.courseWork);
  for(let prop in classroom.courses.courseWork) {
    console.log(`${prop} :: ${classroom.courses[prop]}`);
  }
  
  let search = await classroom.courses.courseWork.list(options);
  
  do {
    if (search.data.students) Array.prototype.push.apply(assignments, search.data.courseWork);
    options.pageToken = search.data.nextPageToken;
  } while (options.pageToken);

  res.render('select', {
    assignments: assignments,
    course: req.body
  });

  // res.redirect('/select');
}

module.exports = loadAssignments;