import { Injectable } from "@nestjs/common";
import { UsersRepository } from "src/application/repositories/interfaces/users-repository";
import { hash } from "bcrypt";

@Injectable()
export class RedefinePasswordUseCase{

    constructor(
        private readonly usersRepository: UsersRepository
    ){}

    async execute(newPassword: string,userId: string){

        newPassword = await hash(newPassword,12);

        await this.usersRepository.updatePassword(newPassword,userId);

    }
    
}