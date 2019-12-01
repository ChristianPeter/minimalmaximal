import Todo from '../entity/todo';

class TodoRepository {
    private todos: Todo[] = [];

    private lastId: number = 0;

    private getNextId() : number {
        return this.lastId ++;
    }
    constructor() {
        this.initDemoData();
    }

    public initDemoData() {
        this.todos.push({
          id: this.getNextId(),
          author: 'Marcin',
          content: 'Dolor sit amet',
          title: 'Lorem Ipsum',
        });
    }

    public getTodos(): Todo[] {
        return this.todos;
    }

    public createTodo(todo: Todo): Todo {
        todo.id = this.getNextId();
        this.todos.push(todo);
        return todo;
    }

    public deleteTodo(id: string) {
        const index = this.todos.findIndex((todo) => todo.id === Number(id));
        if (index > -1) {
            console.log('deleting', index);
            this.todos.splice(index, 1);
        }
    }
}
export default TodoRepository;