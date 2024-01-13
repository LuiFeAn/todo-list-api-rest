import { Todo } from "../../entities/todos/todo";
import { ICreateTodoRequest } from "./interfaces/create-todo-request";
import { Title } from "../../entities/todos/value_objects/title";
import { Description } from "../../entities/todos/value_objects/description";
import { TodoRepository } from "../../repositories/todo-repository";

export class CreateTodo {

    constructor(
        private readonly todosRepository: TodoRepository
    ){}

    async execute(request: ICreateTodoRequest){

        const { priority, title, description, userId } = request;

        const todo = new Todo({
            title: new Title(title),
            description: new Description(description),
            priority,
            userId,
        })

        await this.todosRepository.create(todo);

        return {
            todo
        }

    }

}