import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { MakeAuthUseCase } from "src/application/use_cases/auth/make-auth";
import { GenerateJwtUseCase } from "src/application/use_cases/jwt/generate-jwt";

@Module({
    imports:[],
    controllers:[AuthController],
    providers:[
        MakeAuthUseCase,
        GenerateJwtUseCase
    ]
})
export class AuthModule {}