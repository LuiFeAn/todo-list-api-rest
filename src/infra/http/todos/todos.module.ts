import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { FindUserTodosUseCase } from 'src/application/use_cases/todo/find-user-todos';
import { DeleteUserTodoUseCase } from 'src/application/use_cases/todo/delete-user-todo';
import { UpdateUserTodoUseCase } from 'src/application/use_cases/todo/update-user-todo';
import { CreateTodoUseCase } from 'src/application/use_cases/todo/create-todo';

@Module({
  imports: [],
  controllers:[TodosController],
  providers:[
    CreateTodoUseCase,
    FindUserTodosUseCase,
    UpdateUserTodoUseCase,
    DeleteUserTodoUseCase,
  ]
})
export class TodosModule {}
