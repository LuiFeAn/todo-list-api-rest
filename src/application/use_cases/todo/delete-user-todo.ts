import { Injectable } from "@nestjs/common";
import { IDeleteUserTodoRequest } from "./interfaces/delete-user-todo-request";
import { TodoRepository } from "src/application/repositories/interfaces/todo-repository";
import { TodoNotFound } from "./errors/todo-not-found";

@Injectable()
export class DeleteUserTodoUseCase {

    constructor(
        private readonly todosRepository: TodoRepository
    ){}

    async execute(request: IDeleteUserTodoRequest){

        const { todoId, userId } = request;

        const currentTodo = await this.todosRepository.findTodo(todoId);

        if( !currentTodo ){

            throw new TodoNotFound();
            
        }

        await this.todosRepository.delete(todoId,userId);

    }

}