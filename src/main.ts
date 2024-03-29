import { NestFactory } from '@nestjs/core';
import { AppModule } from './infra/app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { config as dotenvConfig } from 'dotenv'

async function bootstrap() {

  const _PORT = process.env.WEB_SERVER_PORT;

  dotenvConfig();

  const app = await NestFactory.create(AppModule,{
    cors:true
  });

    const config = new DocumentBuilder()
    .setTitle('TODO-API')
    .setDescription('API REST desenvolvida para o teste técnico da Encibra')
    .setVersion('1.0')
    .addTag('todo')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(_PORT);

}

bootstrap();
