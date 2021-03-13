const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");

const auth = require('./auth');
const token = require('./token');
const courses = require('./courses');
const info = require('./info');

const init = (server) => {
  return auth(courses, server);
}

module.exports = { auth, token, courses, init };
