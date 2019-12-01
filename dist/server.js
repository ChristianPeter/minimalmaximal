"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const todoController_1 = require("./todos/control/todoController");
const todoRepository_1 = require("./todos/control/todoRepository");
const app = new app_1.default([
    new todoController_1.default(new todoRepository_1.default()),
], 5000);
app.listen();
