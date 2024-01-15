import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ForgetPasswordModule } from './forget_password/forget-password.module';
import { RedefinePasswordModule } from './redefine_password/redefine-password.module';

@Module({
  imports: [ JwtModule.register({
      global:true,
      secret: process.env.JWT_SECRET,
  }),
  UsersModule,
  TodosModule,
  AuthModule,
  ForgetPasswordModule,
  RedefinePasswordModule,
],
  controllers: [],
  providers: [JwtService],
})
export class HttpModule {}
