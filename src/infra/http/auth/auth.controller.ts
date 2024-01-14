import { Body, Controller, Get, Post, UnauthorizedException } from "@nestjs/common";
import { MakeAuthUseCase } from "src/application/use_cases/auth/make-auth";
import { SiginDTO } from "./dtos/sigin-dto";
import { AuthToHttpMapper } from "./mappers/auth-to-http";
import { SetMetadata } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiOkResponse } from "@nestjs/swagger";
import { SiginSwaggerResponseDto } from "./dtos/sigin-swagger-dto";

@Controller('/auth')
@SetMetadata('PUBLIC_RESOURCE',true)
@ApiTags('Autenticação')
export class AuthController {

    constructor(
        private readonly makeAuth: MakeAuthUseCase
    ){}

    @Post()
    @ApiOperation({summary:'Autentica um usuário'})
    @ApiOkResponse({
        status:200,
        description:'Autenticação realizada com sucesso',
        type: SiginSwaggerResponseDto
    })
    async authenticate(@Body() body: SiginDTO){

       try{

            const { email, password } = body;

            const { acessToken, user } = await this.makeAuth.execute({
                email,
                password
            });

            return {
                acessToken,
                user: AuthToHttpMapper.toHttp(user)
            }

       }catch(err){

            if(err instanceof Error){

                if( err.message === 'Invalid credentials' ){

                    throw new UnauthorizedException('Email ou senha invalido(s)');

                }

            }

       }

    }

}