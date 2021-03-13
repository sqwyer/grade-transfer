const fs = require('fs');
const { google } = require("googleapis");

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
      return console.error("Error retrieving access token", err);
    }
    
    client.setCredentials(token);
    fs.writeFile(info.token, JSON.stringify(token), err => {
      if (err) {
        server.res.redirect('/?error=File System error');
        return console.error("Error writing to token storage", err);
      }
    });
    
    callback(client, server);
  });
}

module.exports = {getNewToken};