import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { RedefinePasswordUseCase } from "src/application/use_cases/redefine_password/redefine-password";
import { RedefinePasswordDTO } from "./dtos/redefine-password-dto";

@Controller('redefine-password')
export class RedefinePasswordController{

    constructor(
        private readonly redefinePassword: RedefinePasswordUseCase
    ){}

    @Post()
    async redefine(@Req() request: Request, @Body() body: RedefinePasswordDTO ){

        const { password } = body;

        await this.redefinePassword.execute(password,request.jwtDecode.id);

    }

}