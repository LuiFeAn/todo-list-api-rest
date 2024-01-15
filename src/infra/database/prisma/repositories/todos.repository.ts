import { Todo } from "src/application/entities/todos/todo";
import { IFindManyTodosFromUserProps, IUpdateTodo, TodoRepository } from "src/application/repositories/interfaces/todo-repository";
import { PrismaService } from "../prisma.service";
import { PrismaTodoMapper } from "../mappers/todo-mapper";
import { Injectable } from "@nestjs/common";

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

    async findManyTodosFromUser({
        userId,
        page,
        quanty,
        title,
    }: IFindManyTodosFromUserProps): Promise<Todo[]> {
        
        const userTodos = await this.prismaService.todoList.findMany({
            where:{
                userId,
                ...(
                    title ? {
                        title:{
                            contains: `${title}%`
                        }
                    } : {}
                )
            },
            skip: +page,
            take: +quanty
        });

        return userTodos.map(PrismaTodoMapper.toDomain)

    }

    

}