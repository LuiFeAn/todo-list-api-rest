import { Body, Controller, NotFoundException, Post, SetMetadata } from "@nestjs/common";
import { EmailSenderUseCase } from "src/application/use_cases/email/send-email";
import { ForgetPasswordDto } from "./dtos/forget-password-dto";
import { UserNoExists } from "src/application/use_cases/user/errors/user-no-exists";
import { ApiTags, ApiResponse, ApiOperation } from "@nestjs/swagger";
import { GenerateJwtUseCase } from "src/application/use_cases/jwt/generate-jwt";
import { UsersRepository } from "src/application/repositories/interfaces/users-repository";
import { ForgetPasswordUseCase } from "src/application/use_cases/forget_password/forget-password";

@Controller('/forget-password')
@SetMetadata('PUBLIC_RESOURCE',true)
@ApiTags('Redefinição de senha')
export class ForgetPasswordController {

    constructor(
        private readonly forgetPassword: ForgetPasswordUseCase
    ){}

    @Post()
    @ApiOperation({summary:'Redefine a senha de um usuário registrado'})
    @ApiResponse({status:404,description:'Email não cadastrado no sistema'})
    @ApiResponse({status:201,description:'Email de redefinição de senha enviado'})
    async sendEmail(@Body() body: ForgetPasswordDto){

        try{

            const { email } = body;

            await this.forgetPassword.execute(email);

        }catch(err){

            console.log(err);

            if( err instanceof UserNoExists ){

                throw new NotFoundException('Por favor, verifique se seu email está correto')

            }

        }

    }

}