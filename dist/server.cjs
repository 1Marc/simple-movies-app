"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const fastify_1 = __importDefault(require("fastify"));
const port = 1337;
const view_1 = __importDefault(require("@fastify/view"));
const static_1 = __importDefault(require("@fastify/static"));
const path_1 = __importDefault(require("path"));
const handlebars_1 = __importDefault(require("handlebars"));
const fs_1 = __importDefault(require("fs"));
exports.app = (0, fastify_1.default)({
    logger: true,
});
const partialsFiles = fs_1.default.readdirSync("views/partials");
let partials = {};
partialsFiles.forEach((name) => {
    partials[name.slice(0, name.indexOf(".hbs"))] = `partials/${name}`;
});
exports.app.register(view_1.default, {
    engine: {
        handlebars: handlebars_1.default,
    },
    includeViewExtension: true,
    root: path_1.default.join(__dirname, "../views"),
    viewExt: "hbs",
    options: { partials },
});
exports.app.register(static_1.default, {
    root: path_1.default.join(__dirname, "../public"),
});
exports.app.listen({ port: port }, function (err, address) {
    if (err) {
        exports.app.log.error(err);
        process.exit(1);
    }
    exports.app.log.info(`Server is now listening on ${address}`);
});
//# sourceMappingURL=server.cjs.map