import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { RedefinePasswordUseCase } from "src/application/use_cases/redefine_password/redefine-password";
import { RedefinePasswordDTO } from "./dtos/redefine-password-dto";
import { ApiTags, ApiBearerAuth, ApiHeader, ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller('redefine-password')
@ApiTags('Redefinição de senha')
@ApiBearerAuth()
@ApiHeader({
    name: 'Authorization',
    description: 'Token JWT',
})
export class RedefinePasswordController{

    constructor(
        private readonly redefinePassword: RedefinePasswordUseCase
    ){}

    @Post()
    @ApiOperation({summary:'Redefine a senha de um usuário registrado'})
    @ApiResponse({status:204,description:'Senha redefinida com sucesso'})
    async redefine(@Req() request: Request, @Body() body: RedefinePasswordDTO ){

        const { password } = body;

        await this.redefinePassword.execute(password,request.jwtDecode.id);

    }

}