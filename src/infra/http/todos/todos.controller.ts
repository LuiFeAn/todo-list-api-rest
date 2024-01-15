import { Controller, Get, Post, Patch, Delete, Param, Body, Query, NotFoundException, UnauthorizedException, Req, HttpCode } from "@nestjs/common";
import { FindUserTodosUseCase } from "src/application/use_cases/todo/find-user-todos";
import { FindManyTodosFromUserDTO } from "./dtos/find-many-user-todos";
import { CreateTodoUseCase } from "src/application/use_cases/todo/create-todo";
import { UpdateUserTodoUseCase } from "src/application/use_cases/todo/update-user-todo";
import { DeleteUserTodoUseCase } from "src/application/use_cases/todo/delete-user-todo";
import { CreateUserTodoDTO } from "./dtos/create-user-todo";
import { TodoToHttpMapper } from "./mappers/todo-to-http";
import { UpdateUserTodoDTO } from "./dtos/update-user-todo";
import { UserNoExists } from "src/application/use_cases/user/errors/user-no-exists";
import { ApiTags, ApiOperation, ApiResponse, ApiOkResponse, ApiBearerAuth, ApiHeader } from "@nestjs/swagger";
import { Request } from "express";
import { TodoSwaggerResponseDto } from "./dtos/find-many-user-todo-swagger-dto";
import { TodoNotFound } from "src/application/use_cases/todo/errors/todo-not-found";
import { TodoNotFoundExepction } from "./errors/todo-not-found";
import { CommonUuidQueryParam } from "../dtos/common-uuid-param";
import { CommonSearchNotFoundException } from "../errors/common-search-not-found";
import { CommonSearchNotFound } from "src/application/use_cases/common/errors/common-search-not-found";

@Controller('todos')
@ApiTags('Tarefas')
@ApiBearerAuth()
@ApiHeader({
    name: 'Authorization',
    description: 'Token JWT',
})
export class TodosController {

    constructor(
        private readonly findUserTodos: FindUserTodosUseCase,
        private readonly createTodo: CreateTodoUseCase,
        private readonly updateUserTodo: UpdateUserTodoUseCase,
        private readonly deleteUserTodo: DeleteUserTodoUseCase
    ){}

    @Get()
    @ApiOperation({summary:'Obtém todas as tarefas de um usuário, através do JWT payload'})
    @ApiOkResponse({
        description:'Obteve todas as tarefas de um usuário',
        type: TodoSwaggerResponseDto,
        isArray:true
    })
    @ApiResponse({
        description:"As propriedades page ou quanty não foram fornecidas nos query params",
        status:400,
    })
    @ApiResponse({
        description:"Não foram encontrados resultados referentes a solicitação feita",
        status:404,
    })
    async obtainTodos(@Query() params: FindManyTodosFromUserDTO, @Req() request: Request){

        try{

            const { page, quanty, title } = params;

            const { todoList, totalPages } = await this.findUserTodos.execute({
                page,
                quanty,
                title,
                userId: request.jwtDecode.id
            });

            return {
                todoList: todoList.map(TodoToHttpMapper.toHttp),
                totalPages
            }

        }catch(err){

            if( err instanceof CommonSearchNotFound ){

                throw new CommonSearchNotFoundException();

            }

        }

    }

    @Patch('/:id')
    @ApiOperation({summary:'Atualiza parcialmente uma tarefa'})
    @ApiOkResponse({
        status:206,
        description:'Tarefa parcialmente atualizada com sucecsso',
        type: TodoSwaggerResponseDto,
    },)
    @HttpCode(206)
    async partialUpdate(@Param() queryParams: CommonUuidQueryParam, @Body() body: UpdateUserTodoDTO, @Req() request: Request){

        const { id } = queryParams;

        const { mustBeCompletedIn, description, priority, title } = body;

        try{

            const { updatedTodo } = await this.updateUserTodo.execute({
                id,
                userId: request.jwtDecode.id,
                mustBeCompletedIn,
                description,
                priority,
                title
            });
    
            return TodoToHttpMapper.toHttp(updatedTodo);

        }catch(err){

            
            if( err instanceof TodoNotFound ){

                throw new TodoNotFoundExepction();
            }

        }


    }

    @Delete('/:id')
    @ApiOperation({summary:'Deleta uma tarefa'})
    @ApiResponse({status:204,description:'Tarefa deletada com sucesso'})
    @HttpCode(204)
    async delete(@Param() queryParams: CommonUuidQueryParam, @Req() request: Request){

        const { id } = queryParams;

        try{

            
            await this.deleteUserTodo.execute({
                todoId: id,
                userId: request.jwtDecode.id
            });;

        }catch(err){

            if( err instanceof TodoNotFound ){

                throw new TodoNotFoundExepction();

            }

        }

    }

    @Post()
    @ApiOperation({summary:'Cria uma tarefa'})
    @ApiOkResponse({
        status:200,
        description:'Tarefa criada com sucesso',
        type: TodoSwaggerResponseDto
    })
    @ApiResponse({status:401,description:'Não possui autorização para atualizar a tarefa'})
    @ApiResponse({status:404,description:'Não foi possível encontrar um usuário para criar uma tarefa'})
    async create(@Body() body: CreateUserTodoDTO, @Req() request: Request){

       try{

            const { description, mustBeCompletedIn, priority, title } = body;

            const { todoList } = await this.createTodo.execute({
                title,
                description, 
                mustBeCompletedIn: new Date(mustBeCompletedIn),
                priority,
                userId: request.jwtDecode.id
            });

            return TodoToHttpMapper.toHttp(todoList);

       }catch(err){

            if( err instanceof Error ){

                if( err.message === 'Invalid complete date'){

                    throw new UnauthorizedException('A data referente a conclusão da tarefa é inválida\nPor favor, insira uma data maior ou igual a data atual');

                }

            }

            if( err instanceof UserNoExists ){

                throw new NotFoundException('O usuário referente não existe')

            }

       }

    }
    
}