"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 1337;
app.set("view engine", "ejs");
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.get("/", (req, res) => {
    console.log("requested update ");
    res.render("index");
});
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.cjs.map