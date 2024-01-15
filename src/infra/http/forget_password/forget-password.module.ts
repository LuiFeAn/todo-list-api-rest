import { Module } from "@nestjs/common";
import { ForgetPasswordController } from "./forget-password.controller";
import { EmailSenderUseCase } from "src/application/use_cases/email/send-email";
import { GenerateJwtUseCase } from "src/application/use_cases/jwt/generate-jwt";
import { ForgetPasswordUseCase } from "src/application/use_cases/forget_password/forget-password";

@Module({
    controllers:[ForgetPasswordController],
    providers:[
        ForgetPasswordUseCase,
        EmailSenderUseCase,
        GenerateJwtUseCase,
    ]
})
export class ForgetPasswordModule{}