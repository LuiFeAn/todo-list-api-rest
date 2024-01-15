import { JwtService } from "@nestjs/jwt";
import { IGenerateJwtProps } from "./interfaces/generate-jwt";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GenerateJwtUseCase{

    constructor(
        private readonly jwtService: JwtService
    ){}

    async execute({ payload, options }: IGenerateJwtProps){
        
        const acessToken = await this.jwtService.signAsync(payload,options);

        return acessToken;

    }

}