import TodoController from './todoController';
import TodoRepository from './todoRepository';
import Todo from '../entity/todo';


describe('TodoController', () => {
    const todoRepository = new TodoRepository();
    const todoController = new TodoController(todoRepository);

    describe('Sample Test', () => {
        const todo:Todo = {"author":"Marcin","content":"Dolor sit amet","title":"Lorem Ipsum", "id" :10};

        it('should return a string', () => {
          expect(typeof todoRepository.createTodo(todo))
            .toEqual('object');
        })
      });


});