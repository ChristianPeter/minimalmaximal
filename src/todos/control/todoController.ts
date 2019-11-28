import * as express from 'express';
import Todo from '../entity/todo';
import TodoRepository from './todoRepository';
 
class TodoController {
  public path = '/todos';
  public router = express.Router();
 
  constructor(private todoRepository : TodoRepository) {
    this.intializeRoutes();
  }
 
  
  public intializeRoutes() {
    this.router.get(this.path, this.getAllTodos);
    this.router.get(`${this.path}/:id`, this.getTodoById);

    this.router.post(this.path, this.createATodo);
    this.router.put(`${this.path}/:id`, this.updateATodo);
  }
 
  getAllTodos = (request: express.Request, response: express.Response) => {
    response.send(this.todoRepository.getTodos());
  }

  getTodoById = (request: express.Request, response: express.Response) => {
    const id = request.params.id;
    response.send(this.todoRepository.getTodos());
  }
 
  createATodo = (request: express.Request, response: express.Response) => {
    const todo: Todo = request.body;

    response.send(this.todoRepository.createTodo(todo));
  }

  updateATodo = (request: express.Request, response: express.Response) => {
    const id = request.params.id;
    const todo: Todo = request.body;

  }
}
 
export default TodoController;