import { Injectable } from "@nestjs/common";
import { TodoRepository } from "src/application/repositories/interfaces/todo-repository";
import { IFindUserTodosRequest } from "./interfaces/find-user-todos-request";
import { Paginate } from "src/helpers/pagination";
import { CommonSearchNotFound } from "../common/errors/common-search-not-found";

@Injectable()
export class FindUserTodosUseCase {

    constructor(
        private readonly todosRepository: TodoRepository
    ){}

    async execute(request: IFindUserTodosRequest){

        const { userId, page, quanty, title, priority } = request;

        const allTodosCount = await this.todosRepository.findManyTodosFromUserCount({
            title,
            priority,
            userId
        });

        const { currentPage, totalPages } = Paginate(page,quanty,allTodosCount);

        const todosWithPagination = await this.todosRepository.findManyTodosFromUserWithPagination({
            userId,
            page: currentPage,
            priority,
            quanty,
            title,
        });

        if( todosWithPagination.length === 0 
            && currentPage > todosWithPagination.length 
            || todosWithPagination.length == 0 ){
            
                throw new CommonSearchNotFound();

        }

        return {
            todoList: todosWithPagination,
            totalPages
        }

    }

}