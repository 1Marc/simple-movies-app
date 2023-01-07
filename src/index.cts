import * as dotenv from "dotenv";
dotenv.config();
import { app } from "./server.cjs";
import { getPopularMovies } from "./api.cjs";

// define a route handler for the default home page
app.get("/", (req, res) => {
  console.log("requested update ");
  res.render("index");
});

app.get("/api/movies", async (req, res) => {
  const movies = await getPopularMovies();
  res.json(movies);
});
