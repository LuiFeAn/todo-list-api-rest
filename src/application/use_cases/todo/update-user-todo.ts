import { Injectable } from "@nestjs/common";
import { TodoRepository } from "src/application/repositories/interfaces/todo-repository";
import { IUpdateUserTodoRequest } from "./interfaces/update-user-todo";
import { Title } from "src/application/entities/todos/value_objects/title";
import { Description } from "src/application/entities/todos/value_objects/description";
import { TodoNotFound } from "./errors/todo-not-found";

@Injectable()
export class UpdateUserTodoUseCase {

    constructor(
        private readonly todosRepository: TodoRepository
    ){}

    async execute(request: IUpdateUserTodoRequest){

        const { 
            id, 
            userId, 
            description, 
            mustBeCompletedIn, 
            finishedIn,
            priority,
        title } = request;

        let currentTodo = await this.todosRepository.findTodo(id);

        if( new Date(mustBeCompletedIn) < new Date(currentTodo.createdAt) ){

            throw new Error('Invalid complete date');

        }

        if( !currentTodo ){

           throw new TodoNotFound();

        }

        if( title ){

            currentTodo.title = new Title(title.toUpperCase());

        }

        if( description ){

            currentTodo.description = new Description(description);

        }

        if( mustBeCompletedIn ){

            currentTodo.mustBeCompletedIn = new Date(mustBeCompletedIn);

        }

        if( finishedIn ){

            currentTodo.finishedIn = new Date(finishedIn);

        }

        if( priority ){

            currentTodo.priority = priority;

        }

        const updatedTodo = await this.todosRepository.update({
            userId,
            todoId: id,
            body: currentTodo,
        });

        return {
            updatedTodo
        }

    }

}