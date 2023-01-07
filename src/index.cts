import express from "express";
import path from "path";
const app = express();
const port = 1337; // default port to listen

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// define a route handler for the default home page
app.get("/", (req, res) => {
  console.log("requested update ");
  res.render("index");
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
