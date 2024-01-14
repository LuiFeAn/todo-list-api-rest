import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { RegisterUserUseCase } from 'src/application/use_cases/user/register-user';

@Module({
  imports:[],
  controllers: [UsersController],
  providers: [
    RegisterUserUseCase],
})
export class UsersModule {}
