import Fastify, { FastifyInstance } from "fastify";
const port = 1337; // default port to listen
import fastifyView from "@fastify/view";
import fasitfyStatic from "@fastify/static";
import path from "path";
import handlebars from "handlebars";
import fs from "fs";

export const app: FastifyInstance = Fastify({
  logger: true,
});

// why dont they just have a partialsDir option?
const partialsFiles = fs.readdirSync("views/partials");
let partials = {};
partialsFiles.forEach((name) => {
  partials[name.slice(0, name.indexOf(".hbs"))] = `partials/${name}`;
});

// register the view engine
app.register(fastifyView, {
  engine: {
    handlebars: handlebars,
  },
  includeViewExtension: true,
  root: path.join(__dirname, "../views"),
  viewExt: "hbs",
  options: { partials },
});

app.register(fasitfyStatic, {
  root: path.join(__dirname, "../public"),
});

// start the Fastify server
app.listen({ port: port }, function (err, address) {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Server is now listening on ${address}`);
});
