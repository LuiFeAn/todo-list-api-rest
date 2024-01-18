import { Injectable } from "@nestjs/common";
import { TodoRepository } from "src/application/repositories/interfaces/todo-repository";
import { TodoNotFound } from "./errors/todo-not-found";
import { IObtainOneTodoRequest } from "./interfaces/obtain-one-todo-request";


@Injectable()
export class ObtainOneTodoUseCase {

    constructor(
        private readonly todosRepository: TodoRepository
    ){}

    async execute(request: IObtainOneTodoRequest){

        const { 
            id, 
            userId,
        } = request;

        const todo = await this.todosRepository.obtainOneUserTodo(id,userId);

        if( !todo ){

           throw new TodoNotFound();

        }

        return {
            todo
        }


    }

}