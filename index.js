const PORT = process.env.PORT || 3001;
const app = require('./server/server');

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});