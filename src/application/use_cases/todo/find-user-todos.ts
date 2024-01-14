import { Injectable } from "@nestjs/common";
import { TodoRepository } from "src/application/repositories/interfaces/todo-repository";
import { IFindUserTodosRequest } from "./interfaces/find-user-todos-request";

@Injectable()
export class FindUserTodosUseCase {

    constructor(
        private readonly todosRepository: TodoRepository
    ){}

    async execute(request: IFindUserTodosRequest){

        const { userId, page, quanty, title } = request;

        const todos = await this.todosRepository.findManyTodosFromUser({
            userId,
            page,
            quanty,
            title
        });

        return todos;

    }

}