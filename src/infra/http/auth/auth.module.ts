import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { MakeAuthUseCase } from "src/application/use_cases/auth/make-auth";

@Module({
    imports:[],
    controllers:[AuthController],
    providers:[
        MakeAuthUseCase,
    ]
})
export class AuthModule {}