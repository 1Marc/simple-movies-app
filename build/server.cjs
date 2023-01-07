"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
exports.app = (0, express_1.default)();
const port = 1337;
exports.app.set("view engine", "ejs");
exports.app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
exports.app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=server.cjs.map