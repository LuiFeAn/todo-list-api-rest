import { Todo } from "src/application/entities/todos/todo"

export interface IFindManyTodosFromUserProps {

    userId: string,
    page: number,
    quanty: number,
    title: string,

}

export interface IUpdateTodo {

    todoId: string,
    userId: string,
    body: Todo

}

export interface IFindManyTodosFromUserCount {

    userId: string
    title: string

}

export abstract class TodoRepository {

    abstract create(todo: Todo): Promise<void>
    abstract findTodo(todoId: string): Promise<Todo | undefined >
    abstract update({ userId, todoId, body }: IUpdateTodo): Promise<Todo>
    abstract delete(todoId: string,userId: string): Promise<void>
    abstract findManyTodosFromUserCount({ userId, title }: IFindManyTodosFromUserCount): Promise<number>
    abstract findManyTodosFromUserWithPagination(findManyTodosProps: IFindManyTodosFromUserProps): Promise<Todo[]>

}