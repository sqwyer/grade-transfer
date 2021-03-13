const express = require("express");
const app = express();
const gc = require("./api/gc/.");

app.use("/static", express.static("static"));
app.set("view engine", "hbs");

app.get("/auth", (req, res) => {
  let data = gc.init({
    req: req,
    res: res
  });
});

app.get("/", (req, res) => {
  res.render("index", { error: req.query.error });
});

app.listen(process.env.PORT || 8080, e => {
  if (e) throw e;
  console.log("Server running");
});
