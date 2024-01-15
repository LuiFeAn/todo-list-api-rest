import { Module } from "@nestjs/common";
import { RedefinePasswordController } from "./redefine-password.controller";
import { RedefinePasswordUseCase } from "src/application/use_cases/redefine_password/redefine-password";

@Module({
    imports:[],
    controllers:[RedefinePasswordController],
    providers:[
        RedefinePasswordUseCase
    ],
    exports:[]
})
export class RedefinePasswordModule{};