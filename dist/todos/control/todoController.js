"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class TodoController {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
        this.path = '/todos';
        this.router = express.Router();
        this.getAllTodos = (request, response) => {
            response.send(this.todoRepository.getTodos());
        };
        this.getTodoById = (request, response) => {
            const id = request.params.id;
            response.send(this.todoRepository.getTodos());
        };
        this.createATodo = (request, response) => {
            const todo = request.body;
            response.send(this.todoRepository.createTodo(todo));
        };
        this.updateATodo = (request, response) => {
            const id = request.params.id;
            const todo = request.body;
        };
        this.deleteATodo = (request, response) => {
            const id = request.params.id;
            this.todoRepository.deleteTodo(id);
        };
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.get(this.path, this.getAllTodos);
        this.router.get(`${this.path}/:id`, this.getTodoById);
        this.router.post(this.path, this.createATodo);
        this.router.put(`${this.path}/:id`, this.updateATodo);
        this.router.delete(`${this.path}/:id`, this.deleteATodo);
    }
}
exports.default = TodoController;
