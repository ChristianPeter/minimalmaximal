import App from './app';
import TodosController from './todos/control/todoController';
import TodosRepository from './todos/control/todoRepository'; 
const app = new App(
  [
    new TodosController(new TodosRepository()),
  ],
  5000,
);
 
app.listen();