import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UsersRepository } from 'src/application/repositories/interfaces/users-repository';
import { PrismaUsersRepository } from './prisma/repositories/users.repository';
import { PrismaTodosRepository } from './prisma/repositories/todos.repository';
import { TodoRepository } from 'src/application/repositories/interfaces/todo-repository';

@Global()
@Module({
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
    {
      provide: TodoRepository,
      useClass: PrismaTodosRepository
    }
  ],
  exports:[PrismaService,UsersRepository,TodoRepository]
})
export class DatabaseModule {}
