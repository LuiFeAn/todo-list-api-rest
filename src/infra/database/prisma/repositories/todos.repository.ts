import { Todo } from "src/application/entities/todos/todo";
import { IFindManyTodosFromUserCount, IFindManyTodosFromUserProps, IUpdateTodo, TodoRepository } from "src/application/repositories/interfaces/todo-repository";
import { PrismaService } from "../prisma.service";
import { PrismaTodoMapper } from "../mappers/todo-mapper";
import { Injectable } from "@nestjs/common";
import { PriorityEnum } from "@prisma/client";

@Injectable()
export class PrismaTodosRepository implements TodoRepository {

    constructor(
        private readonly prismaService: PrismaService
    ){}

    async findTodo(todoId: string): Promise<Todo> {

        const todo = await this.prismaService.todoList.findUnique({
            where:{
                id: todoId
            }
        });

        if( !todo ){

            return

        }

        return PrismaTodoMapper.toDomain(todo);

    }

    async create(todo: Todo): Promise<void> {

       const raw = PrismaTodoMapper.toPrisma(todo);

       await this.prismaService.todoList.create({
        data: raw
       })
        
    }

    async update({ 
        todoId, 
        userId, 
        body }: IUpdateTodo): Promise<Todo> {

        const raw = PrismaTodoMapper.toPrisma(body);
        
        const updatedTodo = await this.prismaService.todoList.update({
            where:{
                id: todoId,
                userId,
            },
            data:raw
        });

        return PrismaTodoMapper.toDomain(updatedTodo)
        
    }

    async delete(todoId: string): Promise<void> {
      
        await this.prismaService.todoList.delete({
            where:{
                id: todoId
            }
        });

    }

    private applyWhereTitle(title?: string){

        if( !title ){

            return {} 

        }

        return {
            title:{
                contains: `${title}%`
            }
        }

    }

    private applyWherePriority(priority?: PriorityEnum){

        if( !priority ){


            return {}

        }

        return {
            priority:{
                equals:priority
            }
        }

    }

    async findManyTodosFromUserCount({ 
        userId, 
        priority,
        title }: IFindManyTodosFromUserCount): Promise<number> {
        
        const userTodos = await this.prismaService.todoList.count({
            where:{
                userId,
                ...(this.applyWhereTitle(title)),
                ...(this.applyWherePriority(priority))
            }
        });

        return userTodos;


    }

    async findManyTodosFromUserWithPagination({
        userId,
        page,
        priority,
        quanty,
        title,
    }: IFindManyTodosFromUserProps): Promise<Todo[]> {
        
        const userTodos = await this.prismaService.todoList.findMany({
            where:{
                userId,
                ...(this.applyWhereTitle(title)),
                ...(this.applyWherePriority(priority))
            },
            skip: +page,
            take: +quanty,
        });

        return userTodos.map(PrismaTodoMapper.toDomain)

    }

    

}