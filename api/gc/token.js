/*
Copyright 2021 Grade-Transfer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

require('dotenv').config();

const fs = require('fs');
const info = require('./info');

function getNewToken(client, server, callback) {
  
  const authUrl = client.generateAuthUrl({
    access_type: "offline",
    scope: info.scopes
  });
  
  if(!server.req.query.code || server.req.query.code == null || server.req.query.code == undefined) {
    server.res.redirect(authUrl);
    return {};
  }
  
  let code = server.req.query.code;
  
  client.getToken(code, (err, token) => {
    if (err) {
      server.res.redirect('/?error=Error retrieving access token');
      return console.error("Error retrieving access token");
    }
    
    client.setCredentials(token);

    return callback(client, server);
  });
}

module.exports = {getNewToken};