import * as dotenv from "dotenv";
dotenv.config();
import { app } from "./server.cjs";
import { getPopularMovies } from "./api.cjs";

// import { RouteShorthandOptions } from "fastify";
// const opts: RouteShorthandOptions = {
//   schema: {
//     response: {
//       200: {
//         type: "object",
//         properties: {
//           hello: { type: "string" },
//         },
//       },
//     },
//   },
// };

// define a route handler for the default home page
app.get("/", (req, reply) => {
  reply.view("index");
});

app.get("/api/movies", async function (req, reply) {
  const movies = await getPopularMovies();
  reply.send(movies);
});

app.get("/movies", async function (req, reply) {
  const movies = await getPopularMovies();
  console.log(movies.results[0]);
  return reply.view("movies", { movies: movies.results });
});
