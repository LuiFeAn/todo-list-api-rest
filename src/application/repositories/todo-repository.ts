import { Todo } from "../entities/todos/todo";


export abstract class TodoRepository {

    abstract create(todo: Todo): Promise<void>
    // abstract findById(todoId: string): Promise<Todo | null>
    // abstract update(todoId: string): Promise<Todo>
    // abstract delete(todoId: string): Promise<void>
    // abstract save(todo: Todo): Promise<void>
    // abstract countManyByUserId(userId: string): Promise<number>
    // abstract findManyByUserId(userId: string): Promise<Todo[]>
}