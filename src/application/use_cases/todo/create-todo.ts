import { Todo } from "src/application/entities/todos/todo";
import { ICreateTodoRequest } from "./interfaces/create-todo-request";
import { Title } from "src/application/entities/todos/value_objects/title";
import { Description } from "src/application/entities/todos/value_objects/description";
import { TodoRepository } from "src/application/repositories/interfaces/todo-repository";
import { MustBeCompletedIn } from "src/application/entities/todos/value_objects/must_be_completed_in";
import { ICreateTodoResponse } from "./interfaces/create-todo-response";
import { Injectable } from "@nestjs/common";
import { UsersRepository } from "src/application/repositories/interfaces/users-repository";
import { UserNoExists } from "../user/errors/user-no-exists";


@Injectable()
export class CreateTodoUseCase {

    constructor(
        private readonly todosRepository: TodoRepository,
        private readonly usersRepository: UsersRepository
    ){}

    async execute(request: ICreateTodoRequest): Promise<ICreateTodoResponse>{

        const { priority, title, description, userId, mustBeCompletedIn } = request;

        const userExists = await this.usersRepository.findById(userId);

        if( !userExists ){

            throw new UserNoExists();

        }

        const todoList = new Todo({
            title: new Title(title),
            description: new Description(description),
            mustBeCompletedIn: new MustBeCompletedIn(mustBeCompletedIn),
            priority,
            userId,
        })

        await this.todosRepository.create(todoList);

        return {
           todoList
        }

    }

}