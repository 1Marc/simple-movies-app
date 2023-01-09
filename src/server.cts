import Fastify, { FastifyInstance } from "fastify";
const port = 1337; // default port to listen
import fastifyView from "@fastify/view";
import fasitfyStatic from "@fastify/static";
import path from "path";
import handlebars from "handlebars";

export const app: FastifyInstance = Fastify({
  logger: true,
});

// register the view engine
app.register(fastifyView, {
  engine: {
    handlebars: handlebars,
  },
  includeViewExtension: true,
  root: path.join(__dirname, "../views"),
  viewExt: "hbs",
  options: {
    partials: {
      head: "partials/head.hbs",
      header: "partials/header.hbs",
      footer: "partials/footer.hbs",
    },
    // WHY DOESNT THIS WORK so I don't have to do the above??
    partialsDir: path.join(__dirname, "../views/partials"),
  },
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
