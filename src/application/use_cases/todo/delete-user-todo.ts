import { Injectable } from "@nestjs/common";
import { IDeleteUserTodoRequest } from "./interfaces/delete-user-todo-request";
import { TodoRepository } from "../../../../src/application/repositories/interfaces/todo-repository";

@Injectable()
export class DeleteUserTodoUseCase {

    constructor(
        private readonly todosRepository: TodoRepository
    ){}

    async execute(request: IDeleteUserTodoRequest){

        const { todoId, userId } = request;

        await this.todosRepository.delete(todoId,userId);

    }

}