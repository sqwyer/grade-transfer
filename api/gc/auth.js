/*
Copyright 2021 Grade-Transfer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

const fs = require('fs');
const { google } = require("googleapis");

const info = require('./info');
const {getNewToken} = require('./token');

const authorize = (callback, server) => {
  
  const client_secret = process.env.CLIENT_SECRET;
  const client_id = process.env.CLIENT_ID;
  const redirect_uris = [process.env.REDIRECT_URI];

  const client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  fs.readFile(info.token, (err, token) => {
    if (err) {
      return getNewToken(client, server, callback);
    }
    
    console.log(err, '\n', JSON.parse(token));
    
    client.setCredentials(JSON.parse(token));
    callback(client, server);

    fs.unlink(info.token, err => {
      if(e) {
        server.redirect('/?error=Unable to reset token data.');
        console.error(err);
      }
    })
  });
};

module.exports = authorize;