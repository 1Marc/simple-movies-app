import express from "express";
import path from "path";
export const app = express();
const port = 1337; // default port to listen

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
