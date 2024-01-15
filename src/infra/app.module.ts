import { Module } from '@nestjs/common';
import { HttpModule } from './http/http.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './http/auth/auth.guard';
import { MailerModule } from '@nestjs-modules/mailer';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:'.env'
    }),
    HttpModule,
    DatabaseModule,
    MailerModule.forRoot({
      transport: {
        service: process.env.EMAIL_SENDER_SERVICE,
        host: 'smtp.example.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_SENDER_USER,
          pass: process.env.EMAIL_SENDER_PASSWORD,
        },
      },
    options:{
      global: true
    }
    })
  ],
  controllers:[],
  providers:[
    JwtService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ],
})
export class AppModule {}
