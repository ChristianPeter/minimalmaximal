"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
class App {
    constructor(controllers, port) {
        this.app = express();
        this.port = port;
        this.app.set("view engine", "ejs");
        this.app.set("views", "public");
        this.app.use("/assets", express.static(path.join(__dirname, "frontend")));
        this.app.get('/', (req, res) => {
            res.render("index");
        });
        this.app.use(bodyParser.json());
        this.initializeControllers(controllers);
    }
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/api/', controller.router);
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
exports.default = App;
