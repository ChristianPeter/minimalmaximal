"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoRepository {
    constructor() {
        this.todos = [];
        this.lastId = 0;
        this.initDemoData();
    }
    getNextId() {
        return this.lastId++;
    }
    initDemoData() {
        this.todos.push({
            id: this.getNextId(),
            author: 'Marcin',
            content: 'Dolor sit amet',
            title: 'Lorem Ipsum',
        });
    }
    getTodos() {
        return this.todos;
    }
    createTodo(todo) {
        todo.id = this.getNextId();
        this.todos.push(todo);
        return todo;
    }
    deleteTodo(id) {
        const index = this.todos.findIndex((todo) => todo.id === Number(id));
        if (index > -1) {
            console.log('deleting', index);
            this.todos.splice(index, 1);
        }
    }
}
exports.default = TodoRepository;
