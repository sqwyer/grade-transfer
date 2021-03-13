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