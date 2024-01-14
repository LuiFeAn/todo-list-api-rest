import { Todo } from "src/application/entities/todos/todo";
import { TodoRepository } from "src/application/repositories/interfaces/todo-repository";


export class InMemoryTodoRepository implements TodoRepository {

    todos: Todo[] = []

    async create(todo: Todo){
        
        this.todos.push(todo);

    }

}