import { Todo } from "../entities/todos/todo";


export abstract class TodoRepository {

    abstract create(user: Todo): Promise<void>
}