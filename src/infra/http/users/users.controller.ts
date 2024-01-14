import { RegisterUserUseCase } from "src/application/use_cases/user/register-user";
import { Body, ConflictException, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create.user.dto";
import { UserToHttpMapper } from "./mappers/user-to-http";
import { EmailAlreadyExists } from "src/application/use_cases/user/errors/email-already-exists";
import { SetMetadata } from "@nestjs/common";
import { ApiTags,ApiOperation, ApiResponse, ApiOkResponse } from '@nestjs/swagger';
import { CreateUserSwaggerResponseDto } from "./dtos/create-user-response-dto";

@Controller('users')
@SetMetadata('PUBLIC_RESOURCE',true)
@ApiTags('Usuários')
export class UsersController {

    constructor(
        private readonly registerUser: RegisterUserUseCase
    ){}

    @Post()
    @ApiOperation({summary:'Registra um usuário no sistema'})
    @ApiResponse({status:409,description:'Email já cadastrado'})
    @ApiOkResponse({
        description: 'Usuário registrado com sucesso',
        type: CreateUserSwaggerResponseDto
    })
    async createUser(@Body() body: CreateUserDto){

       try{

            const { user } = await this.registerUser.execute(body)

            return UserToHttpMapper.toHttp(user);

       }catch(err){

            if( err instanceof EmailAlreadyExists ){

                throw new ConflictException(`O email fornecido já se encontra cadastrado`);

            }

       }

    }


}